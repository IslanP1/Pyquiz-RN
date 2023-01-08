import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, TouchableOpacity, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { TextInput, Button } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'
import * as Expo from 'expo-av';

const TelaLogin = () => {
  const navigation = useNavigation()
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  useEffect(() => {

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);

  }, []);


  async function click() {
    const som = new Expo.Audio.Sound()
    await som.loadAsync(require('../../../../sounds/click.mp3'));
    await som.playAsync();
  }




  function backAction() {
    Alert.alert("Atenção!", "Tem certeza que deseja sair?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => BackHandler.exitApp()
      }
    ]);
    return true
  };

  function logar() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        manterLogin();
        navigation.navigate('BottomTabBar');
      })
      .catch(error => {
        Alert.alert("Atenção!", "Senha ou email incorreto!", [
          {
            text: "Ok",
            onPress: () => null
          }
        ]);
      });
  }



  async function manterLogin() {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);
    } catch (error) {

    }
  }

  return (
    <KeyboardAvoidingView behavior='position' style={{ height: '87%' }}>
      <Animatable.View
        style={[styles.container, { width: screenWidth, height: screenHeight }]}
        animation=''>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.containerLogo}>
            <Animatable.Image
              animation="flipInY"
              source={require('../../../../assets/pyquiz1.png')}
              style={{ width: 300, height: 300 }}
              resizeMode='contain'
            />
          </View>

          <Animatable.View
            style={styles.container}
            animation='fadeInLeft'>

            <View style={styles.container}>
              <Text style={styles.texto} >LOGIN </Text>
            </View >
            <TextInput
              style={styles.caixaTexto}
              label="Email"
              mode="outlined"
              onChangeText={setEmail}
              value={email}
              textColor={'#fff'}
            />
            <TextInput
              style={styles.caixaTexto}
              label="Senha"
              mode="outlined"
              onChangeText={setSenha}
              value={senha}
              textColor={'#fff'}
              secureTextEntry={true}
            />
          </Animatable.View>

          <Animatable.View
            animation="fadeInUp"
            delay={500}>
            <Animatable.View
              animation="shake"
              iterationCount='infinite'
              iterationDelay={2000}>
              <View style={{ marginTop: 10 }}>
                <Button style={styles.botaoEnviar} mode="contained" onPress={() => [click(), logar()]}>Conectar-se</Button>
              </View>

            </Animatable.View>
            <View style={{ marginTop: 15, marginBottom: '3%' }}>
              <Button textColor='#5015bd' fontSize='20' style={[styles.botaoEnviar, { backgroundColor: '#fff' }]} mode="contained" onPress={() => [click(), navigation.navigate('TelaCriarUsuario')]}>Inscrever-se</Button>
            </View>
            <View style={{ marginBottom: '30%' }}>
              <TouchableOpacity textColor='#5015bd' fontSize='20' style={[styles.botaoRecuperar, { backgroundColor: '#fff' }]} mode="contained" onPress={() => [click(), navigation.navigate('TelaRecuperarSenha')]}>
                <Text style={styles.recuperarTexto}>
                  Perdeu a senha? Recupere
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ScrollView>
      </Animatable.View>
    </KeyboardAvoidingView>
  )
}

export default TelaLogin

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
    backgroundColor: '#000000'
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'bold',
  },
  caixaTexto: {
    borderRadius: 50,
    paddingVertical: 8,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#000000',
    fontSize: 18,
  },
  botaoEnviar: {
    backgroundColor: '#5015bd',
    marginLeft: 80,
    marginRight: 80,
    justifyContent: 'center',
    textAlignVertical: 'center',
    height: 50,
  },
  botaoRecuperar: {
    marginTop: 1,
    alignSelf: 'center',
  },
  recuperarTexto: {
    color: '#a1a1a1',
    backgroundColor: '#000000'

  }
});