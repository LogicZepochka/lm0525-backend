import { APIResponse, ErrorCode } from "./types";


export default class ApiAnswer implements APIResponse {
    status: number;
    message?: string | undefined;
    error?: ErrorCode | undefined;
    content?: any;
    
    constructor(status: number) {
        this.status = status;
    }

    SetMessage(message:string): ApiAnswer {
        this.message = message;
        return this;
    }

    SetError(errorCode: ErrorCode, message?: string): ApiAnswer {
        this.error = errorCode;
        this.message = message;
        return this;
    }

    SetContent(data: any): ApiAnswer {
        this.content = data;
        return this;
    }
}