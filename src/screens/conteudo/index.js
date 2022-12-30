import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BottomTabBar from '../Tabbar'
import { getAuth } from 'firebase/auth'
import { db } from '../../../firebase'
import { get, ref, set, update } from 'firebase/database'



const TelaModulos = () => {

    const [userID, setUserID] = useState(null);
    const navigation = useNavigation()
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

    }, [verificaracertos()]);

    function verificaracertos() {
        get(ref(db, `users/${userID}/pontuacaogeral`))
            .then((snapshot) => {
                const data = snapshot.val()
                // Atribui a resposta a variável
                if (data.pontuacaomodulo1 == 5) {
                    setBtverde1(true)
                } else {
                    setBtverde1(false)
                }
                if (data.pontuacaomodulo2 == 5) {
                    setBtverde2(true)
                } else {
                    setBtverde2(false)
                }
                if (data.pontuacaomodulo3 == 5) {
                    setBtverde3(true)
                } else {
                    setBtverde3(false)
                }
                if (data.pontuacaomodulo4 == 5) {
                    setBtverde4(true)
                } else {
                    setBtverde4(false)
                }
                if (data.pontuacaomodulo5 == 5) {
                    setBtverde5(true)
                } else {
                    setBtverde5(false)
                }
                if (data.pontuacaomodulo6 == 5) {
                    setBtverde6(true)
                } else {
                    setBtverde6(false)
                }
                if (data.pontuacaomodulo7 == 5) {
                    setBtverde7(true)
                } else {
                    setBtverde7(false)
                }
                if (data.pontuacaomodulo8 == 5) {
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
                <TouchableOpacity style={[styles.botao, { borderColor: '#8c52ff' }]} onPress={() => navigation.navigate('TelaConteudo')}>
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

                <TouchableOpacity style={[styles.botao, { borderColor: '#ffaac4' }]} >
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
                <TouchableOpacity style={[styles.botao, { borderColor: '#daa520' }]} >
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 3 - Repetição</Text>
                            <Text style={styles.textop} >Estruturas For e while</Text>
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
                <TouchableOpacity style={[styles.botao, { borderColor: '#7cdb54' }]} >
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 4 - Tuplas</Text>
                            <Text style={styles.textop} >Armazenando em variáveis</Text>
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
                <TouchableOpacity style={[styles.botao, { borderColor: '#ffaac4' }]} >
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 5 - Listas</Text>
                            <Text style={styles.textop} >Armazenando em sequência</Text>
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
                <TouchableOpacity style={[styles.botao, { borderColor: '#8c52ff' }]} >
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 6 - Dicionários</Text>
                            <Text style={styles.textop} >Armazenando diversos conteúdos</Text>
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
                <TouchableOpacity style={[styles.botao, { borderColor: '#daa520' }]} >
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 7 - Funções</Text>
                            <Text style={styles.textop} >Chamando códigos</Text>
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
                <TouchableOpacity style={[styles.botao, { borderColor: '#f15551' }]} >
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textog} >Módulo 8 - Tratamento de erros</Text>
                            <Text style={styles.textop} >O Fim</Text>
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
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />

            </ScrollView>
            <BottomTabBar />
            <Text />
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
        backgroundColor: '#121212'
    },
    textog: {
        color: '#fff',
        fontSize: 18,
        fontStyle: 'bold',
    },
    textop: {
        color: 'white',
        fontSize: 15,
    },
    botao: {

        marginTop: '4%',
        padding: 20,
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 2,
        borderRadius: 10,

    },



});
