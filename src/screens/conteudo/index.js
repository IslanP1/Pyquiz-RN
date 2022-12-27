import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BottomTabBar from '../Tabbar'

const TelaModulos = () => {
    const navigation = useNavigation()
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]} > 
          <ScrollView>
            <TouchableOpacity style={[styles.botao, { borderColor: '#8c52ff'  }]} onPress={() => navigation.navigate('TelaConteudo')}>
                <Text style={styles.textog} >Módulo 1 - Iniciando com python</Text>
                <Text style={styles.textop} >Introdução a linguagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { borderColor: '#ffaac4' }]} >
                <Text style={styles.textog} >Módulo 2 - Condição</Text>
                <Text style={styles.textop} >O basico de If, elif, else</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { borderColor: '#daa520' }]} >
                <Text style={styles.textog} >Módulo 3 - Repetição</Text>
                <Text style={styles.textop} >Estruturas For e while</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { borderColor: '#7cdb54' }]} >
                <Text style={styles.textog} >Módulo 4 - Tuplas</Text>
                <Text style={styles.textop} >Armazenando em variáveis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { borderColor: '#ffaac4' }]} >
                <Text style={styles.textog} >Módulo 5 - Listas</Text>
                <Text style={styles.textop} >Armazenando em sequência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { borderColor: '#8c52ff' }]} >
                <Text style={styles.textog} >Módulo 6 - Dicionários</Text>
                <Text style={styles.textop} >Armazenando diversos conteúdos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { borderColor: '#daa520' }]} >
                <Text style={styles.textog} >Módulo 7 - Funções</Text>
                <Text style={styles.textop} >Chamando códigos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { borderColor: '#f15551' }]} >
                <Text style={styles.textog} >Módulo 8 - Tratamento de erros</Text>
                <Text style={styles.textop} >O Fim</Text>
            </TouchableOpacity>
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <Text/>

          </ScrollView>
          <BottomTabBar/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
        </View>
  )
}

export default TelaModulos

const styles = StyleSheet.create({
    container: {
      marginBottom: 70,
      backgroundColor: '#121212'
    },
    textog: {
      color: '#fff',
      fontSize: 18,
      fontStyle: 'bold',
    },
    textop:{
        color:'white',
        fontSize:15,
    },
    botao:{
        
        marginTop:'4%',
        padding:20,
        marginLeft:'5%',
        marginRight:'5%',
        borderWidth:2,
        borderRadius:10,
        
    },

    
    
  });
  