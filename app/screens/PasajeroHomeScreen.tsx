import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function PasajeroHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola pasajero!</Text>
      <Text style={styles.subtitle}>Tu viaje seguro comienza con Copi</Text>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3103/3103987.png' }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar viaje</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondary}>
        <Text style={styles.secondaryText}>Ver historial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF6D00',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondary: {
    marginTop: 10,
  },
  secondaryText: {
    color: '#555',
    textDecorationLine: 'underline',
  },
});

