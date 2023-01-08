import { StyleSheet, Text, View, ScrollView, TouchableOpacity, BackHandler, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

const TelaSuporte = () => {
    const [assunto, setAssunto] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const navegation = useNavigation()

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", telaInicial);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", telaInicial);
    }, []);

    function telaInicial() {
        navegation.navigate('BottomTabBar')
        return true
    };


    function enviarEmail() {
        if (assunto != null && mensagem != null) {
            MailComposer.composeAsync({
                subject: assunto,
                body: mensagem,
                recipients: ['pyquizapp@gmail.com'],
            })
        } else {
            Alert.alert("Atenção!", "Digite um assunto ou mensagem!", [
                {
                  text: "Ok",
                  onPress: () => null
                }
              ]);
        }

    }

   
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="always">
                <Text style={styles.titulo}>Tela suporte</Text>
                <TextInput
                    style={styles.textInputAssunto}
                    label="Assunto"
                    mode="outlined"
                    textColor={'#fff'}
                    onChangeText={setAssunto}
                    value={assunto}
                    multiline={true}
                    placeholder={'Escreva o assunto do email'}
                />
                <TextInput
                    style={styles.textInputMensagem}
                    label="Mensagem ou dúvida"
                    mode="outlined"
                    textColor={'#fff'}
                    onChangeText={setMensagem}
                    value={mensagem}
                    multiline={true}
                    placeholder={'Escreva a dúvida ou mensagem'}
                />

                <Animatable.View
                    animation="fadeInUp"
                    delay={500}>
                    <Animatable.View
                        animation="shake"
                        iterationCount='infinite'
                        iterationDelay={2000}>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonEnviar}
                                onPress={() => enviarEmail()}>
                                <Text style={styles.botaoTxt}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </Animatable.View>
            </ScrollView>
        </View>
    )
}

export default TelaSuporte

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    titulo: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        fontWeight: '800',
    },
    textInputAssunto: {
        paddingBottom: '30%',
        backgroundColor: '#121212',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    textInputMensagem: {
        paddingBottom: '50%',
        backgroundColor: '#121212',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    buttonEnviar: {
        marginLeft: '30%',
        marginRight: '30%',
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
        fontSize: 40,
        color: '#fff',
    }
})