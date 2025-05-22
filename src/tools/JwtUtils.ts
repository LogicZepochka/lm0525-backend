import { TokenPair, UserTokenized } from "./JwtUtils.types"
import { User } from "../../generated/prisma";
import Jwt from "jsonwebtoken";
import config from "../config/config";
import Prisma from "./prisma";
import { decryptAES, encryptAES } from "./security";

const JwtUtils = new class {
    
    async SignInUser(user: User): Promise<TokenPair> {
        const tokenizedUser: UserTokenized = {
            id: user.id,
            name: user.name,
            role: user.role
        }

        let accessToken = await encryptAES(Jwt.sign(tokenizedUser,config.authorization.secret,{expiresIn: "1d"}),config.security.password);
        let refreshToken = await encryptAES(Jwt.sign({
            id: user.id
        },config.authorization.secret,{expiresIn:"1d"}),config.security.password);
        var result: TokenPair = {
            access: accessToken,
            refresh: refreshToken
        }
        try {
        await Prisma.refreshToken.create({
                    data: {
                        userId: user.id,
                        token: result.refresh
                    }
        });
        }
        catch {
            await Prisma.refreshToken.update({
                where: {userId: user.id},
                data: {
                    token: result.refresh
                }
            });
        }   

        return result;
    }

    async ValidateToken(token: string): Promise<UserTokenized | null> {
        
        console.log("[AUTH] Decrypting token...")
        
        try {
        let uncryptedToken = await decryptAES(token,config.security.password);
        
            var tokenizedUser: UserTokenized = Jwt.verify(uncryptedToken, config.authorization.secret) as UserTokenized;
            console.log("[AUTH] Token is valid")
            return tokenizedUser;
        }
        catch(e) {
            console.log("[AUTH] Failed to decrypt: "+e)
            return null;
        }
    }

    async RefreshToken(refreshToken: string): Promise<TokenPair | null> {
        let valided = await this.ValidateToken(refreshToken);
        if(!valided) return null;
        console.log("[AUTH] Valided token: "+valided)
        const refreshTokenDecrypted = await decryptAES(refreshToken,config.security.password);
        console.log("[AUTH] Decrypted token: "+refreshTokenDecrypted)
        let token = await Prisma.refreshToken.findFirst({
            where: {token: refreshToken},
            include: {
                forUser: true
            }
        });
        console.log("[AUTH] Cleaning tokens...")
        if(token != null) {
            try {
                await Prisma.refreshToken.delete({
                    where: {userId: token.forUser.id}
                })
                console.log("[AUTH] Refresh token removed from DB")
            }
            catch {
                console.log("[AUTH] Warning: Failed to remove refresh from DB")
            }
            return this.SignInUser(token.forUser);
        }
        else {
            console.log("[AUTH] WARNING: Token was null")
        }

        return null;
    }
}

export default JwtUtils;