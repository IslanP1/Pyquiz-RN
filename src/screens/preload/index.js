import { StyleSheet, View, ActivityIndicator, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native"
import * as Animatable from 'react-native-animatable'
import { getAuth, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

const TelaPreload = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      NetInfo.fetch().then(state => {
        if (state.isConnected){
          verificarLogin()
        } else {
          networkError()
        }
      });
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  function networkError(){
    Alert.alert("Atenção!", "Aplicativo não é funcional sem internet", [
      {
        text: "Ok",
        onPress: () => BackHandler.exitApp()
      }
    ]);
  }

  async function verificarLogin() {
    try {
      const emailLocal = await AsyncStorage.getItem('email')
      const senhaLocal = await AsyncStorage.getItem('senha')
      if (emailLocal && senhaLocal) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailLocal, senhaLocal)
          .then(() => {
            navigation.navigate('BottomTabBar');
          })
          .catch(error => {
            navigation.navigate('TelaLogin')
          })
      }
      else {
        navigation.navigate('TelaLogin')
      }
    } catch (error) {
      navigation.navigate('TelaLogin')
    }
  }


  return (
    <View style={[styles.container]}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../../assets/pyquiz-unscreen.gif')}
          style={{ width: 300, height: 300 }}
          resizeMode='contain'
        />
      </View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}>
        <ActivityIndicator size={'large'} />
      </Animatable.View>
    </View>
  )
}

export default TelaPreload;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  containerLogo: {
    backgroundColor: '#000000',
    alignItems: 'center',
  },
})
