import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ref, set } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { db } from '../../../../../firebase'
import { useNavigation } from '@react-navigation/native'
import * as Expo from 'expo-av';

const TelaExercicioModulo06 = () => {
    const navigation = useNavigation()
    const [userID, setUserID] = useState(null);
    const [pontuacao, setPontuacao] = useState(0)
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0)
    const [mostrarquestoes, setMostrarquestoes] = useState(true)

    const questoes = [
        {
            questao: '1- Qual método é usado para remover todos os itens de um dicionário?', respostas: ['dicionario.clear()', 'dicionario.popitem()', "dicionario.update({'chave': 'valor'})", "dicionario.setdefault('chave', 'valor')"], respostacorreta: 'dicionario.clear()'
        },
        {
            questao: '2- Qual método é usado para obter o valor de um item em um dicionário, fornecendo um valor padrão caso a chave não exista?', respostas: ["dicionario.pop('chave', 'valor padrão')", 'dicionario.items()', "dicionario.get('chave', 'valor padrão')", "dicionario.setdefault('chave', 'valor')"], respostacorreta: "dicionario.get('chave', 'valor padrão')"
        },
        {
            questao: '3- Qual método é usado para obter uma lista de tuplas com todos os pares chave-valor de um dicionário?', respostas: ['dicionario.keys()', 'dicionario.values()', 'dicionario.popitem()', 'dicionario.items()'], respostacorreta: 'dicionario.items()'
        },
        {
            questao: '4- Qual método é usado para remover um item de um dicionário e retornar o valor?', respostas: ["dicionario.pop('chave')", "dicionario.popitem()", "dicionario.setdefault('chave', 'valor')", "dicionario.update({'chave': 'valor'})"], respostacorreta: "dicionario.pop('chave')"
        },
        {
            questao: '5- Qual método é usado para inserir um item em um dicionário, com a chave e o valor fornecidos, caso a chave não exista?', respostas: ["dicionario.clear()", "dicionario.popitem()", "dicionario.setdefault('chave', 'valor')", "dicionario.update({'chave': 'valor'})"], respostacorreta: "dicionario.setdefault('chave', 'valor')"
        },
        {
            questao: '6- Qual método é usado para atualizar um dicionário com os pares chave-valor de outro dicionário?', respostas: ['dicionario.popitem()', "dicionario.update({'chave': 'valor'}", "dicionario.clear()", "dicionario.setdefault('chave', 'valor')"], respostacorreta: "dicionario.update({'chave': 'valor'}"
        },
        {
            questao: '7- Qual método é usado para remover um par chave-valor aleatório de um dicionário e retorná-lo como uma tupla?', respostas: ['dicionario.keys()', 'dicionario.clear()', 'dicionario.values()', 'dicionario.popitem()'], respostacorreta: 'dicionario.popitem()'
        },
        {
            questao: '8- Qual método é usado para obter uma lista com todas as chaves de um dicionário?', respostas: ['dicionario.keys()', 'dicionario.values()', 'dicionario.clear()', 'dicionario.items()'], respostacorreta: 'dicionario.keys()'
        },
        {
            questao: '9- Qual método é usado para obter uma lista com todos os valores de um dicionário?', respostas: ['dicionario.items()', 'dicionario.keys()', 'dicionario.clear()', 'dicionario.values()'], respostacorreta: 'dicionario.values()'
        },
        {
            questao: '10- Qual método é usado para remover um item de um dicionário e retornar o valor, fornecendo um valor padrão caso a chave não exista?', respostas: ["dicionario.pop('chave', 'valor padrão')", "dicionario.update({'chave': 'valor'})", 'dicionario.popitem()', "dicionario.setdefault('chave', 'valor')"], respostacorreta: "dicionario.update({'chave': 'valor'})"
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
        set(ref(db, `users/${userID}/modulo6/respostaexercicios/`), {
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
            set(ref(db, `users/${userID}/modulo6/exercicios`), {
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
            navigation.navigate('TelaPontuacaoModulo06')
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

export default TelaExercicioModulo06
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

