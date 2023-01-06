import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Animated,
    Image,
    BackHandler
} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
//import TelaExercicio from '../../exercicios/modulo01/exercicio01';
import TelaExercicioModulo06 from '../../exercicios/modulo06/exercicio01';

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
            <Text style={styles.title}>Dicionários</Text>
            <Text style={styles.message}>
                Os dicionários são uma estrutura de dados em Python que permitem armazenar pares chave-valor. Eles são muito úteis para armazenar dados que precisam ser acessados rapidamente, pois as chaves são usadas para acessar os valores de maneira rápida, sem precisar percorrer todo o dicionário.
            </Text>
            <View>
                <Text style={styles.subtitle}>Estrutura</Text>
                <Text style={styles.message}>
                    Para criar um dicionário, basta usar chaves {'{}'} e adicionar pares chave-valor separados por vírgulas. As chaves podem ser qualquer tipo imutável, enquanto os valores podem ser de qualquer tipo. Aqui está um exemplo de como criar um dicionário:
                </Text>
                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>dicionario = {"{'chave1': 'valor1', 'chave2': 'valor2'}"}</Text>
                </View>
                <Text style={styles.message}>
                    Para acessar os valores em um dicionário, basta usar a chave entre colchetes [  ] após o nome do dicionário. Por exemplo:
                </Text>
                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>valor1 = dicionario['chave1']</Text>
                </View>
                <Text style={styles.subtitle}>Métodos mais utilizados</Text>
                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Cria um dicionário com alguns pares chave-valor
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        dicionario = {"{'chave1': 'valor1', 'chave2': 'valor2', 'chave3': 'valor3'}"}
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Limpa o dicionário
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            clear( )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>dicionario</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # vazio
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Cria outro dicionário
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        dicionario = {"{'chave1': 'valor1', 'chave2': 'valor2', 'chave3': 'valor3'}"}
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Obtém o valor da chave 'chave2'
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            valor=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            get(
                            <Text style={styles.messageTerminal}>
                                'chave2'
                            </Text>
                            )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>valor</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # valor2
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Obtém o valor da chave 'chave4', que não existe no dicionário
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            valor=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            get(
                            <Text style={styles.messageTerminal}>
                                'chave4'
                            </Text>
                            )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>valor</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # None
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Obtém o valor da chave 'chave4', fornecendo um valor padrão caso a chave não exista
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            valor=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            get(
                            <Text style={styles.messageTerminal}>
                                valor padrão
                            </Text>
                            )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>valor</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # valor padrão
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Obtém uma lista de tuplas com todos os pares chave-valor do dicionário
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            itens=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            items()
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>itens</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # [('chave1', 'valor1'), ('chave2', 'valor2'), ('chave3', 'valor3')]
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Obtém uma lista com todas as chaves do dicionário
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            chaves=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            keys()
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>chaves</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # ['chave1', 'chave2', 'chave3']
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Remove um item aleatório do dicionário e o retorna como uma tupla
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            item=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            popitem()
                        </Text>
                    </Text>                  
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>item</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # ('chave3', 'valor3')
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>dicionario</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Imprime o dicionário (agora com 2 itens a menos) {"{'chave1': 'valor1', 'chave2': 'valor2'}"}
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Insere um item na chave 'chave4' com o valor 'valor4', caso a chave não exista
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            valor=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            setdefault(
                                <Text style={styles.messageTerminal}>
                                    'chave4', 'valor4'
                                </Text>
                            )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>valor</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # valor4
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Tenta inserir um item na chave 'chave1', que já existe
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            valor=
                        </Text>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            setdefault(
                                <Text style={styles.messageTerminal}>
                                    'chave1', 'novo valor'
                                </Text>
                            )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>valor</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # 'valor1' (o valor não foi alterado)
                    </Text>
                    <Text style={styles.messageTerminal}>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # Atualiza o dicionário com os pares chave-valor de outro dicionário
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'white' }]}>
                        dicionario.
                        <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                            update(
                                <Text style={styles.messageTerminal}>
                                    {"{'chave5': 'valor5', 'chave6': 'valor6'}"}
                                </Text>
                            )
                        </Text>
                    </Text>
                    <Text style={[styles.messageTerminal, { color: '#f92672' }]}>
                        print(
                        <Text style={styles.messageTerminal}>dicionario</Text>
                        )
                    </Text>
                    <Text style={[styles.messageTerminal, { color: 'green' }]}>
                        # {"{'chave1': 'valor1', 'chave2': 'valor2', 'chave4': 'valor4', 'chave5': 'valor5', 'chave6': 'valor6'}"}
                    </Text>
                </View>
                <Text style={{ marginTop: 80 }} />
            </View>
        </ScrollView>
    )
};

const TelaModulo06 = () => {
   
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
                        <TelaExercicioModulo06 />
                    </View>
                </Animated.ScrollView>
            </View>
        </ScrollView>
    )
}

export default TelaModulo06

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

