interface Event {
    id: number;
    eventTitle: string;
    eventDescription: string;
    eventLocation: string;
}

export const Events: Event[] = [
    {
        id: 1,
        eventTitle: 'Summer Jazz Festival',
        eventDescription: 'Annual jazz festival featuring local and international artists',
        eventLocation: 'Central Park, New York'
    },
    {
        id: 2,
        eventTitle: 'Rock the Stadium',
        eventDescription: 'Stadium rock concert featuring top bands',
        eventLocation: 'MetLife Stadium, New Jersey'
    },
    {
        id: 3,
        eventTitle: 'World Cup Finals',
        eventDescription: 'International soccer championship final match',
        eventLocation: 'Wembley Stadium, London'
    },
    {
        id: 4,
        eventTitle: 'Cherry Blossom Festival',
        eventDescription: 'Traditional Japanese cultural celebration',
        eventLocation: 'Washington DC National Mall'
    },
    {
        id: 5,
        eventTitle: 'Food & Wine Expo',
        eventDescription: 'International culinary showcase with live music',
        eventLocation: 'Convention Center, San Francisco'
    }
]