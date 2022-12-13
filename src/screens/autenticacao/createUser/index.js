import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { TextInput, Avatar, Button } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { set } from 'firebase/database';


const TelaCriarUsuario = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;


  function criar() {
    if (senha1 === senha2) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, senha2)
        .then(() => {
          alert('Conta de usuário criada e conectada!');
          setSenha1(null)
          setSenha2(null)
          setEmail(null)
          // navigation.navigate('TelaLogin')
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
          alert(error);
        });

    } else {
      alert("Senhas diferentes, preencha os dois campos iguais!")
    }


  }

  
  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight }]} >
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.imagem}>
            <View>
              <Avatar.Image style={{ backgroundColor: '#121212' }} size={200} source={require('../../../../assets/pyquiz.png')} />
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.texto} >CRIAR USUÁRIOS </Text>
          </View >
          <View style={styles.container}>

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
          </View>
          <View style={styles.container}>
            <Button style={styles.botaoEnviar} mode="contained" onPress={() => criar()}>Cadastrar usuário</Button>
          </View>
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
    marginBottom: 70,
    backgroundColor: '#121212'
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'bold',


  },
  imagem: {
    alignItems: 'center',
  },
  caixaTexto: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#121212',
  },
  botaoEnviar: {
    marginLeft: 80,
    marginRight: 80,
  }
});
