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
import TelaExercicio from '../../exercicios/modulo01/exercicio01';


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
            <Text style={styles.title}>Hello, Python!</Text>
            <View style = {styles.containerLogo}>
                <Image source={require("../../../../assets/python.png")} style={{ width: 200, height: 200 }}/>
            </View>
            <View>
                <Text style={styles.subtitle}>Bem vindo ao Python</Text>
                <Text style={styles.message}>
                    São várias as características do Python que o tornam uma linguagem tão promissora e, que atrai a cada dia, mais desenvolvedores. A seguir, foram elucidados alguma dessas características e junto, uma breve descrição.</Text>
                <Text style={styles.message}>
                    <Text style={styles.messageDestaque}> 1. Fácil de aprender: </Text>
                    O Python é uma linguagem fácil de ser aprendida e poderosa para trabalharmos. A mesma possui uma sintaxe limpa e clara, como também, contém um conjunto de bibliotecas estáveis e bem estruturadas.</Text>
                <Text style={styles.message}>
                    <Text style={styles.messageDestaque}> 2. Fácil leitura e compreensão: </Text>
                    A sintaxe da linguagem é minimalista, isso é, mantém somente o necessário, o que torna o código escrito, muitas vezes, a um texto em Inglês.</Text>
                <Text style={styles.message}>
                    <Text style={styles.messageDestaque}> 3. Fácil manutenção: </Text>
                    Em decorrência da simplicidade sintática e da excelente estruturação das bibliotecas, a manutenção de códigos, seja aquele que desenvolvemos ou mesmo de terceiros, muito mais fácil e compreensível.</Text>
                <Text style={styles.message}>
                    <Text style={styles.messageDestaque}> 4. Multiplataforma: </Text>
                    O interpretador do Python é escrito com a Linguagem C e C++, assim, o mesmo pode ser portado a todas as plataformas que possuam compiladores para a linguagem. Tendo em vista que o C++ é a linguagem mais difundida e a base de praticamente toda a informática, temos compiladores nativos ou portados para quase todas as plataformas existentes.</Text>
                <Text style={styles.message}>
                    <Text style={styles.messageDestaque}>  5. Modo interativo: </Text>
                    Sendo o Python uma linguagem interpretada, foi possível o desenvolvimento de ferramentas interativas, isto é, ferramentas majoritariamente em linha de comando, onde podemos executar instruções e nalisar a saída.</Text>
                <Text style={styles.message}>Hoje Python está presente nas áreas de Desenvolvimento Web, Inteligência Artificial, Computação Gráfica, Big Data, Ciência de Dados e Muito Mais!</Text>
                <Text style={styles.message}>Os tópicos aqui elucidados estão longe de esgotar os recursos do Python! Por essa razão, continuaremos o nosso estudo sobre as principais características e recursos da linguagem nas próximas seções.</Text>
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

