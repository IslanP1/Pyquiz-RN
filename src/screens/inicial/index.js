import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, Image, BackHandler, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native"
import BottomTabBar from '../Tabbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'

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


    <View style={[styles.container, { width: screenWidth, height: screenHeight+14 }]}>
      <ScrollView>
        <View style = {styles.containerLogo}>
          <Animatable.Image
              animation="flipInY"
              source={require('../../../assets/pyquiz-unscreen.gif')}
              style={{ width: 300, height: 300 }}
              resizeMode='contain'
          />
        </View>

        <Animatable.View
        style={{width: screenWidth}}
        animation="fadeInUp"
        delay={500}>
          <View>
            <TouchableOpacity 
            style={styles.botoes} 
            onPress={() => navigation.navigate('TelaModulos')}>
              <Text style={styles.botaoTxt}>Jogar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity 
            style={styles.botoes} 
            onPress={() => navigation.navigate('TelaCreditos')}>
              <Text style={styles.botaoTxt}>Créditos</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity 
            style={styles.botoes} 
            onPress={() => navigation.navigate('TelaSuporte')}>
              <Text style={styles.botaoTxt}>Suporte</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity 
            style={[styles.botoes, {marginBottom:'5%', backgroundColor:'red', height: 50,
            width: '50%',}]} 
            onPress={() => sair()}>
              <Text style={styles.botaoTxt}>Sair</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
      <BottomTabBar/>
      <BottomTabBar/>
    </View>
  )
}

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    marginBottom: 60,
  },
  containerLogo:{
    flex:1,
    backgroundColor:'#000000',
    justifyContent:'center',
    alignItems:'center',
  },
  botoes: {
    backgroundColor:'#5015bd',
    height: 60,
    width: '75%',
    marginTop: '5%',
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
  },
  botaoTxt: {
    fontSize: 30,
    color: '#fff'
  }
})
