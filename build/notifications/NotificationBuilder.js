"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationBuilder = class NotificationBuilder {
    constructor(message) {
        this.message = message;
    }
    CreateNewWithLink(link) {
        this.link = {
            url: link.url,
            text: link.text
        };
        return this;
    }
    ForUser(userId) {
        this.forUser = userId;
        return this;
    }
    Build() {
        return {
            body: this.message,
            link: this.link,
            forUser: this.forUser
        };
    }
};
