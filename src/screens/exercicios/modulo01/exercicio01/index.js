import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { ref,set } from 'firebase/database'
import { db } from '../../../../../firebase'

const TelaExercicio = () => {
    const [mensagem, setMensagem] = useState('Marcena');
    const [mensagemdeacerto, setMensagemdeacerto] = useState('Teste');


    function Verificar(id){
       let msg = id
       setMensagem(msg) 
       return
    }


    function checar(){
        if (mensagem == 'print'){
            setMensagemdeacerto('Acertou')
            add();
        } else{
            setMensagemdeacerto('Errou') 
            add();
        }
    }

    function add() {
        set(ref(db, 'crud/' + mensagem), {
            mensagem: mensagem,
            mensagemdeacerto: mensagemdeacerto
        }).then(() => {
            alert("Guardei")
        })
        .catch((error) => {
            alert(error)
        });
    }
        

    return (
        <View>
            <Text>Clique no botão que encaixe na seguinte estrutura:</Text>
            <Button title="print" onPress={() => Verificar('print')}></Button>
            <Button title="input" onPress={() => Verificar('input')}></Button>
            <Button title="exibir" onPress={() => Verificar('exibir')}></Button>
            <Button title="printar" onPress={() => Verificar('printar')}></Button>
            <Text>.</Text>
            <Button title="Prosseguir" onPress={add}></Button>
            <Text style={styles.texto}>{mensagemdeacerto}</Text>
        </View>
  );
}

export default TelaExercicio
const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        textAlign:'center',
    },
})





