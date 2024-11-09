import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from '@expo-google-fonts/poppins';

import { fontsToLoad } from '@/styles/fontFamily';
import Routes from '@/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts(fontsToLoad);

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsError, fontsLoaded]);

  if (!fontsLoaded || fontsError) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
