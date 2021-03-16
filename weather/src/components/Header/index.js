import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <LinearGradient
      style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
    >
      <Text style={styles.date}>16/03/2021</Text>
      <Text style={styles.city}>Foz do Iguaçu</Text>

      <Ionicons
        name="cloud"
        color="#fff"
        size={150}
      />

      <Text style={styles.weather}>30°</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '95%',
    height: '55%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  date: {
    color: '#fff',
    fontSize: 18
  },
  city: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  weather: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
    marginLeft: 15
  }
});