import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { IconButton } from 'react-native-paper';

function BottomTabBar() {
  const navigation = useNavigation()

  function ap1(){
    navigation.navigate('TelaInicial')
  }

  function ap2(){
    navigation.navigate('TelaPerfil')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
        ]}
        onPress={() => ap1()}
      >
        <IconButton iconColor='#a8939ecc' size={30} icon="home" onPress={() => ap1()}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tab,
          
        ]}
        onPress={() => ap2()}
      >
        <IconButton iconColor='#a8939ecc' size={30} icon="account-circle" onPress={() => ap2()}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:70,
    backgroundColor: '#000000',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    position:'relative',
    borderTopColor: '#121212',
  },
 
  tabText: {
    fontSize: 12,
    color: '#333',
  },
});

export default BottomTabBar;