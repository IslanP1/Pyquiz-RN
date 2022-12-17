import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';

const TelaSuporte = () => {
    return (
        <View>
            <Text>Tela suporte</Text>
            <TextInput
                label="Email"
                mode="outlined"
                // onChangeText={setEmail}
                // value={email}
                textColor={'#fff'}
            />
            <TextInput
                style={styles.textInputMensagem}
                label="Mensagem ou dúvida"
                mode="outlined"
                // onChangeText={setEmail}
                // value={email}
                textColor={'#fff'}  
            />
            <Button mode="contained" onPress={""}>Enviar</Button>

        </View>
    )
}

export default TelaSuporte

const styles = StyleSheet.create({
    textInputMensagem: {
        paddingBottom: '65%',
    }
    
})