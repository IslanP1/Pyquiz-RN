import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { get, ref, set } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { db } from '../../../../../firebase'
import { useNavigation } from '@react-navigation/native'

//import database from '../../../../../perguntas';

const TelaExercicio = () => {
    const navigation = useNavigation()
    const [userID, setUserID] = useState(null);
    const [pontuacao, setPontuacao] = useState(0)
    const [numeroquestaoatual, setnumeroquestaoatual] = useState(0)

    const questoes = [
        {
            questao: '1 Qual a função do print em python?', respostas: ['Imprimir mensagens', 'Permitir que o usuario escreva uma mensagem', 'Não faz nada'], respostacorreta: 'Imprimir mensagens'
        },
        {
            questao: '2 Qual codigo está correto?', respostas: ['print("OLA MUNDO!")', 'Pint(OLA MUNDO)', 'Exibir OLA MUNDO'], respostacorreta: 'print("OLA MUNDO!")'
        },
        {
            questao: '3 Qual comando encaixa em: {}("Olá mundo")', respostas: ['Input', 'Print', 'Mostrar'], respostacorreta: 'Print'
        },
        {
            questao: '4 Qual comando encaixa em: {}("Olá mundo")', respostas: ['Input', 'Print', 'Mostrar'], respostacorreta: 'Print'
        },
        {
            questao: '5 Qual comando encaixa em: {}("Olá mundo")', respostas: ['Input', 'Print', 'Mostrar'], respostacorreta: 'Print'
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
    

    function armazenarRespostaCorreta() {
        set(ref(db, `users/${userID}/modulo1/respostaexercicios/`), {
            exercicio01: questoes[0].respostacorreta,
            exercicio02: questoes[1].respostacorreta,
            exercicio03: questoes[2].respostacorreta,
            exercicio04: questoes[3].respostacorreta,
            exercicio05: questoes[4].respostacorreta,
        }).then(() => {
            alert("Guardei")
        })
            .catch((error) => {
                alert(error)
            });
    }

    const correcaoresposta = (questaoselecionada) => {
        if (questaoselecionada == questoes[numeroquestaoatual].respostacorreta) {
            setPontuacao(pontuacao + 1)
            set(ref(db, `users/${userID}/modulo1/exercicios`), {
                pontuacao: pontuacao + 1
            }).then(() => {

            }).catch((error) => {
                alert(error)
            });
        };

        setnumeroquestaoatual(numeroquestaoatual + 1);


        if (numeroquestaoatual === questoes.length - 2) {
            armazenarRespostaCorreta()
            // Mostrar a pontuação final
            navigation.navigate('TelaPontuacaoModulo01')


        }
    };

    return (
        <View>
            <Text>{questoes[numeroquestaoatual].questao}</Text>
            {questoes[numeroquestaoatual].respostas.map((resposta) => (
                <Button title={resposta} onPress={() => correcaoresposta(resposta)} />))}
            <Text>Acertos: {pontuacao}</Text>

        </View>

    )


};

export default TelaExercicio
const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        textAlign: 'center',
    },
})


// function verificarRespostaCorreta(){
//     alert(alternativacorreta);
// }

// function checar() {

//     // if (resposta01 == 'Imprimir mensagens' || resposta01 == 'print("OLA MUNDO!)') {
//     //     setMensagem('Acertou')
//     // } else {
//     //     setMensagem('Errou')
//     // }
// }

// const questoes = [
//     {
//         questao: 'Qual a função do print em python?', respostas: ['Imprimir mensagens', 'Permitir que o usuario escreva uma mensagem', 'Não faz nada'], respostacorreta: 'Imprimir mensagens'
//     },
//     {
//         questao: 'Qual codigo está correto?', respostas: ['print("OLA MUNDO!")', 'Pint(OLA MUNDO)', 'Exibir OLA MUNDO'], respostacorreta: 'print("OLA MUNDO!")'
//     },
//     {
//         questao: 'Qual comando encaixa em: {}("Olá mundo")', respostas: ['Input', 'Print', 'Mostrar'], respostacorreta: 'Print'
//     },
//     {
//         questao: 'Qual comando encaixa em: {}("Olá mundo")', respostas: ['Input', 'Print', 'Mostrar'], respostacorreta: 'Print'
//     }
// ]

// function teste() {
//     let a = getAuth()
//     const teste = a.currentUser;
//     const userCredential = teste;
//     // Obter o ID do usuário logado
//     const id = userCredential.uid;
//     alert(id)
//     setUserID(id);
// }

// function correcaoresposta(questaoselecionada) {
//     if (questaoselecionada === questoes[numeroquestaoatual].respostacorreta) {
//         setPontuacao(pontuacao + 1);
//         set(ref(db, `users/${userID}/modulo1/exercicio0${numeroquestaoatual + 1}`), {
//             respostacorreta: questoes[numeroquestaoatual].respostacorreta
//         }).then(() => {
//             alert("Guardei")
//         }).catch((error) => {
//             alert(error)
//         });
//     };
//     setnumeroquestaoatual(numeroquestaoatual + 1);
// }


