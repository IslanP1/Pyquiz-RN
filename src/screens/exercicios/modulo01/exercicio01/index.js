import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ref, set } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { db } from '../../../../../firebase'
import { useNavigation } from '@react-navigation/native'
import * as Expo from 'expo-av';


const TelaExercicio = () => {
    const navigation = useNavigation()
    const [userID, setUserID] = useState(null);
    const [pontuacao, setPontuacao] = useState(0)
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0)
    const [mostrarquestoes, setMostrarquestoes] = useState(true)
    
    const questoes = [
        {
            questao: '1- Onde podemos encontrar a linguagem python na TI?', respostas: ['Desenvolvimento Web', 'Inteligência Artificial', 'Ciência de Dados', 'Todas as opções'], respostacorreta: 'Todas as opções'
        },
        {
            questao: '2- Qual das opções é característica do python?', respostas: ['Simplicidade', 'Linguagem de alto nível', 'Complexidade', 'Pouca documentação'], respostacorreta: 'Simplicidade'
        },
        {
            questao: '3- Qual um boa forma para aprender python?', respostas: ['Ler artigos, pois são mais completos que as documentações', 'Não fazer exercicios, apenas ler e assistir aulas', 'Não realizar cursos online, eles tomam muito tempo', 'Participar de grupos e comunidades de programação'], respostacorreta: 'Participar de grupos e comunidades de programação'
        },
        {
            questao: '4- Qual comando encaixa em: {}("Olá mundo")', respostas: ['input', 'print', 'mostrar', 'exibir'], respostacorreta: 'print'
        },
        {
            questao: '5- Quais os motivos para estudar python?', respostas: ['Complexidade / Versatilidade / Comunidade ativa / Bibliotecas', 'Simplicidade / Versatilidade / Comunidade ativa / Poucas bibliotecas', 'Simplicidade / Versatilidade / Comunidade saturada / Bibliotecas', 'Simplicidade / Versatilidade / Comunidade ativa / Bibliotecas'], respostacorreta: 'Simplicidade / Versatilidade / Comunidade ativa / Bibliotecas'
        },
        {
            questao: '6- Python é uma das mais populares e poderosas linguagens de programação?', respostas: ['Verdadeiro', 'Depende', 'Falso', 'Não Informado'], respostacorreta: 'Verdadeiro'
        },
        {
            questao: '7- Python corresponde a que tipo de linguagem?', respostas: ['Cascading Style Sheets', 'Marcação', 'Programação', 'Nenhuma da anteriores'], respostacorreta: 'Programação'
        },
        {
            questao: '8- Quais as características do python?', respostas: ['Difícil de aprender / Fácil leitura e compreensão / Fácil manutenção / Multiplataforma', 'Fácil de aprender / Fácil leitura e compreensão / Fácil manutenção / Multiplataforma', 'Fácil de aprender / Difícil leitura e compreensão / Fácil manutenção / Multiplataforma', 'Difícil de aprender / Difícil leitura e compreensão / Fácil manutenção / Multiplataforma'], respostacorreta: 'Fácil de aprender / Fácil leitura e compreensão / Fácil manutenção / Multiplataforma'
        },
        {
            questao: '9- O que o código print("Hello, Python") exibirá?', respostas: ['Olá, Python', 'Hello', 'Python', 'Hello, Python'], respostacorreta: 'Hello, Python'
        },
        {
            questao: '10- Python pode ser utilizado para construir programas complexos?', respostas: ['Depende', 'Verdadeiro', 'Falso', 'Não Informado'], respostacorreta: 'Verdadeiro'
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
        set(ref(db, `users/${userID}/modulo1/respostaexercicios/`), {
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
             
            });
        }else{
            mensagemErrada();
        };

        setnumeroquestaoatual(numeroquestaoatual + 1);
        
        if (numeroquestaoatual === questoes.length - 2) {
            setMostrarquestoes(false)
            armazenarRespostaCorreta()
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
};

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