import { User } from "../../generated/prisma";
export declare class DepartamentUserDTO {
    static GenerateArray(users: User[]): DepartamentUserDTO[];
    id: number;
    name: string;
    departament: number | null;
    shop: number | null;
    lastOnline: Date | null;
    constructor(user: User);
}
