import { View, Text, Button, BackHandler, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native"
import { db } from '../../../../../../firebase';
import { get, ref, set, update } from 'firebase/database'
import react from 'react';


const TelaPontuacaoModulo01 = () => {

    const [userID, setUserID] = useState(null);
    const [respostaCorreta01, setRespostaCorreta01] = useState(null);
    const [respostaCorreta02, setRespostaCorreta02] = useState(null);
    const [respostaCorreta03, setRespostaCorreta03] = useState(null);
    const [respostaCorreta04, setRespostaCorreta04] = useState(null);
    const [respostaCorreta05, setRespostaCorreta05] = useState(null);
    const [pontuacao, setPontuacao] = useState(null);
    const navigation = useNavigation()

    useEffect(() => {
        // Executar algum código aqui assim que a tela abre
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential = teste;
        // Obter o ID do usuário logado
        const id = userCredential.uid;
        setUserID(id);

        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);

    }, [buscarRespostas(), buscarPontuacao() ]);

    function backAction() {
        Alert.alert("Atenção!", "Tem certeza que deseja sair?", [
            {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "SIM",
                onPress: () => BackHandler.addEventListener(navigation.navigate('TelaModulos'))
            }
        ]);
        return true;
    };


    function buscarRespostas() {
        get(ref(db, `users/${userID}/modulo1/respostaexercicios`))
            .then((snapshot) => {
                const data = snapshot.val()
                // Atribui a resposta a variável
                setRespostaCorreta01(data.exercicio01);
                setRespostaCorreta02(data.exercicio02);
                setRespostaCorreta03(data.exercicio03);
                setRespostaCorreta04(data.exercicio04);
                setRespostaCorreta05(data.exercicio05);

            }).catch((error) => {
                // Em caso de erro, mostra a mensagem de erro no console
                
            });
    }

    function buscarPontuacao() {
        get(ref(db, `users/${userID}/modulo1/exercicios`))
            .then((snapshot) => {
                const data = snapshot.val()
                // Atribui a resposta a variável
                setPontuacao(data.pontuacao);
                if (data.pontuacao == 5){
                    update(ref(db, `users/${userID}/pontuacaogeral`), {
                        pontuacaomodulo1: data.pontuacao,
                           
                    }).then(() => {
                    })
                        .catch((error) => {
                            alert(error)
                    });
                    
                }
            }).catch((error) => {
                // Em caso de erro, mostra a mensagem de erro no console
                
            });
    }
    
    

    return (
        <View>
            <Text>Respostas dos exercícios: </Text>
            <Text>Primeiro exercício: {respostaCorreta01}</Text>
            <Text>Segundo exercício: {respostaCorreta02}</Text>
            <Text>Terceiro exercício: {respostaCorreta03}</Text>
            <Text>Quarto exercício: {respostaCorreta04}</Text>
            <Text>Quinto exercício: {respostaCorreta05}</Text>
            <Text>Pontuação obtida:</Text>
            <Text>{pontuacao}</Text>
            <Button title="Voltar" onPress={() => navigation.navigate('TelaInicial')}></Button>
        </View>
    )
}

export default TelaPontuacaoModulo01