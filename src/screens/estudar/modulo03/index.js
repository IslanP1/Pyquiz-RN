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
import TelaExercicio from '../../exercicios/modulo3/exercicio01';


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
            <Text style={styles.title}>Listas e Tuplas</Text>
            <Text style={styles.message}>
                As listas e tuplas são tipos de dados bem comuns em python, que permitem armazenar sequências de valores 
            </Text>
           
            <View>
                <Text style={styles.subtitle}>Listas</Text>
                <Text style={styles.message}>
                   Listas são coleções mutáveis de itens, é possível remover ou alterar os itens da lista mesmo depois de ser criada, para sua criação é necessário usar colchetes e separar os itens por vírgulas, ou deixar um valor vazio entre os colchetes:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>lista = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>[ 1, 2, 3, 4, 5 ]</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'orange'}]}>lista = [ ]</Text>
                </View>
 
                <Text style={styles.message}>
                   Para acessar itens de uma lista basta usar o índice, lembrando que índices no python começam pelo zero:
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>minha_lista = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>[ 1, 2, 3, 4, 5 ]</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>primeiro_item = minha_lista</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> [ 0 ]</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># primeiro_item recebe o valor 1</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>terceiro_item = minha_lista</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> [ 2 ]</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># terceiro_item recebe o valor 3</Text>   
                </View>

                <Text style={styles.message}>
                   Para adicionar valores é possível usar o método append():
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>minha_lista = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>[ 1, 2, 3, 4, 5 ]</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>minha_lista</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>.append(6)</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># minha_lista agora é [1, 2, 3, 4, 5, 6]</Text>
                </View>

                <Text style={styles.message}>
                    Já para remover, é possível usar o método remove():
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>minha_lista = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>[ 1, 2, 3, 4, 5 ]</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>minha_lista</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>.remove(3)</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># minha_lista agora é [1, 2, 4, 5]</Text>
                </View>

                <Text style={styles.subtitle}>Tuplas</Text>
 
               
                <Text style={styles.message}>
                  As tuplas são muito semelhantes às listas, entretanto, elas têm uma particularidade que é o fato de elas serem imutáveis, 
                  quando uma tupla é criada ela não pode ter seus valores alterados, removidos e nem mesmo adicionar mais. 
                  Por esse motivo, as tuplas podem ser úteis para garantir que algum valor se uma sequência não seja alterado 
                  acidentalmente.
                </Text>

                <Text style={styles.message}>
                   A estrutura de uma tupla é bem semelhante a da lista, basta usar parênteses e separar os itens por meio de vírgulas, ou deixar um valor vazio entre os parênteses:
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>tupla = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( 1, 2, 3, 4, 5 )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'orange'}]}>outra_tupla = ( )</Text>
                </View>

                <Text style={styles.message}>
                    Para acessar os valores de uma tupla, basta usar também o seu índice:
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>minha_tupla = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>(1, 2, 3, 4, 5)</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>primeiro_item = minha_tupla</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> [ 0 ]</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># primeiro_item recebe o valor 1</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>terceiro_item = minha_tupla</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> [ 2 ]</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># terceiro_item recebe o valor 3</Text>   
                </View>

                <Text style={styles.message}>
                    Já que as tuplas são imutáveis, não podemos remover ou adicionar itens dentro dela, apenas podemos usá-las para criar uma nova tupla com os valores que queremos:
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>minha_tupla = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>(1, 2, 3, 4, 5)</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>nova_tupla = minha_tupla + </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> ( 6, 7, 8 )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}>
                        # nova_tupla é (1, 2, 3, 4, 5, 6, 7, 8)
                    </Text>
                </View>
                <Text style={{marginTop:80}} />
                
            </View>
            
        </ScrollView>
    )
};


const TelaConteudo = () => {
    const navigation = useNavigation()
  
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
        paddingTop:10,
        paddingBottom:10,
        marginTop:20,
        borderRadius: 20,
        justifyContent: 'center'
    },
    messageTerminal: {
        color: '#fff',
        fontSize: 14,
        marginHorizontal: '5%',
    }
})

