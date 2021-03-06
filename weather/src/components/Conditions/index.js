import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions({ weather }) {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <Feather
          name="wind"
          size={24}
          color="#1ed6ff"
        />
        <Text>{weather.results.wind_speedy}</Text>
      </View>
      <View style={styles.condition}>
        <MaterialCommunityIcons
          name="weather-sunset-up"
          size={24}
          color="#1ed6ff"
        />
        <Text>{weather.results.sunrise}</Text>
      </View>
      <View style={styles.condition}>
        <MaterialCommunityIcons
          name="weather-sunset-down"
          size={24}
          color="#1ed6ff"
        />
        <Text>{weather.results.sunset}</Text>
      </View>
      <View style={styles.condition}>
        <Feather
          name="droplet"
          size={22}
          color="#1ed6ff"
        />
        <Text>{weather.results.humidity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '95%'
  },
  condition: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});