import { APIResponse, ErrorCode } from "./types";
export default class ApiAnswer implements APIResponse {
    status: number;
    message?: string | undefined;
    error?: ErrorCode | undefined;
    content?: any;
    constructor(status: number);
    SetMessage(message: string): ApiAnswer;
    SetError(errorCode: ErrorCode, message?: string): ApiAnswer;
    SetContent(data: any): ApiAnswer;
}
