"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserDTO_1 = require("./UserDTO");
class ToolRequestDTO {
    constructor(request, author) {
        this.id = request.id;
        this.name = request.toolName;
        this.departament = request.departamentId;
        this.status = request.status;
        this.description = request.description;
        this.howToContact = request.howToContact ?? undefined;
        this.createdAt = request.createdAt;
        this.fromUser = new UserDTO_1.UserDTO(author);
        this.rejectReason = request.RejectionReason ?? undefined;
    }
    static fromEntity(request, author) {
        return new ToolRequestDTO(request, author);
    }
}
exports.default = ToolRequestDTO;
