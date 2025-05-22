import { NotificationMessage } from "./notification.types";



const NotificationBuilder = class NotificationBuilder {

    message: string;
    link?: {url: string, text: string};
    forUser?: number;

    constructor(message: string) {
        this.message = message;
    }

    CreateNewWithLink(link: {url: string, text: string}): NotificationBuilder {
        this.link = {
            url: link.url,
            text: link.text
        }
        return this;
    }

    ForUser(userId: number): NotificationBuilder {
        this.forUser = userId;
        return this;
    }

    Build(): NotificationMessage {
        return {
            body: this.message,
            link: this.link,
            forUser: this.forUser
        }
    }
}
