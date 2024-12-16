interface Notification {
    id: number;
    notificationTitle: string;
    notificationType: string;
    notificationTime: string;
    notificationBody: string;
    isProcess: boolean;
}

export const Notifications: Notification[] = [
    {
        id: 1,
        notificationTitle: "TixGenie",
        notificationType: "Reminder",
        notificationTime: "09:30 AM",
        notificationBody: "Turn on notification for event you might be interested in",
        isProcess: false
    },
    {
        id: 2,
        notificationTitle: "TixGenie",
        notificationType: "Alert",
        notificationTime: "02:15 PM",
        notificationBody: "Your ticket booking for 'Early Bird Concert' is confirmed",
        isProcess: true
    },
    {
        id: 3,
        notificationTitle: "TixGenie",
        notificationType: "Update",
        notificationTime: "04:45 PM",
        notificationBody: "New events are available in your area. Check them out!",
        isProcess: true
    }
]