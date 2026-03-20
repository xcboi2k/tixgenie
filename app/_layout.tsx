import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import '../global.css'

import { useColorScheme } from '@/hooks/useColorScheme'
import HomeScreen from './(tabs)/dashboard'
import SearchResultsScreen from './(tabs)/dashboard/search-results'
import FeatureScreen from './(tabs)/dashboard/feature'
import BuyTicketScreen from './(tabs)/dashboard/buy-ticket'
import PaymentScreen from './(tabs)/dashboard/payment'
import AddNewCardScreen from './(tabs)/dashboard/add-new-card'
import PaymentConfirmationScreen from './(tabs)/dashboard/payment-confirmation'
import QRCodeScreen from './(tabs)/dashboard/qr-code'
import CollectionScreen from './(tabs)/collections'
import NotificationScreen from './(tabs)/notifications'
import BookmarkScreen from './(tabs)/bookmarks'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            {/* <HomeScreen /> */}
            {/* <SearchResultsScreen /> */}
            {/* <FeatureScreen /> */}
            {/* <BuyTicketScreen /> */}
            {/* <PaymentScreen /> */}
            {/* <AddNewCardScreen /> */}
            {/* <PaymentConfirmationScreen /> */}
            {/* <QRCodeScreen /> */}
            {/* <CollectionScreen /> */}
            {/* <NotificationScreen /> */}
            <BookmarkScreen />
        </ThemeProvider>
    )
}
