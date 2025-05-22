export enum ErrorCode {
    NotAuthorized = "NOT_AUTORIZED",
    InvalidToken = "INVALID_TOKEN",
    AccessTokenExpired = "ACCESS_EXPIRED",
    InternalError = "INTERNAL_ERROR",
    NotAllowed = "NOT_ALLOWED",
    WrongData = "WRONG_DATA",
    InvalidCredentials = "INVALID_CREDS",
    NotFound = "NOT_FOUND"
}

export interface APIResponse {
    status: number,
    message?: string,
    error?: ErrorCode
    content?: any
}