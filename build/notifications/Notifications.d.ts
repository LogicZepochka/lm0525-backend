import { NotificationMessage } from "./notification.types";
declare const Notifications: {
    CreateNotificationForUser(message: NotificationMessage): Promise<{
        id: number;
        userId: number;
        message: string;
        createdAt: Date;
        IsDeleted: boolean;
        Readed: boolean;
        showed: Date | null;
    }>;
    SendNotificationForManagers(message: NotificationMessage, departamentId: number, shopId: number): Promise<{
        name: string;
        id: number;
        password: string;
        lastOnline: Date | null;
        role: import("../../generated/prisma").$Enums.Role;
        shopId: number | null;
        departamentId: number | null;
        phone: string;
        telegramChat: string | null;
        telegramSettings: import("../../generated/prisma/runtime/library").JsonValue | null;
    }[]>;
    SendNotificationForAdmins(message: NotificationMessage): Promise<{
        name: string;
        id: number;
        password: string;
        lastOnline: Date | null;
        role: import("../../generated/prisma").$Enums.Role;
        shopId: number | null;
        departamentId: number | null;
        phone: string;
        telegramChat: string | null;
        telegramSettings: import("../../generated/prisma/runtime/library").JsonValue | null;
    }[]>;
};
export default Notifications;
