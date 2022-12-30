import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, Image, BackHandler } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native"
import BottomTabBar from '../Tabbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signOut } from "firebase/auth";

const TelaInicial = () => {
  const navigation = useNavigation()
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  function sair() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        AsyncStorage.clear();
        alert('Usuário deslogado');
        BackHandler.exitApp()
      }).catch((error) => {
        alert(error)
      })

  }

  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={[styles.app, { width: screenWidth, height: screenHeight }]}>

            <View style={styles.container}>
              <Image style={styles.imagem} source={require('../../../assets/pyquiz-unscreen.gif')} />
            </View>
            <View style={styles.container}>
              <Button style={styles.botaoJogar} mode="contained" onPress={() => navigation.navigate('TelaModulos')}>Jogar</Button>
            </View>
            <View style={styles.container}>
              <Button style={styles.botaoCreditos} mode="contained" onPress={() => navigation.navigate('TelaCreditos')}>Créditos</Button>
            </View>
            <View style={styles.container}>
              <Button style={styles.botaoSuporte} mode="contained" onPress={() => navigation.navigate('TelaSuporte')}>Suporte</Button>
            </View>
            <View style={styles.container}>
              <Button style={styles.botaoSair} mode="contained" onPress={() => sair()}>Sair</Button>
            </View>
            



            <Text />
            <Text />
          </View>
        </ScrollView>
        <BottomTabBar />

      </KeyboardAvoidingView>
      <Text />
      <Text />
      <Text />
      <Text />

    </View>
  )
}

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  app: {
    justifyContent: "space-evenly"
  },
  imagem: {
    alignItems: 'center',
    backgroundColor: '#121212',
    width: 250,
    height: 250,
  },
  botaoJogar: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  botaoCreditos: {
    paddingLeft: 42,
    paddingRight: 42,

  },
  botaoSair: {
    paddingLeft: 56,
    paddingRight: 56,
  },
  botaoSuporte: {
    paddingLeft: 43,
    paddingRight: 43,
  }
})
