export declare enum LoggerMessageType {
    Default = 0,
    Warning = 1,
    Error = 2
}
export default function CreateLogger(tag: string): (message: string, messageType?: LoggerMessageType) => void;
