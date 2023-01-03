import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { getAuth, signOut } from "firebase/auth";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { get, ref, set, update } from 'firebase/database'
import { db } from '../../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaPerfil = () => {
  
   const navigation = useNavigation()
   const screenWidth = Dimensions.get('window').width;
   const screenHeight = Dimensions.get('window').height;
   const [showContent, setShowContent] = useState(false);

   const [userID, setUserID] = useState(null);
   const [email, setEmail] = useState(null);
   const [name, setName] = useState('')
   const [nvname, setNvname] = useState('')


   useEffect(() => {
    // Executar algum código aqui assim que a tela abre
    let a = getAuth()
    const teste = a.currentUser;
    const userCredential = teste;
    const id = userCredential.uid;
    setUserID(id);

}, [buscarCredenciais()]);


function deslogar() {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      AsyncStorage.clear();
      alert('Usuário deslogado');
      navigation.navigate('TelaLogin')
    }).catch((error) => {
      alert(error)
    })
}

function buscarCredenciais() {
    get(ref(db, `users/${userID}/credenciais`))
        .then((snapshot) => {
            const data = snapshot.val()
            // Atribui a resposta a variável
            setEmail(data.email);
            setName(data.nome);
        }).catch((error) => {
            // Em caso de erro, mostra a mensagem de erro no console
            
        });
}

function updateusername(){
    if (nvname == ''){
        alert('escreva algum nome!')
    } else{
        update(ref(db, `users/${userID}/credenciais`), {
            nome:nvname,        
        }).then(() => {
            alert("Nome alterado!")
        })
            .catch((error) => {
                alert(error)
        });
        setName(nvname)
        setShowContent(false)
    }
    
}

 
    

  return (
    <View style={[styles.container,{ width: screenWidth, height: screenHeight }]}>
      
      <ScrollView >
        <IconButton style={{backgroundColor:'#000000', alignSelf:'center'}} icon="account-circle" size={200} onPress={() => console.log('Pressed')} />
        <View>
          <Text style={styles.texto} onPress={() => setShowContent(true)}>Username:</Text>
          <Text style={styles.texto2} onPress={() => setShowContent(true)}>{name}</Text>
          {showContent && ( // usando um componente condicional para mostrar ou esconder os conteúdos
        <View style={{borderColor:'white', borderWidth:2, padding:10, borderRadius:5, marginBottom:20}} >
          <Text style={styles.texto}>Mudar nome de usuário:</Text>
          <TextInput
              style={styles.caixaTexto}
              label="Nome"
              mode="flat"
              onChangeText={setNvname}
              textColor={'#fff'}
              underlineColor={'white'}

            />
          <Button onPress={() => updateusername()} >Confirmar</Button>
          <Button onPress={() => setShowContent(false)}>Cancelar</Button>
        </View>
      )}
        </View>
        <Text style={styles.texto} >Email:</Text>
        <Text style={styles.texto2}>{email}</Text>
        <Button style={{fontSize: 30}} onPress={() => deslogar()} >Sair da conta</Button>
      </ScrollView>
    </View>
  )
}

export default TelaPerfil

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    texto:{
        color:'white',
        textAlign:'center',
        fontSize:20,
        marginBottom:20    
    },
    texto2:{
        color:'white',
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        padding:5,
        textAlign:'center',
        fontSize:20,
        marginBottom:20    
    }, 
    caixaTexto: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#121212',
        borderColor:'white'
      },
  });
