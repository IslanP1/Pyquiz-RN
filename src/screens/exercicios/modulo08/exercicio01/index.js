import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ref, set } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { db } from '../../../../../firebase'
import { useNavigation } from '@react-navigation/native'
import * as Expo from 'expo-av';

const TelaExercicioModulo08 = () => {
    const navigation = useNavigation()
    const [userID, setUserID] = useState(null);
    const [pontuacao, setPontuacao] = useState(0)
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0)
    const [mostrarquestoes, setMostrarquestoes] = useState(true)

    const questoes = [
        {
            questao: '1- É possível ter mais de um bloco "except" após um bloco "try" no Python?', respostas: ['Sim, é possível ter quantos blocos "except" quiser', 'Não, é possível ter somente um bloco "except"', 'Sim, é possível ter mais de um bloco "except", desde que os erros especificados sejam diferentes', 'Sim, é possível ter mais de um bloco "except", desde que os erros especificados sejam do mesmo tipo'], respostacorreta: 'Sim, é possível ter mais de um bloco "except", desde que os erros especificados sejam diferentes'
        },
        {
            questao: '2- Qual é a sintaxe correta para especificar um tipo de erro no bloco "except" no Python?', respostas: ["except ExceptionType", 'except ExceptionType()', "except ExceptionType(args)", "except ExceptionType:"], respostacorreta: "except ExceptionType:"
        },
        {
            questao: '3- Qual é a sintaxe correta para usar o comando "raise" no Python?', respostas: ['raise ExceptionName', 'raise ExceptionName()', 'raise ExceptionName(args)', 'raise ExceptionName(args())'], respostacorreta: 'raise ExceptionName(args)'
        },
        {
            questao: '4- Qual é a finalidade do bloco "else" após um bloco "try" no Python?', respostas: ['Executar um código se nenhum erro ocorrer no bloco "try"', 'Executar um código se um erro de qualquer tipo ocorrer no bloco "try"', 'Executar um código se um erro do tipo especificado no bloco "except" ocorrer', 'Substituir o bloco "except" para tratar um erro específico'], respostacorreta: 'Executar um código se nenhum erro ocorrer no bloco "try"'
        },
        {
            questao: '5- O que ocorre se o código no bloco "try" causar um erro que não é do tipo especificado no bloco "except"?', respostas: ["O erro é ignorado e o código continua a ser executado", 'O erro é tratado pelo código no bloco "except"', 'O erro é tratado pelo código no bloco "else"', 'Ocorre uma falha na execução do programa'], respostacorreta: "Ocorre uma falha na execução do programa"
        },
        {
            questao: '6- Qual é a finalidade do comando "raise" no Python?', respostas: ['Gerar um erro explicitamente em um código', "Ignorar um erro que ocorreu no código", "Tratar um erro específico no código", 'Substituir o bloco "except" para tratar um erro específico'], respostacorreta: "Gerar um erro explicitamente em um código"
        },
        {
            questao: '7- Qual é a finalidade do bloco "try" no Python?', respostas: ['Executar um código independentemente de um erro ocorrer ou não', 'Ignorar um erro que ocorreu no código', 'Tratar um erro específico no código', 'Conter um código que pode causar um erro e especificar o código para lidar com o erro no bloco "except"'], respostacorreta: 'Conter um código que pode causar um erro e especificar o código para lidar com o erro no bloco "except"'
        },
        {
            questao: '8- É possível tratar um erro específico no mesmo bloco "except" que um erro genérico?', respostas: ['Sim, é possível tratar um erro específico e um erro genérico no mesmo bloco "except"', 'Não, é obrigatório tratar um erro específico e um erro genérico em blocos "except" diferentes', 'Sim, é possível tratar um erro específico e um erro genérico no mesmo bloco "except", mas o erro específico deve vir primeiro', 'Não, é obrigatório tratar um erro específico e um erro genérico em blocos "except" diferentes, mas o erro específico deve vir primeiro'], respostacorreta: 'Sim, é possível tratar um erro específico e um erro genérico no mesmo bloco "except"'
        },
        {
            questao: '9- Qual é a finalidade do comando "assert" no Python?', respostas: ['Gerar um erro explicitamente em um código', 'Verificar se uma condição é verdadeira e, se não for, gerar um erro de AssertionError', 'Verificar se uma condição é verdadeira e, se for, executar um código específico', 'Substituir o bloco "try" para tratar um erro específico'], respostacorreta: 'Verificar se uma condição é verdadeira e, se não for, gerar um erro de AssertionError'
        },
        {
            questao: '10- É possível usar o comando "assert" para tratar um erro que ocorreu no código', respostas: ['Sim, é possível usar o comando "assert" para tratar um erro que ocorreu no código', 'Não, o comando "assert" só pode ser usado para verificar se uma condição é verdadeira', 'Sim, é possível usar o comando "assert" para tratar um erro que ocorreu no código, desde que a condição especificada seja falsa', 'Não, o comando "assert" só pode ser usado para gerar um erro de AssertionError se a condição especificada for falsa'], respostacorreta: 'Não, o comando "assert" só pode ser usado para gerar um erro de AssertionError se a condição especificada for falsa'
        },
        {
            questao: '', respostas: ['', '', ''], respostacorreta: ''
        }
    ]

    useEffect(() => {
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential = teste;
        const id = userCredential.uid;
        setUserID(id);
    }, []);



    async function mensagemCorreta() {
        const som = new Expo.Audio.Sound()
        await som.loadAsync(require('../../../../../sounds/correta.mp3'));
        await som.playAsync();
    }

    async function mensagemErrada() {
        const som = new Expo.Audio.Sound()
        await som.loadAsync(require('../../../../../sounds/errada.mp3'));
        await som.playAsync();
    }

    function armazenarRespostaCorreta() {
        set(ref(db, `users/${userID}/modulo8/respostaexercicios/`), {
            exercicio01: questoes[0].respostacorreta,
            exercicio02: questoes[1].respostacorreta,
            exercicio03: questoes[2].respostacorreta,
            exercicio04: questoes[3].respostacorreta,
            exercicio05: questoes[4].respostacorreta,
            exercicio06: questoes[5].respostacorreta,
            exercicio07: questoes[6].respostacorreta,
            exercicio08: questoes[7].respostacorreta,
            exercicio09: questoes[8].respostacorreta,
            exercicio10: questoes[9].respostacorreta,
        }).then(() => {

        }).catch((error) => {
            alert(error)
        });
    }

    const correcaoresposta = (questaoselecionada) => {
        if (questaoselecionada == questoes[numeroquestaoatual].respostacorreta) {
            setPontuacao(pontuacao + 1)
            mensagemCorreta()
            set(ref(db, `users/${userID}/modulo8/exercicios`), {
                pontuacao: pontuacao + 1

            }).then(() => {

            }).catch((error) => {
                alert(error)
            });
        } else {
            mensagemErrada();
        };

        setnumeroquestaoatual(numeroquestaoatual + 1);

        if (numeroquestaoatual === questoes.length - 2) {
            setMostrarquestoes(false)
            armazenarRespostaCorreta()
            navigation.navigate('TelaPontuacaoModulo08')
        }
    };

    return (
        <View>
            {mostrarquestoes && (
                <ScrollView style={styles.container} scrollsToTop={true}>
                    <Text style={styles.textoPergunta}>
                        {questoes[numeroquestaoatual].questao}
                    </Text>
                    {questoes[numeroquestaoatual].respostas.map((resposta) => (
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => correcaoresposta(resposta)}>
                                <Text style={styles.textoResposta}>{resposta}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                    <Text style={styles.textoAcerto}>Acertos: {pontuacao}</Text>
                </ScrollView>
            )}
        </View>
    )
};

export default TelaExercicioModulo08
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    textoPergunta: {
        fontSize: 20,
        color: '#fff',
        marginTop: '5%',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '5%',
        justifyContent: 'center',
    },
    textoResposta: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingRight: '2%',
        paddingLeft: '2%'
    },
    textoAcerto: {
        fontSize: 20,
        color: '#fff',
        marginBottom: '5%',
        textAlign: 'center',
        marginTop: '20%',
    },
    button: {
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#5015bd',
        borderRadius: 20,
    }
})

