import { View, Text, TouchableOpacity, BackHandler, Alert, StyleSheet } from 'react-native'
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
        <View style={{backgroundColor:'#000000', flex:1}}>
            <Text style={styles.textog}>Respostas dos exercícios: </Text>
            <Text style={styles.textop}>Primeiro exercício: {respostaCorreta01}</Text>
            <Text style={styles.textop}>Segundo exercício: {respostaCorreta02}</Text>
            <Text style={styles.textop}>Terceiro exercício: {respostaCorreta03}</Text>
            <Text style={styles.textop}>Quarto exercício: {respostaCorreta04}</Text>
            <Text style={styles.textop}>Quinto exercício: {respostaCorreta05}</Text>
            <Text style={styles.textop}>Pontuação obtida:</Text>
            <Text style={styles.textop}>{pontuacao}</Text>
            <TouchableOpacity style={styles.botoes} title="Voltar" onPress={() => navigation.navigate('TelaInicial')}>
                <Text style={styles.textog}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TelaPontuacaoModulo01

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
      marginBottom: 60,
    },
    containerLogo:{
      flex:1,
      backgroundColor:'#000000',
      justifyContent:'center',
      alignItems:'center',
    },
    botoes: {
      backgroundColor:'#5015bd',
      height: 60,
      width: '75%',
      marginTop: '5%',
      borderRadius: 50,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems:'center',
    },
    textog: {
    color: '#fff',
    fontSize: 22,
    fontStyle: 'bold',
    },
    textop:{
        color:'#a8939ecc',
        fontSize:18,
    },
  })
  