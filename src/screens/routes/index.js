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

        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{title:'Tela inicial', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaModulos' component={TelaModulos} options={{title:'Lista de conteúdos', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaExercicio' component={TelaExercicio} options={{title:'Exercícios', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaConteudo' component={TelaConteudo} options={{title:'Aprendendo', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaCriarUsuario' component={TelaCriarUsuario} options={{title:'Inscrever-se', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}, headerBackVisible: false }}/>

        <Stack.Screen name='TelaLogin' component={TelaLogin} options={{title:'Login', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}, headerBackVisible: false }}/>

        <Stack.Screen name='TelaPontuacaoModulo01' component={TelaPontuacaoModulo01} options={{title:'Resultados', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}, headerBackVisible: false }} />

        <Stack.Screen name='TelaCreditos' component={TelaCreditos} options={{title:'Creditos', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaSuporte' component={TelaSuporte} options={{title:'Suporte', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaPerfil' component={TelaPerfil} options={{title:'Perfil', headerBackVisible: false, headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaRecuperarSenha' component={TelaRecuperarSenha} options={{title:'Recuperar Senha', headerTitleAlign:'center', statusBarColor:'#000000', headerTintColor:'#fff', headerStyle:{backgroundColor: '#000000'}}}/>

        <Stack.Screen name='TelaPreload' component={TelaPreload} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes

const styles = StyleSheet.create({})