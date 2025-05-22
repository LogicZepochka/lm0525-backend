import { RequestStatus, ToolRequest, User } from "../../generated/prisma";
import { UserDTO } from "./UserDTO";
export default class ToolRequestDTO {
    id: number;
    name: string;
    departament: number;
    status: RequestStatus;
    description: string;
    howToContact?: string;
    createdAt: Date;
    fromUser: UserDTO;
    rejectReason?: string;
    constructor(request: ToolRequest, author: User);
    static fromEntity(request: ToolRequest, author: User): ToolRequestDTO;
}
