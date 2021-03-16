import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../helpers/condition';

export default function Forecast({ data }) {
  const icon = condition(data.condition);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>

      <Ionicons name={icon.name} color={icon.color} size={25} />

      <View style={styles.weather}>
        <Text style={styles.min}>{data.min}°</Text>
        <Text style={styles.max}>{data.max}°</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 12,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  date: {
    fontSize: 14
  },
  weather: {
    alignItems: 'center',
  },
  min: {
    color: '#0f6a90'
  },
  max: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#af5055'
  }
});