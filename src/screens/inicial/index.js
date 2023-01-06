import { StyleSheet, Text, View, Dimensions, ScrollView, BackHandler, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import * as Animatable from 'react-native-animatable'

const TelaInicial = () => {
  const navigation = useNavigation()
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;



  useEffect(() => {

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);

  }, []);

  function backAction() {
    Alert.alert("Atenção!", "Tem certeza que deseja sair?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => BackHandler.exitApp()
      }
    ]);
    return true
  };

  function sair() {
    Alert.alert("Atenção!", "Deseja sair do app?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => BackHandler.exitApp()
      }
    ]);
  }

  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />

      <ScrollView>
        <View style={styles.containerLogo}>
          <Animatable.Image
            animation="flipInY"
            source={require('../../../assets/pyquiz-unscreen.gif')}
            style={{ width: 300, height: 300 }}
            resizeMode='contain'
          />
        </View>

        <Animatable.View
          style={{ width: screenWidth }}
          animation="fadeInUp"
          delay={500}>
          <View>
            <TouchableOpacity
              style={styles.botoes}
              onPress={() => navigation.navigate('TelaModulos')}>
              <Text style={styles.botaoTxt}>Jogar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.botoes}
              onPress={() => navigation.navigate('TelaCreditos')}>
              <Text style={styles.botaoTxt}>Créditos</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.botoes}
              onPress={() => navigation.navigate('TelaSuporte')}>
              <Text style={styles.botaoTxt}>Suporte</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.botoes, {
                marginBottom: '5%', backgroundColor: 'red', height: 50,
                width: '50%',
              }]}
              onPress={() => sair()}>
              <Text style={styles.botaoTxt}>Sair</Text>
            </TouchableOpacity>
          </View>

        </Animatable.View>

      </ScrollView>

    </View>

  )
}

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    marginBottom: 60,
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoes: {
    backgroundColor: '#5015bd',
    height: 60,
    width: '75%',
    marginTop: '5%',
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  botaoTxt: {
    fontSize: 30,
    color: '#fff'
  }
})
