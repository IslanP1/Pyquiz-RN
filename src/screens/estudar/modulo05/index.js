import { 
    StyleSheet, 
    Text, 
    View, 
    Dimensions, 
    ScrollView, 
    Animated,
    BackHandler} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import TelaExercicio from '../../exercicios/modulo5/exercicio01';


const {width} = Dimensions.get('window');


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
            <Text style={styles.title}>while</Text>
            <Text style={styles.message}>
              O while, assim como o for é uma estrutura de repetição, com ele podemos executar um conjunto de instruções enquanto a condição é verdadeira.
            </Text>
           
            <View>
                <Text style={styles.subtitle}>Estrutura</Text>
                <Text style={styles.message}>
                   A estrutura do while é simples assim como a do for:
                </Text>

                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>variavel = 1</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>while</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> variavel </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'<'}</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> 6:</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'      '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( variavel )</Text>         
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>{'      '}variavel += 1</Text>
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Saída de dados: 1, 2, 3, 4, 5</Text>
                </View>
 
                <Text style={styles.message}>
                   Observe que assim que a variável deixou de ter um valor que satisfizesse a condição do while, (enquanto variável for menor que 6), o código parou, portanto observa-se que assim que a condição deixa de ser verdadeira o código é parado.
                </Text>

                <Text style={styles.subtitle}>Auxiliares</Text>

                <Text style={styles.message}>  
                  As estruturas continue e break servem ao while assim como o for:
                </Text>
                <Text style={styles.message}>  
                  Exemplo com break:
                </Text>


                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>variavel = 1</Text>
                    <Text style={styles.messageTerminal}>
                    <Text style={[styles.messageTerminal, {color: '#f92672'}]}>while</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> variavel </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'<'}</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> 6:</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( variavel )</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}if</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> variavel == 3:</Text> 
                    </Text>
                    <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'          '}Break</Text>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>{'      '}variavel += 1</Text>
                </View>

                <Text style={styles.message}>
                  Exemplo com Continue:
                </Text>

                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>variavel = 0</Text>
                    <Text style={styles.messageTerminal}>
                    <Text style={[styles.messageTerminal, {color: '#f92672'}]}>while</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> variavel </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'<'}</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> 6:</Text>     
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>{'     '}variavel += 1</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}if</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> variavel == 3:</Text> 
                    </Text>
                    <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'          '}Continue</Text>
                    
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( variavel )</Text>          
                    </Text>
                </View>
               
                <Text style={styles.message}>
                  Veja que como eles também auxiliam em loops, a função deles é igual quando são usados no for. Você consegue pensar na saída de dados dos exemplos acima?
                </Text>

                <Text style={styles.subtitle}>Exemplos </Text>

                <Text style={styles.message}>
                Também  é possível usar o else junto com o while:
                </Text>

                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>variavel = 1</Text>
                    <Text style={styles.messageTerminal}>
                    <Text style={[styles.messageTerminal, {color: '#f92672'}]}>while</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> variavel </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'<'}</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> 6:</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( variavel )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>{'     '}variavel += 1</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>else:</Text>
                        
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( "A variável já não é menor que 6" )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Saída de dados: </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># 1 </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># 2 </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># 3 </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># 4 </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># 5 </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># variável já não é menor que 6</Text>
                    
                </View>
 
               
                <Text style={styles.message}>
                   Um erro muito comum é esquecer de algum jeito, esquecer de criar uma função para finalizar o método, pois isso gerará um loop infinito, veja este exemplo:
                </Text>

                <View style={styles.terminal}>
                    <Text style={[styles.messageTerminal, {color: 'white'}]}>loop = True</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>while</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> loop </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'=='}</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> True:</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'      '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( ("O loop está ativo") )</Text>         
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Saída de dados: </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># O loop está ativo </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># O loop está ativo </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Isso continuará por muito tempo! </Text>
                </View>

                

                
                <Text style={{marginTop:80}} />
                
            </View>
            
        </ScrollView>
    )
};


const TelaModulo05 = () => {
   
  
    const x = useRef(new Animated.Value(0)).current;

    const scrollRef = useRef();
    const [bloqRef, setBloqRef] = useState(true);


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

export default TelaModulo05

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
        color: '#f92672',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: '5%',
        paddingTop:'5%'
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
        justifyContent: 'center',
        
    },
    messageTerminal: {
        color: '#fff',
        fontSize: 14,
        marginHorizontal: '5%',
    }
})

