import { StyleSheet, Text, View, Button  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TelaInicial = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text style={styles.texto}>Seja bem-vindo!</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('TelaModulos')}></Button>
    </View>
  )
}

export default TelaInicial

const styles = StyleSheet.create({
  texto :{
     fontSize:20,
     textAlign:'center',
     marginTop:"50%",
     marginBottom:"50%",
  }
})