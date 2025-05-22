import { Role } from "../../generated/prisma"
import { TokenPair } from "../tools/JwtUtils.types"

export interface AuthUserDTO {
    id: number,
    name: string
    phone: string
    role: Role
    shop: number
    departament: number
}

export interface AuthDataDTO {
    user: AuthUserDTO
    tokens: TokenPair
}