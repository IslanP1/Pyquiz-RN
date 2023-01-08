import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { get, ref, set } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { db } from '../../../../../firebase'
import { useNavigation } from '@react-navigation/native'
import * as Expo from 'expo-av';


const TelaExercicio = () => {
    const navigation = useNavigation()
    const [userID, setUserID] = useState(null);
    const [pontuacao, setPontuacao] = useState(0);
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0);
    const [mostrarquestoes, setMostrarquestoes] = useState(true)
    

    const questoes = [
        {
            questao: '1- O while, assim como o for é uma:', respostas: ['Variável', 'Estrutura de repetição', ' Condição', 'Contraposição do if'], respostacorreta: 'Estrutura de repetição'
        },
        {
            questao: '2 - Para que é usado o while?', respostas: ['Para executar um comando enquanto uma condição for verdadeira', 'Encerrar um loop', 'Criar um loop quando uma condição for falsa', 'Para separar um conteúdo de uma lista'], respostacorreta: 'Para executar um comando enquanto uma condição for verdadeira'
        },
        {
            questao: '3- Qual o auxiliador que serve para finalizar o loop do while?', respostas: ['Continue', 'Loop', 'Break', 'Stop'], respostacorreta: 'Break'
        },
        {
            questao: '4- Qual é um erro muito comum com o while?', respostas: ['Resetar o loop', 'Criar um loop infinito', 'Parar o loop', 'Voltar 22 minutos no tempo'], respostacorreta: 'Criar um loop infinito'
        },
        {
            questao: '5- Qual dentre as afirmações a seguir é correta?', respostas: ['O while nunca pode ser usado sem um if ', 'Não é possível usar o while se existir um for no código', 'O while server para criar uma instância do for', 'O while é uma estrutura de repetição assim como o for'], respostacorreta: 'O while é uma estrutura de repetição assim como o for'
        },
        {
            questao: <Text><Text>6- Qual o erro deste código?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>i = 6{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>while i == 6:{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'     '}print( 'O loop está ativo' ){'\n'}</Text></Text></Text> , respostas: ['A variável i não foi definida corretamente', 'A indentação está incorreta', 'O código está correto', 'Ele criará um loop infinito'], respostacorreta: 'Ele criará um loop infinito'
        },
        {
            questao: <Text><Text>7- O que este código está fazendo?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>i = 6{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>while i {'<'} 6:{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'     '}print( i ){'\n'}</Text></Text><Text style={styles.terminal}><Text style={styles.messageTerminal}>{'      '}i+=1{'\n'}</Text></Text></Text>, respostas: ['Está printando todos os números enquanto i é maior que 6', 'Não está fazendo nada pois há um erro', 'Está printando todos os números enquanto i é menor que 6', 'Está printando o número 6 sem parar'], respostacorreta: 'Está printando todos os números enquanto i é menor que 6'
        },
        {
            questao: '8- Qual das alternativas abaixo é uma sintaxe correta para utilizar o laço while em Python?', respostas: ['while x < 5:', 'while x < 5 ', 'while for in(x < 5):', 'while x < 5;'], respostacorreta: 'while x < 5:'
        },
        {
            questao:'9- Qual das alternativas está errada?', respostas: ['while i == True:', 'wile item < 6:', 'while x == 5:', 'while loop == True:'], respostacorreta: 'wile item < 6:'
        },
        {
            questao: <Text><Text>10- Qual estrutura entrará neste while para que a saida seja:{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>i = 1{'\n'}</Text></Text><Text style={styles.terminal}><Text style={styles.messageTerminal}>_________________{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'   '}print( i ){'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>{'   '}i += 1{'\n'}</Text></Text><Text style={styles.terminal}><Text style={styles.messageTerminal}>{'\n'}saída de dados: 1,2,3,4,5{'\n'}</Text></Text></Text>, respostas: ['while i < 6:', 'while i < 6', 'while i < 5:', 'while i > 5:'], respostacorreta: 'while i < 6:'
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
        set(ref(db, `users/${userID}/modulo5/respostaexercicios/`), {
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
            set(ref(db, `users/${userID}/modulo5/exercicios`), {
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
            navigation.navigate('TelaPontuacaoModulo05')


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

