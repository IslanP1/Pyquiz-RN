import { 
    StyleSheet, 
    Text, 
    View, 
    Dimensions, 
    ScrollView, 
    Animated,
    Image, 
    BackHandler} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth } from "firebase/auth";
import TelaExercicio from '../../exercicios/modulo2/exercicio01';


const {width, height} = Dimensions.get('window');


const Teoria = () => {

    const navegation = useNavigation()

    useEffect(() => {
    
        BackHandler.addEventListener("hardwareBackPress", telaModulos);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", telaModulos);

      }, []);
    
      function telaModulos() {
        navegation.navigate('TelaModulos')
        return true
      };
    
    return(
        <ScrollView style={[styles.container, {backgroundColor:'#000008'}]} scrollsToTop={true}>
            <Text style={styles.title}>Condições em Python</Text>
            <View>
                <Text style={styles.message}>
                    As condições em Python são estruturas que permitem que o programa execute determinadas ações de acordo com o resultado de uma expressão lógica, ou seja, um determinado código irá executar-se caso uma condição seja verdadeira ou falsa. Elas são usadas na estrutura de controle de fluxo "if" e podem ser combinadas com outras estruturas de controle de fluxo, como "else" e "elif" - abreviação de "else if".
                </Text>
                <Text style={styles.message}>
                    Aqui está um exemplo simples de como usar uma condição em Python:
                </Text>
                <Text style={[styles.message, {marginBottom: '7%'}]}>
                    Aqui está um exemplo simples de como usar uma condição em Python:
                </Text>
                
                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>if </Text>
                        True
                        <Text style={[styles.messageTerminal, {color: '#fff'}]}>:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { marginHorizontal:30 }]}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "x é verdadeiro!"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                </View>
                <View style={[styles.terminal, {backgroundColor: '#fff', marginTop: '2%'}]}>
                    <Text style={[styles.messageTerminal, {color: '#000000'}]}>
                        x é verdadeiro!
                    </Text>
                </View>

                <Text style={styles.subtitle}>If, elif e else</Text>
                <Text style={styles.message}>
                    A palavra-chave "if" em Python nos permite instruir o computador a realizar uma determinada ação caso uma condição seja verdadeira. Verbalmente, podemos imaginar que estamos informando o computador:    
                </Text>
                <Text style={styles.message}>
                    "Se caso isso aconteça, execute essa ação". Podemos então expandir a idéia com declarações elif e else, o que nos permite contar ao computador:
                </Text>
                <Text style={styles.message}>
                    Podemos então expandir a idéia com declarações elif, no qual é usada para implementar uma condição adicional a um bloco de código que já possui uma condição "if". Dessa forma:
                </Text>
                <Text style={styles.message}>
                    "Se a primeira condição não acontecer e se isso acontecer, execute alguma outra ação".
                </Text>
                <Text style={styles.message}>
                    Já o else é usada para especificar as ações a serem executadas caso nenhuma das condições anteriores tenha sido verdadeira. Assim:
                </Text>
                <Text style={styles.message}>
                    "Caso contrário, se nenhum dos casos acima aconteceu, execute esta ação". Vamos avançar e ver o formato de sintaxe para termos uma idéia melhor disso.
                </Text>
                <Text style={styles.subtitle}>Exemplos</Text>
                <Text style={[styles.message, {marginBottom: '7%'}]}>
                    Vamos ver um exemplo rápido disso:
                </Text>
                
                <View style={[styles.terminal, {height: 150}]}>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>if </Text>
                        x {'>'} 0
                        <Text style={[styles.messageTerminal, {color: '#fff'}]}>:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { marginHorizontal:30 }]}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "x é positivo"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>elif </Text>
                        x {'<'} 0
                        <Text style={[styles.messageTerminal, {color: '#fff'}]}>:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { marginHorizontal:30 }]}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "x é negativo"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>else: </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { marginHorizontal:30 }]}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "x é neutro"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                </View>

                <Text style={styles.subtitle}>Múltiplos ramos</Text>
                <Text style={styles.message}>
                    Vamos ver de forma mais completa de quão longe if, elif e else podem nos levar! Nós escrevemos isso em uma estrutura aninhada. Tome nota de como o if, elif e else se alinham no código. Isso pode ajudá-lo a ver o que se relaciona com o elif ou outras afirmações.
                </Text>
                <Text style={[styles.message, {marginBottom: '7%'}]}>
                    Vamos reintroduzir uma sintaxe de comparação para o Python.
                </Text>
            

                <View style={[styles.terminal, {height: 150}]}>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>person </Text>
                        =
                        <Text style={[styles.messageTerminal, {color: '#fff'}]}> 'Luiz'</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>if </Text>
                        person == 'Luiz'
                        <Text style={[styles.messageTerminal, {color: '#fff'}]}>:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { marginHorizontal:30 }]}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "Olá, Luiz!"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>elif </Text>
                        person == 'Islan'
                        <Text style={[styles.messageTerminal, {color: '#fff'}]}>:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { marginHorizontal:30 }]}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "Olá, Islan!"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'blue'}]}>
                        <Text style={[styles.messageTerminal, {color: 'red'}]}>else: </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { marginHorizontal:30 }]}>
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>print(</Text>
                        "Olá, Marcena!"
                        <Text style={[styles.messageTerminal, {color: 'blue'}]}>)</Text>
                    </Text>
                </View>
                <View style={[styles.terminal, {backgroundColor: '#fff', marginTop: '2%'}]}>
                    <Text style={[styles.messageTerminal, {color: '#000000'}]}>
                        Olá, Luiz!
                    </Text>
                </View>

                <Text style={styles.message}>
                    Observe como as declarações if aninhadas são verificadas até que um booleano True faça com que o código aninhado abaixo seja executado. Você também deve notar que você pode colocar as declarações elif quando desejar antes de fechar com outra.
                </Text>
                
                <Text style={styles.message}>
                    Agora você já sabe como criar estruturas de decisão no seu código, isso será muito útil para quando o programa deve se comportar de determinada forma dependendo da situação.
                </Text>
            </View>
            
        </ScrollView>
    )
};


const TelaConteudo = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('teste@gmail.com')
    const [senha, setSenha] = useState('teste5620')
    const x = useRef(new Animated.Value(0)).current;

    const scrollRef = useRef();
    const [bloqRef, setBloqRef] = useState(true);

    const handlePress = () => {
        scrollRef.current.scrollTo({ x: 0, y: 0, animated: false });
      };

    const inputRange = `${Array(2).fill(0).map((_,idx) => [
        width*idx,
        width*(idx+0.5),
        width*(idx+1),
    ])}`.split(',').map((i)=>Number(i));

    const outputRange = `${Array(2).fill(0).map((_) => [1,1.5,1])}`.split(',').map((i)=>Number(i));
    return (
        <ScrollView style={styles.container} ref={scrollRef} scrollEnabled={bloqRef}>
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
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {useNativeDriver: true, listener: ({ nativeEvent }) => {
                    if (nativeEvent.contentOffset.x != 0) {
                      scrollRef.current.scrollTo({ x: 0, y: 0, animated: false},)
                      setBloqRef(false)}
                    else {
                        setBloqRef(true)
                    }}})}
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
        height: 50,
        borderRadius: 20,
        justifyContent: 'center'
    },
    messageTerminal: {
        color: '#fff',
        fontSize: 14,
        marginHorizontal: '5%',
    }
})

