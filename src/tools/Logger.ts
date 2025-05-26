
export enum LoggerMessageType {
    Default,
    Warning,
    Error
}

export default function CreateLogger(tag: string) {

    return (message: string,messageType: LoggerMessageType = LoggerMessageType.Default) => {
        let msgTime = new Date()
        switch(messageType) {
            case LoggerMessageType.Error: {
                console.log(`\x1b[31m[${msgTime.toLocaleDateString()} ${msgTime.toLocaleTimeString()}]\t${tag}\t[ERROR] ${message}\x1b[0m`)
                break;
            }
            case LoggerMessageType.Warning: {
                console.log(`\x1b[33m[${msgTime.toLocaleDateString()} ${msgTime.toLocaleTimeString()}]\t${tag}\t[WARNING] ${message}\x1b[0m`)
                break;
            }
            default: {
                console.log(`[${msgTime.toLocaleDateString()} ${msgTime.toLocaleTimeString()}]\t${tag}\t ${message}`)
                break;
            }
        }
    }
}