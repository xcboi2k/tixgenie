import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './main';
import SearchResultsScreen from './main/search-results';
import FeatureScreen from './main/feature';
import BuyTicketScreen from './main/buy-ticket';
import PaymentScreen from './main/payment';
import AddNewCardScreen from './main/add-new-card';
import PaymentConfirmationScreen from './main/payment-confirmation';
import QRCodeScreen from './main/qr-code';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <HomeScreen /> */}
      {/* <SearchResultsScreen /> */}
      {/* <FeatureScreen /> */}
      {/* <BuyTicketScreen /> */}
      {/* <PaymentScreen /> */}
      {/* <AddNewCardScreen /> */}
      {/* <PaymentConfirmationScreen /> */}
      <QRCodeScreen />
    </ThemeProvider>
  );
}
