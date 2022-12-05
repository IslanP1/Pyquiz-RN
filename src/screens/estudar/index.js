import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TelaConteudo = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>A função print, tem como base o python e retorna uma string no terminal, </Text>
            <Button title="Exercicios" onPress={() => navigation.navigate('TelaExercicio')}></Button>
        </View>
  )
}

export default TelaConteudo

const styles = StyleSheet.create({})

