"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const prisma_1 = __importDefault(require("./prisma"));
const security_1 = require("./security");
const JwtUtils = new class {
    async SignInUser(user) {
        const tokenizedUser = {
            id: user.id,
            name: user.name,
            role: user.role
        };
        let accessToken = await (0, security_1.encryptAES)(jsonwebtoken_1.default.sign(tokenizedUser, config_1.default.authorization.secret, { expiresIn: "1d" }), config_1.default.security.password);
        let refreshToken = await (0, security_1.encryptAES)(jsonwebtoken_1.default.sign({
            id: user.id
        }, config_1.default.authorization.secret, { expiresIn: "1d" }), config_1.default.security.password);
        var result = {
            access: accessToken,
            refresh: refreshToken
        };
        try {
            await prisma_1.default.refreshToken.create({
                data: {
                    userId: user.id,
                    token: result.refresh
                }
            });
        }
        catch {
            await prisma_1.default.refreshToken.update({
                where: { userId: user.id },
                data: {
                    token: result.refresh
                }
            });
        }
        return result;
    }
    async ValidateToken(token) {
        console.log("[AUTH] Decrypting token...");
        try {
            let uncryptedToken = await (0, security_1.decryptAES)(token, config_1.default.security.password);
            var tokenizedUser = jsonwebtoken_1.default.verify(uncryptedToken, config_1.default.authorization.secret);
            console.log("[AUTH] Token is valid");
            return tokenizedUser;
        }
        catch (e) {
            console.log("[AUTH] Failed to decrypt: " + e);
            return null;
        }
    }
    async RefreshToken(refreshToken) {
        let valided = await this.ValidateToken(refreshToken);
        if (!valided)
            return null;
        console.log("[AUTH] Valided token: " + valided);
        const refreshTokenDecrypted = await (0, security_1.decryptAES)(refreshToken, config_1.default.security.password);
        console.log("[AUTH] Decrypted token: " + refreshTokenDecrypted);
        let token = await prisma_1.default.refreshToken.findFirst({
            where: { token: refreshToken },
            include: {
                forUser: true
            }
        });
        console.log("[AUTH] Cleaning tokens...");
        if (token != null) {
            try {
                await prisma_1.default.refreshToken.delete({
                    where: { userId: token.forUser.id }
                });
                console.log("[AUTH] Refresh token removed from DB");
            }
            catch {
                console.log("[AUTH] Warning: Failed to remove refresh from DB");
            }
            return this.SignInUser(token.forUser);
        }
        else {
            console.log("[AUTH] WARNING: Token was null");
        }
        return null;
    }
};
exports.default = JwtUtils;
