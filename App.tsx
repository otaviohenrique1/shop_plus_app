import React from 'react';
import 'react-native-gesture-handler';
import { NativeBaseProvider, StatusBar } from "native-base";
import { AppTabRoutes } from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <AppTabRoutes/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
