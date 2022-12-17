import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TelaCreditos = () => {
    return (
        <View>
            <View>
                <Text>Destinação: </Text>
                <Text>Aplicativo desenvolvido para fins acadêmicos como modo de estágio para os alunos iniciantes
                    em programação residentes do IFPB - Instituto Federal da Paraíba (Campus Cajazeiras) </Text>
            </View>
            <View>
                <Text>Desenvolvedores: </Text>
                <View>
                    <Text>Islan Pereira</Text>
                    <Text>Redes sociais: </Text>
                    <Text>Github: IslanP1</Text>
                    <Text>Instagram: XXXXXX</Text>
                </View>
                <View>
                    <Text>Gustavo Pereira Marcena</Text>
                    <Text>Redes sociais: </Text>
                    <Text>Github: XXXXXXXX</Text>
                    <Text>Instagram: XXXXXX</Text>
                </View>
                <View>
                    <Text>Luiz Fernando</Text>
                    <Text>Redes sociais: </Text>
                    <Text>Github: XXXXXXXXX</Text>
                    <Text>Instagram: XXXXXX</Text>
                </View>
            </View>
            <View>
                <Text>Github do projeto: XXXXXXXXXXXXXX</Text>
            </View>
        </View>
    )
}

export default TelaCreditos

const styles = StyleSheet.create({
    
})