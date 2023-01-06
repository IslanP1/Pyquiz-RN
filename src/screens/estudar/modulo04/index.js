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
import TelaExercicio from '../../exercicios/modulo4/exercicio01';


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
            <Text style={styles.title}>Metodo For </Text>
            <Text style={styles.message}>
              O for é uma estrutura de repetição, que é responsável por executar um determinado código repetidas vezes através de condições. Por esse motivo, essa estrutura pode ser comumente chamadas de loop, da mesma forma que o while, o qual veremos futuramente.
            </Text>
           
            <View>
                <Text style={styles.subtitle}>Estrutura</Text>
                <Text style={styles.message}>
                  A estrutura do for é bem simples:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>for</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> item </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>in</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> estoque:</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>     print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( item )</Text>       
                            
                    </Text>
                </View>
 
                <Text style={styles.message}>
                   Nesse exemplo, a variável item percorre a lista, fazendo um print de cada elemento da lista, desse modo, percebe-se que o for ocorrerá de acordo com o tamanho do elemento analisado, se a lista contém 5 elementos, então o for percorrerá a lista e executará o print de cada um dos itens.
                </Text>

                <Text style={styles.subtitle}>Auxiliares </Text>

                <Text style={styles.message}>  
                   Os auxiliadores servem para alterar o fluxo de uma estrutura de repetição:
                </Text>
                

                <Text style={styles.messageDestaque}>  
                   Break 
                </Text>
                <Text style={styles.message}>  
                   Usado para parar o loop 
                </Text>


                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>for</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> item </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>in</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> estoque:</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( item )</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}if</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> i == "Placa":</Text> 
                    </Text>
                    <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'          '}Break</Text>
                </View>

                <Text style={styles.message}>
                   Neste caso, se o item placa estiver na lista estoque, o for será encerrado
                </Text>

                <Text style={styles.messageDestaque}>  
                   Continue  
                </Text>
                <Text style={styles.message}>
                   Ao usa-lo, ele irá ignorar o resto do código e continuar o for, veja:
                </Text>
                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>estoque = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>[ "Teclado", "Placa", "Mouse" ]</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>for</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> item </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>in</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> estoque:</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}if</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> i == "Placa":</Text> 
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'          '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( "é a placa" )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'          '}Continue</Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( i )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Saída de dados: </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Teclado </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># é a placa </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Mouse </Text>
                </View>
               
                <Text style={styles.subtitle}>Exemplos </Text>

                <Text style={styles.message}>
                    Nesse exemplo, o for irá percorrer a lista estoque:
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: 'orange'}]}>estoque = </Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>[ 'Placa', 'Monitor', 'Teclado' ]</Text>          
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>for</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> item </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>in</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> estoque:</Text>     
                    </Text>
                    
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'      '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( item )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Saída de dados: </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Placa </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Monitor </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Teclado </Text>
                    
                </View>
 
               
                <Text style={styles.message}>
                   Já neste outro, podemos ver que conseguimos percorrer até mesmo uma string:
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>for</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> letras </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>in</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> "Python":</Text>     
                    </Text>
                    
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'      '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( letras )</Text>          
                    </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Saída de dados: </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># P </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># y </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># t </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># h </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># o </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># n </Text>
                    
                </View>

                <Text style={styles.message}>
                   Por fim, podemos ver um exemplo com range()
                </Text>

                <View style={styles.terminal}>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>for</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> num </Text>       
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>in</Text> 
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> range(5):</Text>     
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'     '}if</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}> num == 3:</Text> 
                    </Text>
                    <Text style={styles.messageTerminal}>
                        <Text style={[styles.messageTerminal, {color: '#f92672'}]}>{'          '}print</Text>
                        <Text style={[styles.messageTerminal, {color: 'white'}]}>( "3" )</Text>          
                    </Text>
                    
                    
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># Saída de dados: </Text>
                    <Text style={[styles.messageTerminal, {color: 'green'}]}># 3 </Text>
                </View>

                <Text style={styles.message}>
                   Perceba que nesse caso o for percorre cada número até o range (alcance) definido no começo.
                </Text>

                
                <Text style={{marginTop:80}} />
                
            </View>
            
        </ScrollView>
    )
};


const TelaModulo04 = () => {
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

export default TelaModulo04

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
        color: '#fff',
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

