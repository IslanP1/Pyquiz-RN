import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    FlatList, 
    Dimensions, 
    SafeAreaView, 
    ScrollView, 
    Animated,
    Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import TelaExercicio from '../../exercicios/modulo01/exercicio01';

const {width, height} = Dimensions.get('window');


const Teoria = () => {
    
    return(
        <ScrollView style={[styles.container, {backgroundColor:'#000008'}]} scrollsToTop={true}>
            <Text style={styles.title}>If, Elif, Else</Text>
            <View>
                <Text style={styles.message}>
                    If em Python nos permite contar ao computador para executar ações alternativas com base em um determinado conjunto de resultados. Verbalmente, podemos imaginar que estamos informando o computador:    
                </Text>
                <Text>
                    "Se isso caso acontecer, execute alguma ação". Podemos então expandir a idéia com declarações elif e else, o que nos permite contar ao computador:
                </Text>
                <Text>
                    "Se esse caso acontecer, execute alguma ação. Caso contrário, se aquilo acontecer, execute alguma outra ação. Caso contrário, se nenhum dos casos acima aconteceu, execute esta ação". Vamos avançar e ver o formato de sintaxe para as instruções if para ter uma idéia melhor disso:
                </Text>
                <Text style={styles.subtitle}>Exemplos</Text>
                <Text style={[styles.message, {marginBottom: '7%'}]}>
                    Vamos ver um exemplo rápido disso:
                </Text>
                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>if </Text>
                        True
                        <Text style={[styles.messageTerminal, {color: '#fff'}]}>:</Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "x é verdadeiro!"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                </View>
                <View style={[styles.terminal, {backgroundColor: '#fff', marginBottom: '20%', marginTop: '2%'}]}>
                    <Text style={[styles.messageTerminal, {color: '#000000'}]}>
                        Hello, Python!
                    </Text>
                </View>
                <Text style={styles.message}>
                    Vamos adicionar outra lógica:
                </Text>
                <Text style={styles.subtitle}>Múltiplos ramos</Text>
                <Text style={styles.message}>
                    Vamos ver de forma mais completa de quão longe if, elif e else podem nos levar! Nós escrevemos isso em uma estrutura aninhada. Tome nota de como o if, elif e else se alinham no código. Isso pode ajudá-lo a ver o que se relaciona com o elif ou outras afirmações.
                </Text>
                <Text style={styles.message}>
                    Vamos reintroduzir uma sintaxe de comparação para o Python.
                </Text>
                <Text style={styles.message}>
                    Observe como as declarações if aninhadas são verificadas até que um booleano True faça com que o código aninhado abaixo seja executado. Você também deve notar que você pode colocar as declarações elif quando desejar antes de fechar com outra.
                </Text>
                <Text style={styles.message}>
                    Vamos criar dois exemplos mais simples para as afirmações if, elif e else:
                </Text>
                <Text style={styles.message}>
                    Agora você já sabe como criar estruturas de decisão no seu código, isso será muito útil para quando o programa deve se comportar de determinada forma dependendo da situação.
                </Text>
                <Text style={[styles.message, {marginBottom: '7%'}]}>Vamos agora escrever nosso primeiro código em Python, printando na tela "Hello, Python".</Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "Hello, Python!"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                </View>
                <View style={[styles.terminal, {backgroundColor: '#fff', marginBottom: '20%', marginTop: '2%'}]}>
                    <Text style={[styles.messageTerminal, {color: '#000000'}]}>
                        Hello, Python!
                    </Text>
                </View>
            </View>
            
        </ScrollView>
    )
};


const TelaConteudo = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('teste@gmail.com')
    const [senha, setSenha] = useState('teste5620')
    const x = useRef(new Animated.Value(0)).current;

    const inputRange = `${Array(2).fill(0).map((_,idx) => [
        width*idx,
        width*(idx+0.5),
        width*(idx+1),
    ])}`.split(',').map((i)=>Number(i));

    const outputRange = `${Array(2).fill(0).map((_) => [1,1.5,1])}`.split(',').map((i)=>Number(i));
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={[styles.subHeader]}>
                    <Text style={styles.txtHeader}>TEORIA</Text>
                    <Text style={styles.txtHeader}>EXERCÍCIOS</Text>
                </View>
                <Animated.View
                style={[
                    styles.scrollIndicator,
                    {
                        transform:[
                            {
                                translateX: x.interpolate({
                                    inputRange: [0, width],
                                    outputRange: [0, width/2],
                                })
                            },
                            {
                                scaleX: x.interpolate({
                                    inputRange,
                                    outputRange,
                                })
                            },
                        ]
                    }
                ]}
                />
                <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                scrollEventThrottle={16}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {
                    useNativeDriver: true,
                })}
                >   
                    <View style={styles.screen}>
                        <Teoria/>
                    </View>
                    <View style={styles.screen}>
                        <TelaExercicio/>
                    </View>
                </Animated.ScrollView>
            </View>
        </ScrollView>
    )
}

export default TelaConteudo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        marginHorizontal: 10,
        paddingTop:'5%',
    },
    subHeader: {
        marginTop: 5,
        backgroundColor: "#000000",
        height: 60,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 80,
    },
    txtHeader: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        marginHorizontal: 10,
        paddingTop:'10%',
        paddingVertical: '5%'
    },
    message: {
        color: '#fff',
        fontSize: 17,
        marginHorizontal: '5%',
        paddingTop:'5%'
    },
    messageDestaque: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold'
    },
    screen: {
        flex: 1,
        backgroundColor: '#000000',
        width,
    },
    scrollIndicator: {
        backgroundColor: '#5015bd',
        height: 4,
        width: width/2,
        borderRadius: 2,
        marginTop: -4,
    },
    containerLogo:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'10%'
    },
    terminal: {
        backgroundColor: '#121212',
        marginHorizontal: '7%',
        width: '86%',
        height: '3%',
        borderRadius: 20,
        justifyContent: 'center'
    },
    messageTerminal: {
        color: '#fff',
        fontSize: 14,
        marginHorizontal: '5%',
    }
})

