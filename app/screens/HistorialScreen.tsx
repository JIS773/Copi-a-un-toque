import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistorialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de viajes</Text>
      <Text>No tenés viajes recientes todavía.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

