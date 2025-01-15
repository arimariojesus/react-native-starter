import React, { useEffect } from 'react';
import { useFonts } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import Routes from '@/routes';
import { fontsToLoad } from '@/styles/fontFamily';

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
