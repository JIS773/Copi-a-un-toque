import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Inicio', tabBarLabel: 'Inicio' }} />
      <Tabs.Screen name="viajes" options={{ title: 'Viajes', tabBarLabel: 'Viajes' }} />
      <Tabs.Screen name="pasajeros" options={{ title: 'Pasajeros', tabBarLabel: 'Pasajeros' }} />
      <Tabs.Screen name="ajustes" options={{ title: 'Ajustes', tabBarLabel: 'Ajustes' }} />
    </Tabs>
  );
}
