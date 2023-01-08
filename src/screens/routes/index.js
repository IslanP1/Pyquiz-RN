import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
import TelaModulos from '../conteudo/index'
import TelaModulo01 from '../estudar/modulo01'
import TelaModulo02 from '../estudar/modulo02'
import TelaModulo03 from '../estudar/modulo03'
import TelaModulo04 from '../estudar/modulo04'
import TelaModulo05 from '../estudar/modulo05'
import TelaModulo06 from '../estudar/modulo06'
import TelaModulo07 from '../estudar/modulo07'
import TelaModulo08 from '../estudar/modulo08'
import TelaPontuacaoModulo01 from '../exercicios/modulo01/exercicio01/pontuacaoexercicio'
import TelaPontuacaoModulo02 from '../exercicios/modulo2/exercicio01/pontuacaoexercicio'
import TelaPontuacaoModulo03 from '../exercicios/modulo3/exercicio01/pontuacaoexercicio'
import TelaPontuacaoModulo04 from '../exercicios/modulo4/exercicio01/pontuacaoexercicio'
import TelaPontuacaoModulo05 from '../exercicios/modulo5/exercicio01/pontuacaoexercicio'
import TelaPontuacaoModulo06 from '../exercicios/modulo06/exercicio01/pontuacaoexercicio'
import TelaPontuacaoModulo07 from '../exercicios/modulo07/exercicio01/pontuacaoexercicio'
import TelaPontuacaoModulo08 from '../exercicios/modulo08/exercicio01/pontuacaoexercicio'
import TelaCriarUsuario from '../autenticacao/createUser'
import TelaLogin from '../autenticacao/login'
import TelaCreditos from '../creditos'
import TelaSuporte from '../suporte'
import TelaRecuperarSenha from '../recuperarSenha'
import TelaPreload from '../preload'
import BottomTabBar from '../Tabbar'

const AppRoutes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaPreload'>

        <Stack.Screen name='TelaModulos' component={TelaModulos} options={{ title: 'Lista de conteúdos', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo1' component={TelaModulo01} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo2' component={TelaModulo02} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo3' component={TelaModulo03} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo4' component={TelaModulo04} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo5' component={TelaModulo05} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo06' component={TelaModulo06} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo07' component={TelaModulo07} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaModulo08' component={TelaModulo08} options={{ title: 'Aprendendo', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaCriarUsuario' component={TelaCriarUsuario} options={{ title: 'Inscrever-se', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaLogin' component={TelaLogin} options={{ title: 'Login', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo01' component={TelaPontuacaoModulo01} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo02' component={TelaPontuacaoModulo02} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo03' component={TelaPontuacaoModulo03} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo04' component={TelaPontuacaoModulo04} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo05' component={TelaPontuacaoModulo05} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo06' component={TelaPontuacaoModulo06} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo07' component={TelaPontuacaoModulo07} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaPontuacaoModulo08' component={TelaPontuacaoModulo08} options={{ title: 'Resultados', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' }, headerBackVisible: false }} />

        <Stack.Screen name='TelaCreditos' component={TelaCreditos} options={{ title: 'Creditos', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaSuporte' component={TelaSuporte} options={{ title: 'Suporte', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaRecuperarSenha' component={TelaRecuperarSenha} options={{ title: 'Recuperar Senha', headerTitleAlign: 'center', statusBarColor: '#000000', headerTintColor: '#fff', headerStyle: { backgroundColor: '#000000' } }} />

        <Stack.Screen name='TelaPreload' component={TelaPreload} options={{ headerShown: false, statusBarColor: '#000000' }} />

        <Stack.Screen name='BottomTabBar' component={BottomTabBar} options={{ headerShown: false, statusBarColor: '#000000' }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes