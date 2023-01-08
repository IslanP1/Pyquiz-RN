import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth } from 'firebase/auth'
import { db } from '../../../firebase'
import { get, ref } from 'firebase/database'
import * as Expo from 'expo-av';

const TelaModulos = () => {
    const [userID, setUserID] = useState(null);
    const navigation = useNavigation()
    const [load, setLoad] = useState(true)

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const [btverde1, setBtverde1] = useState(false);
    const [btverde2, setBtverde2] = useState(false);
    const [btverde3, setBtverde3] = useState(false);
    const [btverde4, setBtverde4] = useState(false);
    const [btverde5, setBtverde5] = useState(false);
    const [btverde6, setBtverde6] = useState(false);
    const [btverde7, setBtverde7] = useState(false);
    const [btverde8, setBtverde8] = useState(false);

    useEffect(() => {
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential = teste;
        const id = userCredential.uid;
        setUserID(id);

        navigation.addListener('focus', () => setLoad(!load))

        BackHandler.addEventListener("hardwareBackPress", telaInicial);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", telaInicial);

    }, [verificaracertos(), load, navigation]);

    async function click() {
        const som = new Expo.Audio.Sound()
        await som.loadAsync(require('../../../sounds/click.mp3'));
        await som.playAsync();
    }

    function telaInicial() {
        navigation.navigate('BottomTabBar')
        return true
    }

    function verificaracertos() {
        get(ref(db, `users/${userID}/pontuacaogeral`))
            .then((snapshot) => {
                const data = snapshot.val()
                // Atribui a resposta a variável
                if (data.pontuacaomodulo1 == 10) {
                    setBtverde1(true)
                } else {
                    setBtverde1(false)
                }
                if (data.pontuacaomodulo2 == 10) {
                    setBtverde2(true)
                } else {
                    setBtverde2(false)
                }
                if (data.pontuacaomodulo3 == 10) {
                    setBtverde3(true)
                } else {
                    setBtverde3(false)
                }
                if (data.pontuacaomodulo4 == 10) {
                    setBtverde4(true)
                } else {
                    setBtverde4(false)
                }
                if (data.pontuacaomodulo5 == 10) {
                    setBtverde5(true)
                } else {
                    setBtverde5(false)
                }
                if (data.pontuacaomodulo6 == 10) {
                    setBtverde6(true)
                } else {
                    setBtverde6(false)
                }
                if (data.pontuacaomodulo7 == 10) {
                    setBtverde7(true)
                } else {
                    setBtverde7(false)
                }
                if (data.pontuacaomodulo8 == 10) {
                    setBtverde8(true)
                } else {
                    setBtverde8(false)
                }
            }).catch((error) => {
                setBtverde1(false)

            });
    }

    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]} >
            <ScrollView>
                <TouchableOpacity style={[styles.botao, { borderColor: '#8c52ff' }]} onPress={() => [click(), navigation.navigate('TelaModulo1')]}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 1 - Iniciando com python</Text>
                            <Text style={styles.textop} >Introdução a linguagem</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde1 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { borderColor: '#ffaac4' }]} onPress={() => [click(), navigation.navigate('TelaModulo2')]}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 2 - Condição</Text>
                            <Text style={styles.textop} >O basico de If, elif, else</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde2 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { borderColor: '#daa520' }]} onPress={() => [click(), navigation.navigate('TelaModulo3')]}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 3 - Listas e Tuplas</Text>
                            <Text style={styles.textop} >Armazenando em sequência</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde3 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { borderColor: '#7cdb54' }]} onPress={() => [click(), navigation.navigate('TelaModulo4')]}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 4 - Metodo For</Text>
                            <Text style={styles.textop} >Repetição e loops</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde4 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { borderColor: '#ffaac4' }]} onPress={() => [click(), navigation.navigate('TelaModulo5')]}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 5 - Metodo While</Text>
                            <Text style={styles.textop} >Repetição e loops</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde5 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { borderColor: '#8c52ff' }]} onPress={() => [click(), navigation.navigate('TelaModulo06')]}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 6 - Dicionários</Text>
                            <Text style={styles.textop} >Estrutura e métodos mais utilizados</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde6 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { borderColor: '#daa520' }]} onPress={() => [click(), navigation.navigate('TelaModulo07')]}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 7 - Funções</Text>
                            <Text style={styles.textop} >Chamando funções</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde7 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { borderColor: '#f15551' }]} onPress={() => [click(), navigation.navigate('TelaModulo08')]} >
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 8 - Tratamento de erros</Text>
                            <Text style={styles.textop} >Try, Except, Raise e Assert</Text>
                        </View>
                        <View style={{ flex: 0.1 }}>
                            {btverde8 && (
                                <View>
                                    <Image
                                        source={require('../../../assets/Iconedecompleto.png')}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, marginBottom: 100 }} />
            </ScrollView>
            <Text />
            <Text />
            <Text />
        </View>
    )
}

export default TelaModulos

const styles = StyleSheet.create({
    container: {
        marginBottom: 70,
        backgroundColor: '#000000'
    },
    textog: {
        color: '#fff',
        fontSize: 22,
        fontStyle: 'bold',
    },
    textop: {
        color: '#a8939ecc',
        fontSize: 18,
    },
    botao: {
        marginTop: '4%',
        padding: 20,
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 5,
        borderRadius: 30,
        height: '10.6%',
    },
});
