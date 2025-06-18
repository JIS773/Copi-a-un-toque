import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PasajeroHomeScreen from '../screens/PasajeroHomeScreen';
import HistorialScreen from '../screens/HistorialScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function PasajeroTabs() {
  return (
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen name="Inicio" component={PasajeroHomeScreen} />
      <Tab.Screen name="Historial" component={HistorialScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

