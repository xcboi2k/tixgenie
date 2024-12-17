import { ImageSourcePropType } from "react-native";

interface Bookmark {
    id: number;
    name: string;
    date: string;
    location: string;
    type: string;
    attendees: string;
    imageUrl: ImageSourcePropType;
}

const monthAbbreviations: { [key: string]: string } = {
    'January': 'Jan',
    'February': 'Feb',
    'March': 'Mar',
    'April': 'Apr',
    'May': 'May',
    'June': 'Jun',
    'July': 'Jul',
    'August': 'Aug',
    'September': 'Sep',
    'October': 'Oct',
    'November': 'Nov',
    'December': 'Dec',
};

export const Bookmarks: Bookmark[] = [
    {
        id: 1,
        name: 'Coachella Valley Music and Arts Festival',
        date: `12 ${monthAbbreviations['April']}`,
        location: 'Indio, California',
        type: 'Music Festival',
        attendees: '14k+ Going',
        imageUrl: require('../assets/images/festivals/coachella.png')
    },
    {
        id: 2,
        name: 'Glastonbury Festival',
        date: `26 ${monthAbbreviations['June']}`,
        location: 'Glastonbury, England',
        type: 'Music Festival',
        attendees: '20k+ Going',
        imageUrl: require('../assets/images/festivals/glastonbury.png')
    },
    {
        id: 3,
        name: 'Tomorrowland',
        date: `19 ${monthAbbreviations['July']}`,
        location: 'Boom, Belgium',
        type: 'Electronic Dance Music Festival',
        attendees: '30k+ Going',
        imageUrl: require('../assets/images/festivals/tomorrowland.jpg')
    },
    {
        id: 4,
        name: 'Lollapalooza',
        date: `1 ${monthAbbreviations['August']}`,
        location: 'Chicago, Illinois',
        type: 'Music Festival',
        attendees: '25k+ Going',
        imageUrl: require('../assets/images/festivals/lollapalooza.jpg')
    },
    {
        id: 5,
        name: 'Ultra Music Festival',
        date: `22 ${monthAbbreviations['March']}`,
        location: 'Miami, Florida',
        type: 'Electronic Dance Music Festival',
        attendees: '40k+ Going',
        imageUrl: require('../assets/images/festivals/ultra.jpg')
    }
]