import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const TelaRecuperarSenha = () => {
    const [email, setEmail] = useState(null)
    const navegation = useNavigation()
    
    useEffect(() => {

        BackHandler.addEventListener("hardwareBackPress", telaLogin);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", telaLogin);
    
      }, []);
    
      function telaLogin() {
        navegation.navigate('TelaLogin')
        return true
      };




    async function sendResetEmail() {
        const auth = getAuth()
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Email enviado')
                setEmail('')
            })
            .catch((error) => {
                alert(error)
            });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                        animation="flipInY"
                        source={require('../../../assets/pyquiz1.png')}
                        style={{ width: 300, height: 300 }}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.titulo}>Recuperar senha</Text>
                <Text style={styles.texto}>     Após inserir o e-mail aqui, você irá receber um e-mail no qual irá conter um link para alteração de senha</Text>
                <View>
                    <TextInput
                        style={styles.caixaTexto}
                        label="E-mail"
                        mode="outlined"
                        onChangeText={setEmail}
                        value={email}
                        textColor={'#fff'}
                        placeholder={'Digite o e-mail da sua conta'}
                    />
                </View>
                <Animatable.View
                    animation="fadeInUp"
                    delay={500}>
                    <View>
                        <Button style={styles.botaoEnviar} mode="contained" onPress={sendResetEmail}>Enviar</Button>
                    </View>
                </Animatable.View>
            </ScrollView>
        </View>
    )
}

export default TelaRecuperarSenha

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',  
    },
    titulo : {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '800',
    },
    texto: {
        color: '#ffffff',
        fontSize: 15,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '10%',
        textAlign: 'justify'   
    },
    containerLogo:{
        flex:1,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center',
    },
    caixaTexto: {
        borderRadius:50,
        paddingVertical:8,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#000000',
        fontSize: 18,
        marginTop: '10%',
      },
      botaoEnviar: {
        backgroundColor:'#5015bd',
        marginLeft: 80,
        marginRight: 80,
        justifyContent: 'center',
        textAlignVertical: 'center',
        height: 50,
        marginTop: '10%',
        marginBottom: '30%',
      }
})