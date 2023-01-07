import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ref, set } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { db } from '../../../../../firebase'
import { useNavigation } from '@react-navigation/native'
import * as Expo from 'expo-av';

const TelaExercicioModulo07 = () => {
    const navigation = useNavigation()
    const [userID, setUserID] = useState(null);
    const [pontuacao, setPontuacao] = useState(0)
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0)
    const [mostrarquestoes, setMostrarquestoes] = useState(true)

    const questoes = [
        {
            questao: '1- Qual das opções a seguir é a forma correta de se definir uma função em Python?', respostas: ['function minha_funcao(arg1, arg2):', 'def minha_funcao(arg1, arg2):', "func minha_funcao(arg1, arg2):", "define minha_funcao(arg1, arg2):"], respostacorreta: 'def minha_funcao(arg1, arg2):'
        },
        {
            questao: '2- O que acontece se uma função não tiver um return explicito?', respostas: ["A função retorna None", 'A função retorna um erro', "A função retorna False", "A função retorna True"], respostacorreta: "A função retorna None"
        },
        {
            questao: '3- Qual das opções a seguir é a forma correta de se chamar uma função em Python?', respostas: ['call minha_funcao(arg1, arg2)', 'execute minha_funcao(arg1, arg2)', 'minha_funcao arg1, arg2', 'minha_funcao(arg1, arg2)'], respostacorreta: 'minha_funcao(arg1, arg2)'
        },
        {
            questao: '4- Qual das opções a seguir é a forma correta de se passar um argumento opcional para uma função em Python?', respostas: ["def minha_funcao(arg1, arg2, opcional=valor_default)", "def minha_funcao(arg1, arg2)", "def minha_funcao(arg1, arg2, *optional)", "def minha_funcao(arg1, arg2, optional)"], respostacorreta: "def minha_funcao(arg1, arg2, opcional=valor_default)"
        },
        {
            questao: '5- Qual das opções a seguir é a forma correta de se passar um número variável de argumentos para uma função em Python?', respostas: ["def minha_funcao(arg1, arg2, *arguments)", "def minha_funcao(arg1, arg2, *vargs)", "def minha_funcao(arg1, arg2, *args)", "def minha_funcao(arg1, arg2, *var_args)"], respostacorreta: "def minha_funcao(arg1, arg2, *args)"
        },
        {
            questao: '6- Qual das opções a seguir é a forma correta de se retornar múltiplos valores de uma função em Python?', respostas: ['return valor', "return valor1, valor2", "return [valor1, valor2]", "return {valor1, valor2}"], respostacorreta: "return valor1, valor2"
        },
        {
            questao: '7- Qual das opções a seguir é a forma correta de se usar uma função como objeto em Python?', respostas: ['func = minha_funcao()', 'func = &minha_funcao', 'func = minha_funcao', 'func = minha_funcao[]'], respostacorreta: 'func = minha_funcao'
        },
        {
            questao: '8- Qual das opções a seguir é a forma correta de se passar uma função como argumento para outra função em Python?', respostas: ['minha_funcao(outra_funcao(arg), arg)', 'minha_funcao(callback=outra_funcao, arg)', 'minha_funcao(outra_funcao, arg)', 'minha_funcao(outra_funcao[arg], arg)'], respostacorreta: 'minha_funcao(outra_funcao, arg)'
        },
        {
            questao: '9- Qual das opções a seguir é a forma correta de se criar uma função anônima em Python?', respostas: ['lambda x: x + 1', 'def (x) lambda: return x + 1', 'lambda(x) = x + 1', 'def lambda(x): return x + 1'], respostacorreta: 'lambda x: x + 1'
        },
        {
            questao: '10- Qual das opções a seguir é a forma correta de se passar uma função anônima como argumento para outra função em Python?', respostas: ["minha_funcao(def (x): return x + 1, arg)", "minha_funcao((x) => x + 1, arg)", 'minha_funcao(lambda(x): x + 1, arg)', "minha_funcao(lambda x: x + 1, arg)"], respostacorreta: "minha_funcao(lambda x: x + 1, arg)"
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
        set(ref(db, `users/${userID}/modulo7/respostaexercicios/`), {
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
            set(ref(db, `users/${userID}/modulo7/exercicios`), {
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
            navigation.navigate('TelaPontuacaoModulo07')
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

export default TelaExercicioModulo07
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

