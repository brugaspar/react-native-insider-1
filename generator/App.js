import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

import logoImage from './src/assets/logo.png';

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [slider, setSlider] = useState(10);
  const [password, setPassword] = useState(null);

  function generatePassword() {
    let newPassword = '';

    for (let i = 0, n = charset.length; i < slider; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(newPassword);
  }

  function copyToClipboard() {
    Clipboard.setString(password);

    Alert.alert('Alerta!', 'Senha copiada com sucesso');
  }

  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={styles.logo}
      />

      <Text style={styles.title}>{slider} carácteres</Text>

      <View style={styles.whiteArea}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#fa3354"
          maximumTrackTintColor="#000"
          value={slider}
          onValueChange={setSlider}
          step={1}
        />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password && (
        <View style={styles.whiteArea} >
          <Text onLongPress={copyToClipboard} style={styles.password}>{password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f3f5'
  },
  logo: {
    marginBottom: 50
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  whiteArea: {
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 15,
    width: '80%',
    borderRadius: 8
  },
  button: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  password: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  }
});