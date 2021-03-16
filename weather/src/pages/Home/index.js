import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import api, { key } from '../../services/api';

export default function Home() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#fff' });
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setErrorMessage('Permissão negada para acessar localização');
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      const response = await api.get(`weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);

      setWeatherData(response.data);

      if (response.data.results.currently === 'noite') setBackground(['#0c3741', '#0f2f61']);

      switch (response.data.results.condition_slug) {
        case 'clear_day':
          setIcon({ name: 'partly-sunny', color: '#ffb300' });
          break;
        case 'rain':
        case 'storm':
          setIcon({ name: 'rainy', color: '#fff' });
          break;
        default:
          break;
      }

      setLoading(false);
    })();
  }, []);

  if (loading) return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontStyle: 'italic' }}>Carregando dados...</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header background={background} weather={weatherData} icon={icon} />
      <Conditions weather={weatherData} />

      <FlatList
        horizontal
        contentContainerStyle={{ paddingBottom: '5%', paddingRight: '5%' }}
        style={styles.list}
        data={weatherData.results.forecast}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  },
  list: {
    marginTop: 10,
    marginLeft: 10
  }
});