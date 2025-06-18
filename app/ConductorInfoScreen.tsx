import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function ConductorInfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Conocé quién te lleva con Copi</Text>
      
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Acá podés poner la foto real
          style={styles.avatar}
        />
        <Text style={styles.name}>Ignacio</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>⭐ 4.9</Text>
          <Text style={styles.stat}>🚗 900+ viajes</Text>
          <Text style={styles.stat}>📅 5+ meses</Text>
        </View>
      </View>

      <Text style={styles.subHeader}>Verificaciones de seguridad</Text>
      <View style={styles.row}>
        <Text style={styles.verification}>🪪 Identidad verificada</Text>
        <Text style={styles.verification}>🧾 Licencia válida</Text>
        <Text style={styles.verification}>🛡️ Cobertura activa</Text>
        <Text style={styles.verification}>📸 Foto verificada</Text>
      </View>

      <Text style={styles.subHeader}>Comentarios de pasajeros</Text>
      <View style={styles.row}>
        <Text style={styles.tag}>🎖️ Excelente servicio</Text>
        <Text style={styles.tag}>👀 Atento al camino</Text>
        <Text style={styles.tag}>✨ Auto impecable</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#FFF4EB',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  statsContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  stat: {
    fontSize: 16,
    marginVertical: 2,
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#333',
  },
  row: {
    marginBottom: 20,
    paddingLeft: 10,
  },
  verification: {
    fontSize: 16,
    marginBottom: 6,
    color: '#222',
  },
  tag: {
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
    color: '#000',
  },
});

