import { ImageSourcePropType } from "react-native";

interface Festival {
    id: number;
    name: string;
    date: string;
    imageUrl: ImageSourcePropType;
}

export const MusicFestivals: Festival[] = [
    {
        id: 1,
        name: 'Coachella Valley Music and Arts Festival',
        date: '12 April 2024',
        imageUrl: require('../assets/images/festivals/coachella.png')
    },
    {
        id: 2,
        name: 'Glastonbury Festival',
        date: '26 June 2024',
        imageUrl: require('../assets/images/festivals/glastonbury.png')
    },
    {
        id: 3,
        name: 'Tomorrowland',
        date: '19 July 2024',
        imageUrl: require('../assets/images/festivals/tomorrowland.jpg')
    },
    {
        id: 4,
        name: 'Lollapalooza',
        date: '1 August 2024',
        imageUrl: require('../assets/images/festivals/lollapalooza.jpg')
    },
    {
        id: 5,
        name: 'Ultra Music Festival',
        date: '22 March 2024',
        imageUrl: require('../assets/images/festivals/ultra.jpg')
    }
]