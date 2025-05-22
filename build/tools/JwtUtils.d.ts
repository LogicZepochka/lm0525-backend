import { TokenPair, UserTokenized } from "./JwtUtils.types";
import { User } from "../../generated/prisma";
declare const JwtUtils: {
    SignInUser(user: User): Promise<TokenPair>;
    ValidateToken(token: string): Promise<UserTokenized | null>;
    RefreshToken(refreshToken: string): Promise<TokenPair | null>;
};
export default JwtUtils;
