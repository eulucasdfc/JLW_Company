
import React, {useState} from 'react'
import { Button, StyleSheet, Text, ScrollView, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 


const Stack = createStackNavigator(); 
const Somar = ({navigation}) => {

    const[num1, setNum1]= useState('');
    const[num2, setNum2]= useState('');
    const[somaResultado, setSomaResultado] = useState('');

    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let resultado = n1 + "+" + n2 + "=" + (n1+n2);
    setSomaResultado(resultado);

return(
    <View style = {StyleSheet.container}>
    <Text style = {StyleSheet.labelresultado}>SOMA DOS DOIS NÚMEROS:{somaResultado}</Text>
    <TextInput style = {styles.input} placeholder = "Primeiro Número" value={num1} on ChangeText={setNum1}/>
    <TextInput style = {styles.input} placeholder = "Segundo Número" value={num2} on ChangeText={setNum2}/>

    <Button title = "Calcular" onPress = {Somar}/>
    </View>
);
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding: 20,
    },
    input:{
        width: '30%',
        padding:10,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#ccc',
    },
    labelresultado:{
        //marginTop:30,
        color: 'blue',
        fontSize: '8',
        fontFamily:'Arial',
        fontWeight:'bold',
        marginBottom:100,
    }
    });

export default Somar;