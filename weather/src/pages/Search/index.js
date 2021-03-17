import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%' }}>
        <TouchableOpacity activeOpacity={0.5} style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Feather
            name="chevron-left"
            size={32}
            color="#000"
          />

          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ex: Foz do Iguaçu, PR"
          style={styles.input}
        />

        <TouchableOpacity activeOpacity={0.5} style={styles.searchButton}>
          <Feather
            name="search"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: '#e8f0ff'
  },
  backButton: {
    flexDirection: 'row',
    marginLeft: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },
  searchBox: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 8,
    height: 50
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    padding: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: '85%'
  },
  searchButton: {
    backgroundColor: '#1ed6ff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});