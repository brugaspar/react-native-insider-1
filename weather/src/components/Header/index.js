import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ background, weather, icon }) {
  return (
    <LinearGradient
      style={styles.header}
      colors={background}
    >
      <Text style={styles.date}>{weather.results.date}</Text>
      <Text style={styles.city}>{weather.results.city}</Text>

      <Ionicons
        name={icon.name}
        color={icon.color}
        size={150}
      />

      <Text style={styles.weather}>{weather.results.temp}°</Text>
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