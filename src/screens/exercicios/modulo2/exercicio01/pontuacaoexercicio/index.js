import { View, Text, TouchableOpacity, BackHandler, Alert, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native"
import { db } from '../../../../../../firebase';
import { get, ref, set, update } from 'firebase/database'



const TelaPontuacaoModulo01 = () => {

    const [userID, setUserID] = useState(null);
    const [respostaCorreta01, setRespostaCorreta01] = useState(null);
    const [respostaCorreta02, setRespostaCorreta02] = useState(null);
    const [respostaCorreta03, setRespostaCorreta03] = useState(null);
    const [respostaCorreta04, setRespostaCorreta04] = useState(null);
    const [respostaCorreta05, setRespostaCorreta05] = useState(null);
    const [pontuacao, setPontuacao] = useState(null);
    const [result, setResult] = useState('');
    
    const navigation = useNavigation()

    useEffect(() => {
        // Executar algum código aqui assim que a tela abre
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential = teste;
        // Obter o ID do usuário logado
        const id = userCredential.uid;
        setUserID(id);

        BackHandler.addEventListener("hardwareBackPress", telaModulos);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", telaModulos);

    }, [buscarRespostas(), buscarPontuacao()]);

    function telaModulos() {
        navigation.navigate('TelaModulos')
        

        return true;
    };


    function buscarRespostas() {
        get(ref(db, `users/${userID}/modulo1/respostaexercicios`))
            .then((snapshot) => {
                const data = snapshot.val()
                // Atribui a resposta a variável
                setRespostaCorreta01(data.exercicio01);
                setRespostaCorreta02(data.exercicio02);
                setRespostaCorreta03(data.exercicio03);
                setRespostaCorreta04(data.exercicio04);
                setRespostaCorreta05(data.exercicio05);

            }).catch((error) => {
                // Em caso de erro, mostra a mensagem de erro no console

            });
    }

    function buscarPontuacao() {
        get(ref(db, `users/${userID}/modulo1/exercicios`))
            .then((snapshot) => {
                const data = snapshot.val()
                // Atribui a resposta a variável
                setPontuacao(data.pontuacao);
                if (data.pontuacao == 10) {
                    setResult('Parabéns! Você completou o módulo')
                    update(ref(db, `users/${userID}/pontuacaogeral`), {
                        pontuacaomodulo1: data.pontuacao,

                    }).then(() => {
                    })
                        .catch((error) => {
                            alert(error)
                        });

                } else {
                    setResult('Infelizmente você não atingiu o limite de questões para completar o modulo!')
                }
            }).catch((error) => {
                // Em caso de erro, mostra a mensagem de erro no console

            });
    }


    return (
        <View style={{ backgroundColor: '#000000', flex: 1 }}>
           
            <Text style={styles.textog}>Respostas dos exercícios: </Text>
            <View style={{marginTop:'5%', marginBottom:'5%'}} >
                <Text style={styles.texto}>Primeiro exercício: {respostaCorreta01}</Text>
                <Text style={styles.texto}>Segundo exercício: {respostaCorreta02}</Text>
                <Text style={styles.texto}>Terceiro exercício: {respostaCorreta03}</Text>
                <Text style={styles.texto}>Quarto exercício: {respostaCorreta04}</Text>
                <Text style={styles.texto}>Quinto exercício: {respostaCorreta05}</Text>    
            </View>
            <Text style={styles.textog}>Pontuação obtida:</Text>
            <Text style={styles.textop}>{pontuacao} / 10</Text>
            <Text style={styles.textresult}>{result}</Text>
            <TouchableOpacity style={styles.botoes} title="Voltar" onPress={() => navigation.navigate('TelaModulos')}>
                <Text style={styles.textog}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TelaPontuacaoModulo01

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        marginBottom: 60,
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botoes: {
        backgroundColor: '#5015bd',
        height: 60,
        width: '75%',
        marginTop: '5%',
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    textog: {
        color: '#fff',
        fontSize: 22,
        fontStyle: 'bold',
        textAlign: 'center'
    },
    texto: {
        color: '#a8939ecc',
        fontSize: 18,
        textAlign:'left',
        marginLeft:'10%',
        marginRight:'10%'
    },
    textop: {
        color: 'white',
        fontSize: 27,
        textAlign: 'center',
        marginTop: '4%',
        padding: 20,
        marginLeft: '30%',
        marginRight: '30%',
        borderWidth: 5,
        borderRadius: 30,
        height: '10.6%',
        borderColor: 'black',
        backgroundColor: '#8c52ff'
    },
    textresult: {
        color: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'center',
        fontSize: 20,
        marginTop: '10%',
        marginBottom: '10%'
    }
})
