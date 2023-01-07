import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Animated,
    BackHandler
} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import TelaExercicioModulo07 from '../../exercicios/modulo07/exercicio01';


const { width } = Dimensions.get('window');

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

    return (
        <ScrollView style={[styles.container, { backgroundColor: '#000008' }]} scrollsToTop={true}>
            <Text style={styles.title}>Funções</Text>
            <Text style={styles.message}>
                As funções são um recurso fundamental em qualquer linguagem de programação e Python não é diferente. Elas permitem que você divida seu código em pedaços mais gerenciáveis e reutilizáveis.
            </Text>
            <View>
                <Text style={styles.message}>
                    Uma função é definida com a palavra-chave def, seguida pelo nome da função e, entre parênteses, a lista de argumentos de entrada. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>def</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}> minha_funcao(arg1, arg2): </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código da função aqui
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}return</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{' '}resultado</Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Para chamar uma função, basta usar o seu nome seguido de parênteses e, dentro desses parênteses, os argumentos que a função precisa para executar. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>resultado =
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            {' '}minha_funcao
                            <Text style={styles.messageTerminal}>
                                (valor1, valor2)
                            </Text>
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Além disso, as funções podem ter argumentos opcionais, que são aqueles que possuem valores default e, portanto, não são obrigatórios na chamada da função. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>def</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}> minha_funcao(arg1, arg2, opcional1=valor_default1, opcional2=valor_default2): </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código da função aqui
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}return</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{' '}resultado</Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Na chamada dessa função, você pode passar os argumentos arg1 e arg2 obrigatoriamente, mas os argumentos opcionais opcional1 e opcional2 podem ser omitidos e, nesse caso, serão usados os valores default.
                </Text>
                <Text style={styles.message}>
                    As funções também podem ter um número variável de argumentos, usando o caractere * antes do nome do argumento. Nesse caso, todos os argumentos adicionais passados para a função são empacotados em uma tupla com o nome do argumento. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>def</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}> minha_funcao(arg1, *args): </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código da função aqui
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}return</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{' '}resultado</Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Na chamada dessa função, além do argumento arg1, que é obrigatório, você pode passar qualquer número de argumentos adicionais e eles serão empacotados em uma tupla chamada args.
                </Text>
                <Text style={styles.subtitle}>Observações importantes</Text>
                <Text style={styles.message}>
                    As funções podem retornar múltiplos valores usando a palavra-chave return, basta separá-los por vírgula. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>def</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}> minha_funcao(): </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código da função aqui
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}return</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{' '}valor1, valor2</Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        resultado1, resultado2 =
                        <Text style={{ color: '#f92672' }} >
                            {' '}minha_funcao()
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Você também pode usar o return sem argumentos para sair da função e retornar o controle para o chamador.
                </Text>
                <Text style={styles.message}>
                    As funções também podem ser usadas como objetos e atribuídas a variáveis, assim como qualquer outro tipo de dado. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>def</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}> minha_funcao(arg): </Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}return</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{' '}arg + 1</Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        func =
                        <Text style={{ color: '#f92672' }} >
                            {' '}minha_funcao
                        </Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        resultado =
                        <Text style={{ color: '#f92672' }} >
                            {' '}func
                        </Text>
                        <Text>(5)</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # resultado é 6
                    </Text>
                </View>
                <Text style={styles.message}>
                    As funções também podem ser passadas como argumentos para outras funções. Isso é conhecido como passagem de função como callback. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>def</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}> minha_funcao(callback, arg): </Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}return</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{' '}callback(arg)</Text>
                    </Text>
                    <Text style={styles.messageTerminal} />
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>def</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}> outra_funcao(arg): </Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}return</Text>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{' '}arg + 1</Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        resultado =
                        <Text style={{ color: '#f92672' }} >
                            {' '}minha_funcao
                        </Text>
                        <Text>
                            (outra_funcao, 5)
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # resultado é 6
                    </Text>
                </View>
                <Text style={styles.message}>
                    Além disso, é possível usar funções anônimas (chamadas de lambdas) para criar funções de forma rápida e simples quando elas só precisam ser usadas uma vez. Elas são criadas com a palavra-chave lambda, seguida pelos argumentos e a expressão a ser avaliada. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        resultado =
                        <Text style={{ color: '#f92672' }} >
                            {' '}minha_funcao
                        </Text>
                        <Text>
                            (
                            <Text style={{ color: '#f92672' }}>
                                lambda
                            </Text>
                            {' '}x: x + 1, 5
                            )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # resultado é 6
                    </Text>
                </View>
                <Text style={styles.messageTerminal} />
            </View>
        </ScrollView>
    )
};

const TelaModulo07 = () => {

    const x = useRef(new Animated.Value(0)).current;

    const scrollRef = useRef();
    const [bloqRef, setBloqRef] = useState(true);



    const inputRange = `${Array(2).fill(0).map((_, idx) => [
        width * idx,
        width * (idx + 0.5),
        width * (idx + 1),
    ])}`.split(',').map((i) => Number(i));

    const outputRange = `${Array(2).fill(0).map((_) => [1, 1.5, 1])}`.split(',').map((i) => Number(i));
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
                            transform: [
                                {
                                    translateX: x.interpolate({
                                        inputRange: [0, width],
                                        outputRange: [0, width / 2],
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
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
                        useNativeDriver: true, listener: ({ nativeEvent }) => {
                            if (nativeEvent.contentOffset.x != 0) {
                                scrollRef.current.scrollTo({ x: 0, y: 0, animated: false },)
                                setBloqRef(false)
                            }
                            else {
                                setBloqRef(true)
                            }
                        }
                    })}
                >
                    <View style={styles.screen}>
                        <Teoria />
                    </View>
                    <View style={styles.screen}>
                        <TelaExercicioModulo07/>
                    </View>
                </Animated.ScrollView>
            </View>
        </ScrollView>
    )
}

export default TelaModulo07

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
        paddingTop: '5%',
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
        paddingTop: '10%',
        paddingVertical: '5%'
    },
    message: {
        color: '#fff',
        fontSize: 17,
        marginHorizontal: '5%',
        paddingTop: '5%'
    },
    messageDestaque: {
        color: '#f92672',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: '5%',
        paddingTop: '5%'
    },
    screen: {
        flex: 1,
        backgroundColor: '#000000',
        width,
    },
    scrollIndicator: {
        backgroundColor: '#5015bd',
        height: 4,
        width: width / 2,
        borderRadius: 2,
        marginTop: -4,
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%'
    },
    terminal: {
        backgroundColor: '#121212',
        marginHorizontal: '7%',
        width: '86%',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',

    },
    messageTerminal: {
        color: '#fff',
        fontSize: 14,
        marginHorizontal: '5%',
    }
})

