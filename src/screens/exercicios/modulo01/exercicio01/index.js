import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ref, set, getDatabase, onValue } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, AuthCredential, Auth } from "firebase/auth";
import { db } from '../../../../../firebase'


const TelaExercicio = () => {
    const [userID, setUserID] = useState(null);

    function teste(){
        let a = getAuth()
        const teste = a.currentUser;
        const userCredential =  teste;

        // Obter o ID do usuário logado
        const id = userCredential.uid;
        alert(id)
        setUserID(id);
        
    }


    function add() {
        set(ref(db, `users/${userID}`), {
            name: 'John Doe',
            email: 'johndoe@example.com'
        }).then(() => {
            alert("Guardei")
            mostrar()
        }).catch((error) => {
            alert(error)
        });
    }

   
    return (
        <View>
            <Button title="Teste" onPress={teste} />
            <Button title="Add" onPress={add} />
        </View>
    );
};


export default TelaExercicio
const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        textAlign: 'center',
    },
})





