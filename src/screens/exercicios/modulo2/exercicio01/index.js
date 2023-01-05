import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { get, ref, set } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { db } from '../../../../../firebase'
import { useNavigation } from '@react-navigation/native'
import * as Expo from 'expo-av';


//import database from '../../../../../perguntas';

const TelaExercicio = () => {
    const navigation = useNavigation()
    const [userID, setUserID] = useState(null);
    const [pontuacao, setPontuacao] = useState(0);
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0);
    const [mostrarquestoes, setMostrarquestoes] = useState(true)
    

    const questoes = [
        {
            questao: '1- Qual das opções abaixo é uma forma correta de escrever uma condicional "if" em Python?', respostas: ['if x > 0 then print("x é positivo")', 'if x > 0: print("x é positivo")', 'if x > 0 print("x é positivo")', 'if (x > 0): print("x é positivo")'], respostacorreta: 'if x > 0: print("x é positivo")'
        },
        {
            questao: '2- Qual das opções abaixo é uma forma correta de escrever uma condicional "if-else" em Python?', respostas: ['if x > 0:print("x é positivo") else:print("x é negativo ou zero")', 'if x > 0:print("x é positivo") else print("x é negativo ou zero")', 'if x > 0 print("x é positivo") else print("x é negativo ou zero")', 'if (x > 0) print("x é positivo") else print("x é negativo ou zero")'], respostacorreta: 'if x > 0:print("x é positivo") else:print("x é negativo ou zero")'
        },
        {
            questao: '3- Qual das opções abaixo é uma forma correta de escrever uma condicional "if-elif-else" em Python?', respostas: ['if x > 0:print("x é positivo") elif x < 0:print("x é negativo") else:print("x é zero")', 'if x > 0 print("x é positivo") elif x < 0 print("x é negativo") else print("x é zero")', 'if (x > 0) print("x é positivo") elif (x < 0) print("x é negativo") else print("x é zero")'], respostacorreta: 'if x > 0:print("x é positivo") elif x < 0:print("x é negativo") else:print("x é zero")'
        },
        {
            questao: '4- Quais são as palavras-chave usadas para criar condicionais em Python?', respostas: ['if, else e else if', 'if, elif if e else', 'if, elif e else', 'if, elif e else if'], respostacorreta: 'if, elif e else'
        },
        {
            questao: '5- Qual a palavra chave fundamental em uma condicional?', respostas: ['if', 'else', 'elif', 'else if'], respostacorreta: 'if'
        },
        {
            questao: '6- É possível utilizar a condicional "if" sem a palavra-chave "else" em Python?', respostas: ['Verdadeiro', 'Depende', 'Falso', 'Não Informado'], respostacorreta: 'Verdadeiro'
        },
        {
            questao: '7- É possível utilizar a condicional "if" com expressões lógicas compostas em Python?', respostas: ['Verdadeiro', 'Depende', 'Falso', 'Não Informado'], respostacorreta: 'Verdadeiro'
        },
        {
            questao: '8- Qual comando se encaixa em: {comando} x > 0:print("positivo") else:print("negativo ou nulo")?', respostas: ['if', 'elif', 'else', 'Nenhuma da alternativas'], respostacorreta: 'if'
        },
        {
            questao: '9- O que é uma condicional "if" em Python?', respostas: ['Comando de decisão que executa um código se uma condição for verdadeira e o if seja falso', 'Comando de decisão que executa um código se uma condição for falsa', 'Comando de decisão que executa um código se as condições anteriores forem falsas', 'Comando de decisão que executa um código se uma condição for verdadeira'], respostacorreta: 'Comando de decisão que executa um código se uma condição for verdadeira'
        },
        {
            questao: '10- Tendo x = 0, onde if x > 0: print("Positivo") elif x == 0: print("Neutro") else: print("Negativo")', respostas: ['Positivo', 'Neutro', 'Negativo', 'Não exibirá nada'], respostacorreta: 'Neutro'
        },
        { 
            questao: '', respostas: ['', '', ''], respostacorreta: ''
        }
    ]

    useEffect(() => {
        // Executar algum código aqui assim que a tela abre
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential = teste;
        // Obter o ID do usuário logado
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
        set(ref(db, `users/${userID}/modulo1/respostaexercicios/`), {
            exercicio01: questoes[0].respostacorreta,
            exercicio02: questoes[1].respostacorreta,
            exercicio03: questoes[2].respostacorreta,
            exercicio04: questoes[3].respostacorreta,
            exercicio05: questoes[4].respostacorreta,
        }).then(() => {

        })
            .catch((error) => {
                alert(error)
            });
    }

    const correcaoresposta = (questaoselecionada) => {
        if (questaoselecionada == questoes[numeroquestaoatual].respostacorreta) {
            setPontuacao(pontuacao + 1)
            mensagemCorreta()
            set(ref(db, `users/${userID}/modulo1/exercicios`), {
                pontuacao: pontuacao + 1

            }).then(() => {
                
            }).catch((error) => {
                alert(error)
            });
        }else{
            mensagemErrada();
        };

        setnumeroquestaoatual(numeroquestaoatual + 1);
        



        if (numeroquestaoatual === questoes.length - 2) {
            setMostrarquestoes(false)
            armazenarRespostaCorreta()
            // Mostrar a pontuação final
            navigation.navigate('TelaPontuacaoModulo01')


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
}
export default TelaExercicio
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

