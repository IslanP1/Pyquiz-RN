import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const TelaInicial = () => {
  const [email, setEmail] = useState('marcena@gmail.com');
  const [senha, setSenha] = useState('123456');
  
  function criar() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert('Conta de usuário criada e conectada!');
      
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Esse endereço de email já esta em uso!');
        }
        if (error.code === 'auth/invalid-email') {
          alert('Esse endereço de e-mail é inválido!');
        }
        alert(error);
      });
  }

  

  function logar() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert('Usuário logado');
      })
      .catch(error => {
        alert(error);
      });
  }


  function deslogar() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('Usuário deslogado')

      }).catch((error) => {
        alert(error)

      });
  }

  function add() {
    set(ref(db, `/crud` + mensagem), {
        mensagem: mensagem,
    }).then(() => {
        alert("Guardei")
        mostrar()
    }).catch((error) => {
        alert(error)
    });
}


  const navigation = useNavigation()

  return (
    <View>
      <Text style={styles.texto}>Seja bem-vindo!</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('TelaModulos')}></Button>
      <br></br>
      <Button title='Criar' onPress={() => { criar() }}></Button>
      <br></br>
      <Button title='Logar' onPress={() => { logar() }}></Button>
      <br></br>
      <Button title='Deslogar' onPress={() => { deslogar() }}></Button>
    </View>
  )
}

export default TelaInicial


const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: "50%",
    marginBottom: "50%",
  }
})