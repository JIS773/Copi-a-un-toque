import { View, Text, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function PasajerosScreen() {
  const [pasajeros, setPasajeros] = useState<string[]>([]);

  const agregarPasajero = () => {
    const nuevoPasajero = `Pasajero ${pasajeros.length + 1}`;
    setPasajeros([...pasajeros, nuevoPasajero]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Lista de Pasajeros</Text>
      <Button title="Agregar pasajero" onPress={agregarPasajero} />

      <FlatList
        data={pasajeros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              marginTop: 10,
              backgroundColor: '#f0f0f0',
              borderRadius: 10,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

