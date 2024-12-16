interface Collection {
    id: number;
    ticketName: string;
    ticketType: string;
    ticketDuration: number;
    ticketNumber: number;
    ticketStartTime: string;
    ticketEndTime: string;
    ticketDate: string;
    ticketPrice: string;
}

export const Collection: Collection[] = [
    {
        id: 1,
        ticketName: "Early Bird Concert Pass",
        ticketType: "VIP",
        ticketDuration: 3,
        ticketNumber: 247,
        ticketStartTime: "07:00 PM",
        ticketEndTime: "10:00 PM",
        ticketDate: "25 February 2024",
        ticketPrice: "149.99"
    },
    {
        id: 2,
        ticketName: "Movie Marathon Pass",
        ticketType: "Standard",
        ticketDuration: 4,
        ticketNumber: 583,
        ticketStartTime: "02:00 PM",
        ticketEndTime: "06:00 PM",
        ticketDate: "25 February 2024",
        ticketPrice: "29.99"
    },
    {
        id: 3,
        ticketName: "Theater Show Premium",
        ticketType: "Premium",
        ticketDuration: 2,
        ticketNumber: 391,
        ticketStartTime: "08:00 PM",
        ticketEndTime: "10:00 PM",
        ticketDate: "25 February 2024",
        ticketPrice: "89.99"
    }
]