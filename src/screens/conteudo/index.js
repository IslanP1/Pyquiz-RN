import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TelaModulos = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.texto}>Observe os Modulos das questões:</Text>
            <Button title="Módulo 1 - Iniciando com python" onPress={() => navigation.navigate('TelaConteudo')}></Button>
            <Button title="Módulo 2 - Condição"></Button>
            <Button title="Módulo 3 - Repetição"></Button>
            <Button title="Módulo 4 - Tuplas"></Button>
            <Button title="Módulo 5 - Listas"></Button>
            <Button title="Módulo 6 - Dicionário"></Button>
            <Button title="Módulo 7 - Função"></Button>
            <Button title="Módulo 8 - Tratamento de erros"></Button>
         
        </View>
  )
}

export default TelaModulos

const styles = StyleSheet.create({
    texto:{
        fontSize:25,
        marginBottom:20,
    },
    botao:{
        marginBottom:20,
    },
})