// function buscarResposta() {
//     get(ref(db, `users/${userID}/modulo1/exercicio0${numeroquestaoatual + 1}`))
//         .then((snapshot) => {
//             const data = snapshot.val()
//             // Atribui a resposta a variável
//             setRespostaCorreta(data.respostacorreta);
//         }).catch((error) => {
//             // Em caso de erro, mostra a mensagem de erro no console
//             alert(error);
//         });
// }

// function saber(){
//     alert(respostaCorreta);
// }


///////////////////////////////////////////////////////////////////////Islan////////////////////////////////////////////////////////////
    // const [userID, setUserID] = useState(null);
    // // const [pontuacao, setPontuacao] = useState(0)
    // // const [numeroquestaoatual, setnumeroquestaoatual] = useState(0)
    // // const [respostaCorreta, setRespostaCorreta] = useState(null);

    // const [pergunta, setPergunta] = useState(null)
    // const [resposta01, setResposta01] = useState(null)
    // const [resposta02, setResposta02] = useState(null)
    // const [mensagem, setMensagem] = useState(null)
    // const [alternativacorreta, setAlternativaCorreta] = useState(null)


    // function teste() {
    //     let a = getAuth()
    //     const teste = a.currentUser;
    //     const userCredential = teste;
    //     // Obter o ID do usuário logado
    //     const id = userCredential.uid;
    //     alert(id)
    //     setUserID(id);
    // }

    // function add() {
    //     set(ref(db, `users/${userID}/modulo1`), {
    //         exercicio01: 'Qual a função do print em python?',
    //         respostacorretaExe01: 'Imprimir mensagens',
    //         respostaerradaExe01: 'Permitir que o usuario escreva uma mensagem',
    //         exercicio02: 'Qual codigo está correto?',
    //         respostacorretaExe02: 'print("OLA MUNDO!)',
    //         respostaerradaExe02: 'Exibir OLA MUNDO',
    //     }).then(() => {
    //         alert("Guardei")
    //     })
    //         .catch((error) => {
    //             alert(error)
    //         });
    // }

    // function buscarPerguntaeRespostaM101() {
    //     get(ref(db, `users/${userID}/modulo1`))
    //         .then((snapshot) => {
    //             const data = snapshot.val()
    //             // Atribui a resposta a variável
    //             setPergunta(data.exercicio01);
    //             setResposta01(data.respostacorretaExe01);
    //             setResposta02(data.respostaerradaExe01);
    //             setAlternativaCorreta(data.respostacorretaExe01);

    //         }).catch((error) => {
    //             // Em caso de erro, mostra a mensagem de erro no console
    //             alert(error);
    //         });
    // }

    // function buscarPerguntaeRespostaM102() {
    //     get(ref(db, `users/${userID}/modulo1`))
    //         .then((snapshot) => {
    //             const data = snapshot.val()
    //             // Atribui a resposta a variável
    //             setPergunta(data.exercicio02);
    //             setResposta01(data.respostacorretaExe02);
    //             setResposta02(data.respostaerradaExe02)
    //             setAlternativaCorreta(data.respostacorretaExe02);


    //         }).catch((error) => {
    //             // Em caso de erro, mostra a mensagem de erro no console
    //             alert(error);
    //         });
    // }


    // function verificarResposta(respostaDoUsuario) {
    //     // Compara a resposta do usuário com a resposta correta
    //     if (respostaDoUsuario[0] === alternativacorreta || respostaDoUsuario[1] === alternativacorreta) {

    //         // Se forem iguais, a resposta está correta
    //         alert("Resposta correta!");
    //     } else {
    //         // Se forem diferentes, a resposta está incorreta
    //         alert("Resposta incorreta :(");
    //     }
    // }


    // return (
    //     <View>
    //         {/* <Text>{questoes[numeroquestaoatual].questao}</Text>
    //         {questoes[numeroquestaoatual].respostas.map((resposta) => (
    //             <Button title={resposta} onPress={() => correcaoresposta(resposta)} />))} */}
    //         <Text>{pergunta}</Text>
    //         <br></br>
    //         <Button title={resposta01} onPress={() => verificarResposta(['Imprimir mensagens', 'print("OLA MUNDO!)'])} ></Button>
    //         <Text>{mensagem}</Text>
    //         <br></br>
    //         <Button title={resposta02} onPress={() => verificarResposta(['Permitir que o usuario escreva uma mensagem', 'Exibir OLA MUNDO'])} ></Button>
    //         <br></br>
    //         <br></br>
    //         <Button title='teste' onPress={() => teste()}></Button>
    //         <Button title='add' onPress={() => add()}></Button>
    //         <Button title='Tela 01' onPress={() => buscarPerguntaeRespostaM101()}></Button>
    //         <Button title='Tela 02' onPress={() => buscarPerguntaeRespostaM102()}></Button>




    //         {/* <Text>Acertos: {pontuacao}</Text>
    //         <Text>{respostaCorreta}</Text> */}
    //     </View>

    // )
    ///////////////////////////////////////////////////////////////////////Islan////////////////////////////////////////////////////////////
