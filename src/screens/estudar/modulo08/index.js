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
import TelaExercicioModulo08 from '../../exercicios/modulo08/exercicio01';


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
            <View>
                <Text style={styles.title}>Tratamento de erros</Text>
                <Text style={styles.subtitle}>Try e Except</Text>
                <Text style={styles.message}>
                    O bloco try/except é usado para tratar erros que possam ocorrer em um código. O código que pode causar um erro é colocado no bloco try, e o código para lidar com o erro é colocado no bloco except. Aqui está um exemplo de como isso funciona:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>try:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código que pode causar um erro
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{'     '}divisao = 1/0</Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>except:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código para lidar com o erro
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        {'     '}print
                        <Text style={{ color: '#ffffff' }}>
                            ("Ocorreu um erro")
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Se o código no bloco try causar um erro, o código no bloco except será executado. Se nenhum erro ocorrer, o código no bloco except será ignorado.
                </Text>
                <Text style={styles.message}>
                    Você também pode especificar um tipo de erro para o bloco except para lidar com erros específicos. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>try:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código que pode causar um erro
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{'     '}divisao = 1/0</Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>except
                            <Text style={{ color: '#ffffff' }}>
                                {' '}ZeroDivisionError:
                            </Text>
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código para lidar com o erro de divisão por zero
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        {'     '}print
                        <Text style={{ color: '#ffffff' }}>
                            ("Não é possível dividir por zero")
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Se o erro ocorrer no código do bloco try, o código no bloco except será executado somente se o erro for um erro de divisão por zero. Se o erro for outro tipo de erro, ele não será tratado pelo código no bloco except e pode causar um erro de falha na execução do programa.
                </Text>
                <Text style={styles.message}>
                    Você também pode usar o comando "else" após o bloco try para especificar um código a ser executado se nenhum erro ocorrer no bloco try. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>try:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código que pode causar um erro
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: 'white' }]}>{'     '}divisao = 1/1</Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>except
                            <Text style={{ color: '#ffffff' }}>
                                {' '}ZeroDivisionError:
                            </Text>
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código para lidar com o erro de divisão por zero
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        {'     '}print
                        <Text style={{ color: '#ffffff' }}>
                            ("Não é possível dividir por zero")
                        </Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>else:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código a ser executado se nenhum erro ocorrer
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        {'     '}print
                        <Text style={{ color: '#ffffff' }}>
                            ("Nenhum erro ocorreu")
                        </Text>
                    </Text>
                </View>
                <Text style={styles.subtitle}>Raise</Text>
                <Text style={styles.message}>
                    O comando "raise" é usado para gerar um erro explicitamente em um código. Você pode usá-lo para criar seus próprios tipos de erros personalizados ou para lançar um erro de um tipo pré-definido.
                </Text>
                <Text style={styles.message}>
                    A sintaxe para usar o comando "raise" é a seguinte:
                </Text>
                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>raise
                        <Text style={[styles.messageTerminal, { color: '#ffffff' }]}>
                            {' '}minha_funcao
                            <Text style={styles.messageTerminal}>
                                (args)
                            </Text>
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    O "ExceptionName" é o nome da exceção que você quer gerar e os "args" são os argumentos para a exceção. Por exemplo, aqui está como você poderia usar o comando "raise" para gerar um erro de divisão por zero:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>try:</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código que pode causar um erro
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'     '}if
                            <Text style={{ color: '#ffffff' }}>{' '}x==0:</Text>
                        </Text>
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>{'          '}raise
                            <Text style={{ color: '#ffffff' }}>
                                {' '}ZeroDivisionError("Impossível dividir por zero")
                            </Text>
                        </Text>
                    </Text>
                    <Text style={styles.messageTerminal}>{'     '}divisão = 1 / x</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>except
                            <Text style={{ color: '#ffffff' }}>
                                {' '}ZeroDivisionError:
                            </Text>
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        {'     '}# código para lidar com o erro de divisão por zero
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        {'     '}print
                        <Text style={{ color: '#ffffff' }}>
                            ("Ocorreu um erro de divisão por zero")
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Se a variável "x" for igual a zero, o comando "raise" gerará um erro de divisão por zero e o código no bloco except será executado para lidar com o erro.
                </Text>
                <Text style={styles.subtitle}>Assert</Text>
                <Text style={styles.message}>
                    O comando "assert" é usado no Python para verificar se uma condição é verdadeira e, se não for, gerar um erro de AssertionError. Ele é útil para testar se uma determinada suposição é válida no seu código e, se não for, indicar um problema.
                </Text>
                <Text style={styles.message}>
                    A sintaxe para usar o comando "assert" é a seguinte:
                </Text>
                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>assert
                        <Text style={[styles.messageTerminal, { color: '#ffffff' }]}>
                            {' '}condition, message
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    O "condition" é a condição a ser verificada e o "message" é a mensagem de erro a ser exibida se a condição for falsa. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>x = 10</Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>assert
                        <Text style={[styles.messageTerminal, { color: '#ffffff' }]}>
                            {' '}x {'>'} 0, "O valor de x é menor ou igual a zero"
                        </Text>
                    </Text>
                </View>
                <Text style={styles.message}>
                    Neste caso, a condição {"x > 0"} é verdadeira, então o comando "assert" não gera nenhum erro. Se a condição fosse falsa, por exemplo {"x < 0"}, o comando "assert" geraria um erro de AssertionError com a mensagem "O valor de x é menor ou igual a zero".
                </Text>
                <Text style={styles.message}>
                    O comando "assert" é útil para testar condições em um código durante o desenvolvimento e depuração, mas é importante lembrar de removê-los ou desativá-los quando o código for colocado em produção, pois eles podem afetar o desempenho do programa.
                </Text>
                <Text style={styles.messageTerminal} />
            </View>
        </ScrollView>
    )
};

const TelaModulo08 = () => {

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
                        <TelaExercicioModulo08 />
                    </View>
                </Animated.ScrollView>
            </View>
        </ScrollView>
    )
}

export default TelaModulo08

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

