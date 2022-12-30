import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    FlatList, 
    Dimensions, 
    SafeAreaView, 
    ScrollView, 
    Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import TelaExercicio from '../exercicios/modulo01/exercicio01';

const data = [
    { 
        id: 1, 
        name: 'Item 1' 
    },
    { 
        id: 2, 
        name: 'Item 2' 
    },
    { 
        id: 3, 
        name: 'Item 3' 
    },
    { 
        id: 4, 
        name: 'Item 4' 
    },
    { 
        id: 5, 
        name: 'Item 5' 
    },
  ];

const {width, height} = Dimensions.get('window');


const Teoria = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Olá Mundo</Text>
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
        <SafeAreaView style={styles.container}>
            <View>
            <View style={[styles.subHeader]}>
                <Text style={styles.subtitle}>TEORIA</Text>
                <Text style={styles.subtitle}>EXERCÍCIOS</Text>
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
        </SafeAreaView>
    )
}

export default TelaConteudo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    header: {
        backgroundColor: "#323232",
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
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
    subtitle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    screen: {
        flex: 1,
        backgroundColor: '#000000',
        width,
        height
    },
    containerConversas: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    item: {
        padding: 16,
        fontSize: 18,
        color: '#fff'
    },
    scrollIndicator: {
        backgroundColor: '#fff',
        height: 4,
        width: width/2,
        borderRadius: 2,
        marginTop: -4,
    },
})

