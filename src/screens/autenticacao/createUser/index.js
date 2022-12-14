import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, TouchableOpacity, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { TextInput, Avatar, Button } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from 'firebase/database'
import * as Animatable from 'react-native-animatable'
import { db } from '../../../../firebase';
import * as Expo from 'expo-av';


const TelaCriarUsuario = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const [name, setName] = useState("")
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navegation = useNavigation()

  useEffect(() => {

    BackHandler.addEventListener("hardwareBackPress", telaLogin);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", telaLogin);

  }, []);

  function telaLogin() {
    navegation.navigate('TelaLogin')
    return true
  };

  async function click() {
    const som = new Expo.Audio.Sound()
    await som.loadAsync(require('../../../../sounds/click.mp3'));
    await som.playAsync();
  }


  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  function criar() {
    if (senha1 === senha2) {
      if (checkValidEmail != true) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha2)
          .then(() => {
            alert('Conta de usuário criada e conectada!');
            const teste = auth.currentUser;
            const userCredential = teste;
            const id = userCredential.uid;
            set(ref(db, `users/${id}/credenciais`), {
              email: email,
              nome: name
            }).then(() => {

            }).catch((error) => {
              
            });
            setSenha1(null)
            setSenha2(null)
            setEmail(null)
            navigation.navigate('TelaLogin')
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              alert('Esse endereço de email já esta em uso!');
            }
            if (error.code === 'auth/invalid-email') {
              alert('Esse endereço de e-mail é inválido!');
            }
            if (error.code === 'auth/weak-password') {
              alert('Escolha uma senha mais forte, com pelo menos 6 caracteres, incluindo letras, números e símbolos')
            }
          });
      }
    } else {
      alert("Senhas diferentes, preencha os dois campos iguais!")
    }
  }

  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight }]} >
      <KeyboardAvoidingView behavior="position" style={{height:'87%'}}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.containerLogo}>
            <Animatable.Image
              animation="flipInY"
              source={require('../../../../assets/pyquiz1.png')}
              style={{ width: 300, height: 300 }}
              resizeMode='contain'
            />
          </View>

          <Animatable.View animation="fadeInLeft" delay={500} style={styles.container}>
            <Text style={styles.message}>CRIAR USUÁRIOS</Text>
          </Animatable.View>

          <Animatable.View
            style={styles.container}
            animation='fadeInLeft'>
            <View style={styles.container}>
              <TextInput
                style={styles.caixaTexto}
                label="Nome"
                mode="outlined"
                onChangeText={setName}
                value={name}
                textColor={'#fff'}

              />
              <TextInput
                style={styles.caixaTexto}
                label="Email"
                mode="outlined"
                onChangeText={text => handleCheckEmail(text)}
                value={email}
                textColor={'#fff'}
              />

              {checkValidEmail && email != "" && (
                <Text style={styles.textFailed}>Digite um email válido!</Text>
              )}

              <TextInput
                style={styles.caixaTexto}
                label="Senha"
                mode="outlined"
                onChangeText={setSenha1}
                value={senha1}
                textColor={'#fff'}
                secureTextEntry={true}
              />

              <TextInput
                style={styles.caixaTexto}
                label="Confirme sua senha"
                mode="outlined"
                onChangeText={setSenha2}
                value={senha2}
                textColor={'#fff'}
                secureTextEntry={true}
              />

              {senha1 != senha2 && senha1 != "" && senha2 != "" && (
                <Text style={styles.textFailed}>As senhas não coincidem!</Text>
              )}

            </View>
          </Animatable.View>

          <Animatable.View
            animation="fadeInUp"
            delay={500}>
            <Animatable.View
              animation="shake"
              iterationCount='infinite'
              iterationDelay={2000}>
              <View style={[styles.container, { marginTop: 50 }]}>
                <Button style={styles.botaoEnviar} mode="contained" onPress={() => [click(), criar()]}>Cadastrar</Button>
              </View>
            </Animatable.View>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => [click(), navigation.navigate('TelaLogin')]}>
              <Text style={styles.loginText}>Possui uma conta? Conecte-se</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Text />
          <Text />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default TelaCriarUsuario

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: '#000000'
  },
  message: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#aFFF',
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'bold',
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixaTexto: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    backgroundColor: '#000000',
  },
  botaoEnviar: {
    backgroundColor: '#5015bd',
    marginLeft: 80,
    marginRight: 80,
    justifyContent: 'center',
    textAlignVertical: 'center',
    height: 50,

  },
  buttonLogin: {
    marginTop: 1,
    alignSelf: 'center',
    marginBottom: '30%'
  },
  loginText: {
    color: '#a1a1a1'
  },
  textFailed: {
    marginHorizontal: 30,
    color: 'red',
  },
});