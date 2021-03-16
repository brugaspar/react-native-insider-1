import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.openDrawer()}
    >
      <Feather name="menu" size={36} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9,
    // backgroundColor: '#fff',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    left: 15,
    top: 25,
    borderRadius: 35,
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOpacity: 0.2,
    // shadowOffset: {
    // width: 1,
    // height: 3
    // }
  }
});