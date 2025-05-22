"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiAnswer {
    constructor(status) {
        this.status = status;
    }
    SetMessage(message) {
        this.message = message;
        return this;
    }
    SetError(errorCode, message) {
        this.error = errorCode;
        this.message = message;
        return this;
    }
    SetContent(data) {
        this.content = data;
        return this;
    }
}
exports.default = ApiAnswer;
