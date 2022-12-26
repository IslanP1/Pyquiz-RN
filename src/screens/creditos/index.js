import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'
import { Button, IconButton, MD3Colors } from 'react-native-paper'

const TelaCreditos = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulos}>Destinação: </Text>
                <Text style={styles.textoDestinacao}>       Aplicativo desenvolvido para fins acadêmicos como modo de estágio para os alunos iniciantes
                    em programação residentes do IFPB - Instituto Federal da Paraíba (Campus Cajazeiras).
                </Text>
            </View>
            <View>
                <Text style={styles.titulos}>Desenvolvedores: </Text>
            </View>
            <View>

                <View>
                    <Text style={styles.textoAutores}>Islan Pereira</Text>
                    <View style={styles.buttonRedesSociais}>
                        <IconButton
                            icon="instagram"
                            iconColor={'#E1306C'}
                            size={20}
                            onPress={() => Linking.openURL('https://www.instagram.com/islanx_oliv/')}
                        />
                        <IconButton
                            icon="github"
                            iconColor={'#fff'}
                            size={20}
                            onPress={() => Linking.openURL('https://github.com/IslanP1/')}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.textoAutores}>Luiz Fernando</Text>
                    <View style={styles.buttonRedesSociais}>
                        <IconButton
                            icon="instagram"
                            iconColor={'#E1306C'}
                            size={20}
                            onPress={() => Linking.openURL('https://www.instagram.com/luizfernando100_/')}
                        />
                        <IconButton
                            icon="github"
                            iconColor={'#fff'}
                            size={20}
                            onPress={() => Linking.openURL('https://github.com/luizfernandoin/')}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.textoAutores}>Gustavo Marcena</Text>
                    <View style={styles.buttonRedesSociais}>
                        <IconButton
                            icon="instagram"
                            iconColor={'#E1306C'}
                            size={20}
                            onPress={() => Linking.openURL('')}
                        />
                        <IconButton
                            icon="github"
                            iconColor={'#fff'}
                            size={20}
                            onPress={() => Linking.openURL('https://github.com/GustavoPMarcena/')}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.titulos}>Github do projeto:</Text>
                </View>
                <View style={styles.buttonRedesSociais}>
                    <IconButton
                        icon="github"
                        iconColor={'#fff'}
                        size={20}
                        onPress={() => Linking.openURL('https://github.com/IslanP1/Pyquiz-RN.git')}
                    />
                </View>

            </View>

        </View>
    )
}

export default TelaCreditos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    titulos: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: '5%',
        marginBottom: '5%',
        color: '#fff',
    },
    textoDestinacao: {
        display: 'flex',
        textAlign: 'justify',
        color: '#fff',
        fontSize: 15,
        marginLeft: '5%',
        marginRight: '5%',
    },
    textoAutores: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonRedesSociais: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
})