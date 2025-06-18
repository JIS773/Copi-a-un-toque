#!/bin/bash

mkdir -p app/\(tabs\)

cat > app/\(tabs\)/home.tsx << 'EOF'
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Inicio</Text>
    </View>
  );
}
EOF

cat > app/\(tabs\)/viajes.tsx << 'EOF'
import { View, Text } from 'react-native';

export default function Viajes() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Viajes</Text>
    </View>
  );
}
EOF

cat > app/\(tabs\)/pasajeros.tsx << 'EOF'
import { View, Text } from 'react-native';

export default function Pasajeros() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Pasajeros</Text>
    </View>
  );
}
EOF

cat > app/\(tabs\)/ajustes.tsx << 'EOF'
import { View, Text } from 'react-native';

export default function Ajustes() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Ajustes</Text>
    </View>
  );
}
EOF

cat > app/\(tabs\)/_layout.tsx << 'EOF'
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
EOF

echo "✅ Archivos creados correctamente en app/(tabs)/"

