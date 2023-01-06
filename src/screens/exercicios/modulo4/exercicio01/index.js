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
            questao: '1- O for é uma:', respostas: ['Estrutura de repetição', 'Nomenclatura de variáveis', ' Condição', 'Variável'], respostacorreta: 'Estrutura de repetição'
        },
        {
            questao: '2- Para que o for é usado?', respostas: ['Contar de 1 a 100', 'Criar um useState', 'Criar condições', 'Para percorrer uma sequência de dados'], respostacorreta: 'Para percorrer uma sequência de dados'
        },
        {
            questao: '3- Do que uma estrutura de repetição pode ser chamada?', respostas: ['Variável', 'Loop', 'Função', 'Gameobject'], respostacorreta: 'Loop'
        },
        {
            questao: '4- Se usarmos um for em um elemento com 3 valores, quantas vezes o for irá rodar?', respostas: ['1', '2', '3', '4'], respostacorreta: '3'
        },
        {
            questao: '5- O que acontece quando usamos um break no código?', respostas: ['O loop é parado', 'Nada', 'O resto do código é ignorado', 'Ocorre um erro'], respostacorreta: 'O loop é parado'
        },
        {
            questao: <Text><Text>6- qual estrutura encaixa na seguinte condição:{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>_________________:{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'   '}print(i){'\n'}{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>saída de dados: 0, 1{'\n'}</Text></Text></Text> , respostas: ['for i in range(2)', 'for i in range(1)', 'for i in range(3)', 'for i in range(0)'], respostacorreta: 'for i in range(2)'
        },
        {
            questao: '7- Qual a estrutura que permite ignorar o resto do código depois dela?', respostas: ['Stop', 'Break', '.gitignore', 'Continue'], respostacorreta: 'Continue'
        },
        {
            questao: <Text><Text>8- O que acontece se o existir um valor “Teclado” nesta lista do código?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>for i in lista:{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'     '}if i == “Teclado”:{'\n'}</Text> <Text style={styles.messageTerminal}>{'         '}break{'\n'}</Text></Text></Text>, respostas: ['O código abaixo será ignorado', 'Ocorrerá um erro', 'O loop será parado', 'Não acontecerá nada'], respostacorreta: 'O loop será parado'
        },
        {
            questao: <Text><Text>9- Qual o erro deste código?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>for i in lista{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'   '}print(i){'\n'}{'\n'}</Text></Text></Text>, respostas: ['A indentação está errada', 'Falta um elemento no for', 'Faltam aspas no print', 'O código está certo'], respostacorreta: 'Falta um elemento no for'
        },
        {
            questao: <Text><Text>10- Qual será a terceira saída do for?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>for i in “João”:{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'    '}print(i){'\n'}</Text></Text> </Text>, respostas: ['J', 'o', 'ã', 'a'], respostacorreta: 'ã'
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
        set(ref(db, `users/${userID}/modulo4/respostaexercicios/`), {
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

        })
            .catch((error) => {
                alert(error)
            });
    }

    const correcaoresposta = (questaoselecionada) => {
        if (questaoselecionada == questoes[numeroquestaoatual].respostacorreta) {
            setPontuacao(pontuacao + 1)
            mensagemCorreta()
            set(ref(db, `users/${userID}/modulo4/exercicios`), {
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
            navigation.navigate('TelaPontuacaoModulo04')


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
    },
    terminal: {
        
        marginHorizontal: '7%',
        width: '86%',
        paddingTop:10,
        paddingBottom:20,
        marginTop:20,
        borderRadius: 20,
        justifyContent: 'center',
        
               
        
    },
    messageTerminal: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: '5%',
        
        
        
    }
})

