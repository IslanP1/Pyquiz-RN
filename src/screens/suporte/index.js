import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import Communications from 'react-native-communications';


const TelaSuporte = () => {
    const [assunto, setAssunto] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    function enviarEmail() {
        if (assunto != null && mensagem != null) {
            Communications.email(
                ['islanpereiradeoliveira@gmail.com'],
                null,
                null,
                assunto,
                mensagem,
            );
        } else {
            alert("Escreva um assunto ou uma mensagem válida!");
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
                <Button style={styles.buttonEnviar} mode="contained" onPress={() => enviarEmail()}>Enviar</Button>
                <Text/>
                <Text/>
            </ScrollView>
        </View>
    )
}

export default TelaSuporte

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
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
        marginTop: '10%',
        marginLeft: '30%',
        marginRight: '30%'
    }
})