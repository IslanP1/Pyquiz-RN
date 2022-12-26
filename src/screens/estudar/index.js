import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const TelaConteudo = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('teste@gmail.com')
    const [senha, setSenha] = useState('teste5620')
    return (
        <View>
            <Text>A função print, tem como base o python e retorna uma string no terminal, </Text>
            <Button title="Exercicios" onPress={() => navigation.navigate('TelaExercicio')}></Button>
        </View>
    )
}

export default TelaConteudo

const styles = StyleSheet.create({})

