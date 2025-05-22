import { User } from "../../generated/prisma";
export declare class UserDTO {
    id: number;
    name: string;
    departament: number | null;
    shop: number | null;
    constructor(user: User);
}
