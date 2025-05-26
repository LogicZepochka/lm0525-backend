import { NotificationMessage } from "./notification.types";
declare const Notifications: {
    CreateNotificationForUser(message: NotificationMessage): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        IsDeleted: boolean;
        message: string;
        Readed: boolean;
        showed: Date | null;
    }>;
    SendNotificationForManagers(message: NotificationMessage, departamentId: number, shopId: number): Promise<{
        id: number;
        name: string;
        departamentId: number | null;
        password: string;
        lastOnline: Date | null;
        role: import("../../generated/prisma").$Enums.Role;
        shopId: number | null;
        phone: string;
        telegramChat: string | null;
        telegramSettings: import("../../generated/prisma/runtime/library").JsonValue | null;
    }[]>;
    SendNotificationForAdmins(message: NotificationMessage): Promise<{
        id: number;
        name: string;
        departamentId: number | null;
        password: string;
        lastOnline: Date | null;
        role: import("../../generated/prisma").$Enums.Role;
        shopId: number | null;
        phone: string;
        telegramChat: string | null;
        telegramSettings: import("../../generated/prisma/runtime/library").JsonValue | null;
    }[]>;
};
export default Notifications;
