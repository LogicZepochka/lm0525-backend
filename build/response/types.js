"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["NotAuthorized"] = "NOT_AUTORIZED";
    ErrorCode["InvalidToken"] = "INVALID_TOKEN";
    ErrorCode["AccessTokenExpired"] = "ACCESS_EXPIRED";
    ErrorCode["InternalError"] = "INTERNAL_ERROR";
    ErrorCode["NotAllowed"] = "NOT_ALLOWED";
    ErrorCode["WrongData"] = "WRONG_DATA";
    ErrorCode["InvalidCredentials"] = "INVALID_CREDS";
    ErrorCode["NotFound"] = "NOT_FOUND";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
