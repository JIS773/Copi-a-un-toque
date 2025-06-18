import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PasajeroTabs from './app/navigation/PasajeroTabs';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <PasajeroTabs />
    </NavigationContainer>
  );
}

