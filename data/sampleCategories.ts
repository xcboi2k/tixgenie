interface Category {
    id: number;
    categoryName: string;
    categoryCode: string;
}

export const Categories: Category[] = [
    {
        id: 1,
        categoryName: 'Music Festivals',
        categoryCode: 'music-festival'
    },
    {
        id: 2,
        categoryName: 'Concert Series',
        categoryCode: 'concert-series'
    },
    {
        id: 3,
        categoryName: 'Sports Events',
        categoryCode: 'sports-events'
    },
    {
        id: 4,
        categoryName: 'Cultural Festivals',
        categoryCode: 'cultural-festival'
    },
    {
        id: 5,
        categoryName: 'Food & Music Festivals',
        categoryCode: 'foodmusic-festival'
    }
]