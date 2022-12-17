import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const TelaInicial = () => {
  const [email, setEmail] = useState('jose@gmail.com');
  const [senha, setSenha] = useState('123456');



  const navigation = useNavigation()

  return (
    <View>
      <Text style={styles.texto}>Seja bem-vindo!</Text>
      
      <Button title="Entrar" onPress={() => navigation.navigate('TelaModulos')}></Button>
   
     
      <Button title='Deslogar'></Button>
    </View>

  )
}

export default TelaInicial;

const styles = StyleSheet.create({})
