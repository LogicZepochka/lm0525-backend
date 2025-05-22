import { Item, ItemType, RequestStatus, ToolRequest, User } from "../../generated/prisma"
import { GetTypeName } from "../tools/convert"
import { UserDTO } from "./UserDTO"

export default class ToolRequestDTO {
    
    id: number
    name: string
    departament: number
    status: RequestStatus
    description: string
    howToContact?: string
    createdAt: Date
    fromUser: UserDTO
    rejectReason?: string

    constructor(request: ToolRequest,author: User) {
        this.id = request.id
        this.name = request.toolName
        this.departament = request.departamentId
        this.status = request.status
        this.description = request.description
        this.howToContact = request.howToContact ?? undefined
        this.createdAt = request.createdAt
        this.fromUser = new UserDTO(author);
        this.rejectReason = request.RejectionReason ?? undefined
    }

    static fromEntity(request: ToolRequest,author: User): ToolRequestDTO {
        return new ToolRequestDTO(request,author)
    }
}