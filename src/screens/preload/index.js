import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native"
import * as Animatable from 'react-native-animatable'
import { getAuth, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


const TelaPreload = () => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          verificarLogin()
        }, 5000); // 5 segundos
    
        return () => clearTimeout(timer);
      }, []);
    
    async function verificarLogin() {
      try {
        const emailLocal = await AsyncStorage.getItem('email')
        const senhaLocal = await AsyncStorage.getItem('senha')
        if (emailLocal && senhaLocal) {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, emailLocal, senhaLocal)
            .then(() => {
              alert('Seja bem vindo de volta!');
              navigation.navigate('BottomTabBar');
            })
            .catch(error => {
              navigation.navigate('TelaLogin')
              alert(error);
            })
        }
        else {
          navigation.navigate('TelaLogin')
        }
      } catch (error) {
        navigation.navigate('TelaLogin')
        alert(error)
      }
    }
    

    return (
        <View style={[styles.container]}>
            <View style = {styles.containerLogo}>
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
                <ActivityIndicator size={'large'}/>
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
  containerLogo:{
    backgroundColor:'#000000',
    alignItems:'center',
  },
})
