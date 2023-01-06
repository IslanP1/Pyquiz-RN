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
    const [pontuacao, setPontuacao] = useState(0);
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0);
    const [mostrarquestoes, setMostrarquestoes] = useState(true)
    

    const questoes = [
        {
            questao: '1- Para que listas e tuplas servem?', respostas: ['Para gerar loops', 'São úteis para armazenar sequências de valores', 'Servem para checar condições', 'Servem para guardar informações em um banco de dados'], respostacorreta: 'São úteis para armazenar sequências de valores'
        },
        {
            questao: '2- Como posso criar uma lista vazia?', respostas: ['lista = [ ]', 'lista = ( )', 'lista = { }', 'lista = < >'], respostacorreta: 'lista = [ ]'
        },
        {
            questao: '3- Qual é o método usado para adicionar valores na lista?', respostas: ['some()', 'adicionar()', 'plus()', 'append()'], respostacorreta: 'append()'
        },
        {
            questao: '4- Qual a maior diferença das tuplas em relação as listas', respostas: ['Elas armazenam mais valores', 'Elas tem mais espaço nas variáveis', 'Os valores são imutáveis', 'Os valores armazenados são salvos'], respostacorreta: 'Os valores são imutáveis'
        },
        {
            questao: '5- Qual a sintaxe correta para criar uma tupla vazia?', respostas: ['tupla = ( )', 'tupla = [ ]', 'tupla = { }', 'tupla = <>'], respostacorreta: 'tupla = ( )'
        },
        {
            questao: <Text><Text>6- Qual o índice correto para acessar o valor ‘Prateleira’ desta lista:{'\n'}{'\n'}</Text> <Text style={{backgroundColor:'#121212'}}><Text style={styles.messageTerminal} >lista = [‘Porta’, ‘Prateleira’, ‘Janela’]</Text></Text></Text> , respostas: ['lista[2]', 'lista[0]', 'lista[3]', 'lista[1]'], respostacorreta: 'lista[1]'
        },
        {
            questao: <Text><Text>7- Após usar o remove() nesta lista, como ela ficará?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>lista = [1, 2, 3, 4, 5]{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>lista.remove(2){'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>print(lista){'\n'}</Text></Text></Text>, respostas: ['[1, 3, 4, 5]', '[ 2, 3, 4, 5 ]', '[ 1, 2, 4, 5 ]', 'Ocorrerá um erro'], respostacorreta: '[1, 3, 4, 5]'
        },
        {
            questao: <Text><Text>8- Como será a saída de dados após o append() e o remove()?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>lista = [1, 2, 3, 4, 5]{'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>lista.append(6){'\n'}</Text> <Text style={styles.messageTerminal}>lista.remove(0){'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>print(lista){'\n'}</Text></Text></Text>, respostas: ['[2, 3, 4, 5, 6]', '[1, 3, 4, 5, 6]', 'Irá ocorrer um erro', 'O código ficará igual'], respostacorreta: 'Irá ocorrer um erro'
        },
        {
            questao: <Text><Text>9- Qual o índice correto para acessar o valor “Teclado” nesta tupla?{'\n'}{'\n'}</Text> <Text ><Text style={styles.messageTerminal} >tupla = (“Mouse”, “Monitor”, “Cadeira”, “Teclado”)</Text></Text></Text>, respostas: ['tupla(3)', 'tupla[3]', ' tupla[4]', ' tupla(-1)'], respostacorreta: 'tupla[3]'
        },
        {
            questao: <Text><Text>10- Como será a saída de dados após adicionar uma tupla a outra?{'\n'}{'\n'}</Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>tupla1 = (1, 2, 3){'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>tupla2 = tupla1 + (2, 3){'\n'}</Text></Text> <Text style={styles.terminal}><Text style={styles.messageTerminal}>print(tupla2){'\n'}</Text></Text></Text>, respostas: ['(1, 2, 3, 2, 3)', '(1, 2, 3)', '(1, 2, 3, 3, 2)', 'Tuplas não armazenam valores repetidos'], respostacorreta: '(1, 2, 3, 2, 3)'
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
        set(ref(db, `users/${userID}/modulo3/respostaexercicios/`), {
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
            set(ref(db, `users/${userID}/modulo3/exercicios`), {
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
            navigation.navigate('TelaPontuacaoModulo03')


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

