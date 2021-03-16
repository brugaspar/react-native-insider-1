import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
}

// https://api.hgbrasil.com/weather?key=5b511fe1
// https://api.hgbrasil.com/weather?key=5b511fe1&lat=-23.682&lon=-46.875