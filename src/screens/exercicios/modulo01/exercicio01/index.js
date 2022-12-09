import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ref, set, getDatabase, onValue, Database } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, AuthCredential, Auth } from "firebase/auth";
import { db } from '../../../../../firebase'

const TelaExercicio = () => {
    const [userID, setUserID] = useState(null);
    const [mensagemdeacerto, setMensagemDeAcerto] = useState(null);

    function teste() {
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential = teste;
        // Obter o ID do usuário logado
        const id = userCredential.uid;
        alert(id)
        setUserID(id);
    }

    function verificar(id) {
        if (id == 'print') {
            setMensagemDeAcerto('Acertou');
            teste()
        } else {
            setMensagemDeAcerto('Errou');
        }
    }

    function add() {
        set(ref(db, `users/${userID}/modulo1/exercicio01`), {
            mensagem: 'acertou'
        }).then(() => {
            alert("Guardei")
        }).catch((error) => {
            alert(error)
        });
    }

    return (
        <View>
            <Text>Clique no botão que encaixe na seguinte estrutura:</Text>
            <Text>Exibir na tela um código</Text>
            <Button title="print" onPress={() => verificar('print')}></Button>
            <Button title="input" onPress={() => verificar('input')}></Button>
            <Button title="exibir" onPress={() => verificar('exibir')}></Button>
            <Button title="printar" onPress={() => verificar('printar')}></Button>

            <Text style={styles.texto}>{mensagemdeacerto}</Text>

            <Button title="Prosseguir" onPress={() => add()}></Button>

        </View >
    );
};

export default TelaExercicio
const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        textAlign: 'center',
    },
})
