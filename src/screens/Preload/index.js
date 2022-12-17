import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { TextInput, Avatar, Button } from 'react-native-paper';

const Preload = () => {
  const navigation = useNavigation()
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight+100 }]} > 
        
      <View style={styles.imagem}>
        <View>
          <Avatar.Image style={{ backgroundColor: '#121212' }} size={400} source={require('../../../assets/pyquiz.png')} />
        </View>
      </View>
      <Button style={styles.botaoEnviar} mode="contained" onPress={() => navigation.navigate('TelaLogin')}>Continuar</Button>   
      
   
       
    </View>
  )
}

export default Preload

const styles = StyleSheet.create({
    container: {
      marginBottom: 70,
      backgroundColor: '#121212'
    },
    imagem: {
      alignItems: 'center',
    },
    botaoEnviar: {
      marginTop: "50%",
      marginLeft: "20%",
      marginRight: "20%",
    }
  });
  