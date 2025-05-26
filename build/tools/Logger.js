"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMessageType = void 0;
exports.default = CreateLogger;
var LoggerMessageType;
(function (LoggerMessageType) {
    LoggerMessageType[LoggerMessageType["Default"] = 0] = "Default";
    LoggerMessageType[LoggerMessageType["Warning"] = 1] = "Warning";
    LoggerMessageType[LoggerMessageType["Error"] = 2] = "Error";
})(LoggerMessageType || (exports.LoggerMessageType = LoggerMessageType = {}));
function CreateLogger(tag) {
    return (message, messageType = LoggerMessageType.Default) => {
        let msgTime = new Date();
        switch (messageType) {
            case LoggerMessageType.Error: {
                console.log(`\x1b[31m[${msgTime.toLocaleDateString()} ${msgTime.toLocaleTimeString()}]\t${tag}\t[ERROR] ${message}\x1b[0m`);
                break;
            }
            case LoggerMessageType.Warning: {
                console.log(`\x1b[33m[${msgTime.toLocaleDateString()} ${msgTime.toLocaleTimeString()}]\t${tag}\t[WARNING] ${message}\x1b[0m`);
                break;
            }
            default: {
                console.log(`[${msgTime.toLocaleDateString()} ${msgTime.toLocaleTimeString()}]\t${tag}\t ${message}`);
                break;
            }
        }
    };
}
