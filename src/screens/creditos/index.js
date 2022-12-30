import { StyleSheet, Text, View, Linking, FlatList, Image, Dimensions, TouchableOpacity, SafeAreaView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Button, IconButton, MD3Colors } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');


const TelaCreditos = () => {
    const [visible, setVisible] = useState(false);
    const [insta, setInsta] = useState('')
    const [github, setGithub] = useState('')

    return (
        
        <View style={styles.container}>
            <Animatable.View
            animation="fadeInLeft"
            style={styles.contHeader}>
                <Text style={[styles.textoHeader]}>Aplicativo desenvolvido para fins acadêmicos como modo de estágio para os alunos iniciantes em programação residentes do IFPB - Instituto Federal da Paraíba (Campus Cajazeiras).
                </Text>
            </Animatable.View>

            <Animatable.View 
            animation="fadeInLeft" 
            delay={500} 
            style={[{ marginBottom: 20 }]
            }>
                <Text style={styles.titulos}>Desenvolvedores</Text>
            </Animatable.View>
            
            <View>
                <View>
                    <TouchableOpacity 
                    style={styles.contDevOps} 
                    onPress={() => {setVisible(true); setGithub('https://github.com/GustavoPMarcena')}}>
                        <Image source={require("../../../assets/marcena.jpg")} style={styles.avatar}/>
                        <View>
                            <Text style={[styles.name, {color:'#6f6'}]}>Gustavo Marcena</Text>
                            <Text style={[styles.status]}>Full-Stack</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    style={styles.contDevOps} 
                    onPress={() => {setVisible(true); setInsta('https://www.instagram.com/islanx_oliv/') ;setGithub('https://github.com/IslanP1/')}}>
                        <Image source={require("../../../assets/islan.jpg")} style={styles.avatar}/>
                        <View>
                            <Text style={[styles.name, {color:'#6f6'}]}>Islan Pereira</Text>
                            <Text style={[styles.status]}>Back-End</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    style={styles.contDevOps} 
                    onPress={() => {setInsta('https://www.instagram.com/luizfernando100_/'); setGithub('https://github.com/luizfernandoin/'); setVisible(true);}}>
                        <Image source={require("../../../assets/luiz.png")} style={styles.avatar}/>
                        <View>
                            <Text style={[styles.name, {color:'#6f6'}]}>Luiz Fernando</Text>
                            <Text style={[styles.status]}>Full-Stack</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal 
                visible={visible} 
                transparent={true}
                animationType={'slide'} 
                onRequestClose={() => setVisible(false)
                }>
                    <SafeAreaView style={{ flex: 1, marginBottom: 20}}>
                        <TouchableOpacity style={{flex: 1}} onPress={() => setVisible(false)}/>
                        <View style={styles.slideBar}>
                            <TouchableOpacity 
                            style={styles.footerItem}
                            onPress={() => insta ? Linking.openURL(insta) : null}>
                                <Text style={styles.footerTxt}>Instagram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={styles.footerItem}
                            onPress={() => github ? Linking.openURL(github) : null}>
                                <Text style={styles.footerTxt}>Github</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.footerItem} onPress={() => setVisible(false)}>
                                <Text style={styles.footerTxtCancelar}>Concluir</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </Modal>

                {visible ? <View style={styles.overlay}/> : null}

            </View>
        </View>
    )
}

export default TelaCreditos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    contHeader: {
        backgroundColor: '#5015bd',
        height: '20%',
        width: '90%',
        marginTop: '5%',
        marginBottom: '20%',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center',
    },
    contDevOps: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: '#454545',
        borderBottomWidth: 3,
    },
    textoHeader: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginLeft: '1%',
        marginRight: '1%',
    },
    titulos: {
        fontSize:28,
        textAlign: 'center',
        fontWeight:'bold',
        color:'#aFFF',
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
    name: {
        color:'#fff',
        fontSize:14,
    },
    status: {
        color: '#ccc',
        fontSize: 14,
    },
    creen: {
        flex: 1,
        width,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
        borderColor: 'blue',
    },
    slideBar: {
        paddingHorizontal: 20,
    },
    footerItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 7,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    footerTxt: {
        color: 'blue',
        fontSize: 16,
        textAlign: 'center'
    },
    footerTxtCancelar: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
    }
})