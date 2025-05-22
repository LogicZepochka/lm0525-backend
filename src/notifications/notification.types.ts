export interface NotificationMessage {
    body: string;
    forUser?: number
    link?: {
        url: string;
        text: string;
    }
}
