import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()
import TelaInicial from '../inicial/index'
import TelaModulos from '../conteudo/index'
import TelaExercicio from '../exercicios/modulo01/exercicio01/index'
import TelaConteudo from '../estudar'
import TelaPontuacaoModulo01 from '../exercicios/modulo01/exercicio01/pontuacaoexercicio'
import TelaCriarUsuario from '../autenticacao/createUser'
import TelaLogin from '../autenticacao/login'
import TelaCreditos from '../creditos'
import TelaSuporte from '../suporte'
import TelaPerfil from '../perfil'
import TelaRecuperarSenha from '../recuperarSenha'
import TelaPreload from '../preload'


const AppRoutes = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaPreload'>
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{title:'Tela inicial', headerTitleAlign:'center'}}/>
        <Stack.Screen name='TelaModulos' component={TelaModulos} options={{title:'Lista de conteúdos', headerTitleAlign:'center'}}/>
        <Stack.Screen name='TelaExercicio' component={TelaExercicio} />
        <Stack.Screen name='TelaConteudo' component={TelaConteudo} />
        <Stack.Screen name='TelaCriarUsuario' component={TelaCriarUsuario} />
        <Stack.Screen name='TelaLogin' component={TelaLogin} />
        <Stack.Screen name='TelaPontuacaoModulo01' component={TelaPontuacaoModulo01} options={{ headerBackVisible: false }} />
        <Stack.Screen name='TelaCreditos' component={TelaCreditos} />
        <Stack.Screen name='TelaSuporte' component={TelaSuporte} />
        <Stack.Screen name='TelaPerfil' component={TelaPerfil} options={{title:'Perfil', headerBackVisible: false, headerTitleAlign:'center'}}/>
        <Stack.Screen name='TelaRecuperarSenha' component={TelaRecuperarSenha} />
        <Stack.Screen name='TelaPreload' component={TelaPreload} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes

const styles = StyleSheet.create({})