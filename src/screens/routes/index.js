import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
import TelaInicial from '../inicial/index'
import TelaModulos from '../conteudo/index'
import TelaExercicio from '../exercicios/modulo01/exercicio01/index'
import TelaConteudo from '../estudar'
import TelaPontuacaoModulo01 from '../exercicios/modulo01/exercicio01/pontuacaoexercicio'

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaInicial'>
        <Stack.Screen name='TelaInicial' component={TelaInicial} />
        <Stack.Screen name='TelaModulos'component={TelaModulos} />
        <Stack.Screen name='TelaExercicio'component={TelaExercicio} />
        <Stack.Screen name='TelaConteudo' component={TelaConteudo} />
        <Stack.Screen name='TelaPontuacaoModulo01' component={TelaPontuacaoModulo01} options={{headerBackVisible:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes

const styles = StyleSheet.create({})