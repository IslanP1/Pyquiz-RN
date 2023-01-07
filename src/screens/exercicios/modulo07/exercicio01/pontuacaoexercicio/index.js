import { View, Text, TouchableOpacity, BackHandler, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native"
import { db } from '../../../../../../firebase';
import { get, ref, update } from 'firebase/database'


const TelaPontuacaoModulo07 = () => {

    const [userID, setUserID] = useState(null);
    const [respostaCorreta01, setRespostaCorreta01] = useState(null);
    const [respostaCorreta02, setRespostaCorreta02] = useState(null);
    const [respostaCorreta03, setRespostaCorreta03] = useState(null);
    const [respostaCorreta04, setRespostaCorreta04] = useState(null);
    const [respostaCorreta05, setRespostaCorreta05] = useState(null);
    const [respostaCorreta06, setRespostaCorreta06] = useState(null);
    const [respostaCorreta07, setRespostaCorreta07] = useState(null);
    const [respostaCorreta08, setRespostaCorreta08] = useState(null);
    const [respostaCorreta09, setRespostaCorreta09] = useState(null);
    const [respostaCorreta10, setRespostaCorreta10] = useState(null);

    const [pontuacao, setPontuacao] = useState(null);
    const [result, setResult] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential = teste;
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
        get(ref(db, `users/${userID}/modulo7/respostaexercicios`))
            .then((snapshot) => {
                const data = snapshot.val()
                setRespostaCorreta01(data.exercicio01);
                setRespostaCorreta02(data.exercicio02);
                setRespostaCorreta03(data.exercicio03);
                setRespostaCorreta04(data.exercicio04);
                setRespostaCorreta05(data.exercicio05);
                setRespostaCorreta06(data.exercicio06);
                setRespostaCorreta07(data.exercicio07);
                setRespostaCorreta08(data.exercicio08);
                setRespostaCorreta09(data.exercicio09);
                setRespostaCorreta10(data.exercicio10);

            }).catch((error) => {

            });
    }

    function buscarPontuacao() {
        get(ref(db, `users/${userID}/modulo7/exercicios`))
            .then((snapshot) => {
                const data = snapshot.val()
                setPontuacao(data.pontuacao);
                if (data.pontuacao == 10) {
                    setResult('Parabéns! Você completou o módulo')
                    update(ref(db, `users/${userID}/pontuacaogeral`), {
                        pontuacaomodulo7: data.pontuacao,
                    }).then(() => {

                    }).catch((error) => {
                        alert(error)
                    });
                } else {
                    setResult('Infelizmente você não atingiu o limite de questões para completar o modulo!')
                }
            }).catch((error) => {
            });
    }


    return (
        <View style={{ backgroundColor: '#000000', flex: 1 }}>
            {
                pontuacao === 10 ? (
                    <View>
                        <Text style={styles.textog}>Respostas dos exercícios: </Text>
                        <View style={{ marginTop: '5%', marginBottom: '5%' }} >
                            <Text style={styles.texto}>Primeiro exercício: {respostaCorreta01}</Text>
                            <Text style={styles.texto}>Segundo exercício: {respostaCorreta02}</Text>
                            <Text style={styles.texto}>Terceiro exercício: {respostaCorreta03}</Text>
                            <Text style={styles.texto}>Quarto exercício: {respostaCorreta04}</Text>
                            <Text style={styles.texto}>Quinto exercício: {respostaCorreta05}</Text>
                            <Text style={styles.texto}>Sexto exercício: {respostaCorreta06}</Text>
                            <Text style={styles.texto}>Sétimo exercício: {respostaCorreta07}</Text>
                            <Text style={styles.texto}>Oitavo exercício: {respostaCorreta08}</Text>
                            <Text style={styles.texto}>Nono exercício: {respostaCorreta09}</Text>
                            <Text style={styles.texto}>Décimo exercício: {respostaCorreta10}</Text>
                        </View>
                    </View>
                ) : null
            }
            <Text style={styles.textog}>Pontuação obtida:</Text>
            <Text style={styles.textop}>{pontuacao} / 10</Text>
            <Text style={styles.textresult}>{result}</Text>
            <TouchableOpacity style={styles.botoes} title="Voltar" onPress={() => navigation.navigate('TelaModulos')}>
                <Text style={styles.textog}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TelaPontuacaoModulo07

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
        textAlign: 'left',
        marginLeft: '10%',
        marginRight: '10%'
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
