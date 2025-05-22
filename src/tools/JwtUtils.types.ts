import { Role } from "../../generated/prisma"

export type TokenPair = {
    access: string
    refresh: string
}

export type UserTokenized = {
    id: number,
    name: string,
    role: Role
}