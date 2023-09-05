
import React, {useState} from 'react'
import { Button, StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator(); 

const Login = ({navigation}) => {

    const[username, setUsername] = useState ("");
    const[password, setPassword] = useState ("");

    const handleLogin = () => {
        if (username == 'maria' && password == '123'){
            navigation.navigate('Cadastro'); // Navigate to Cadastro screen 
           //LIMPANDO OS CAMPOS DE ENTRADAS DE DADOS 
            setUsername = ('') 
            setPassword = ('') 
        }else{
        alert('Login e/ou senha inválido')
        }
}; 
const equipe = [
    { nome: 'Jenifer Carvalho', matricula: '202103406734' },
    { nome: 'Lucas de França', matricula: '202102286115' },
    { nome: 'Wagner Mesquita', matricula: '202003315338' },

  ];
    return(
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            
            <Image source={require('./imagens/jlw2.jpg')} style={styles.jlw} />
            <Text style={[styles.label1, { marginBottom: 10, marginTop: 10, textAlign: 'center' }]}> 
            SISTEMA DE CONTROLE JLW COMPANY
            </Text> 
            <TextInput
                style = {styles.input}
                placeholder = "Usuário"
                value = {username}
                onChangeText = {setUsername}/>
            <TextInput
                style = {styles.input}
                placeholder = "Senha"
                value = {password}
                onChangeText = {setPassword}
                secureTextEntry = {true} />
            
            <Button title="Logar" onPress={handleLogin}/>
            <Text><br/>Membros do Trabalho</Text>
            <ScrollView style={styles.scrollView}>
                {equipe.map((membro, index) => (
                <View key={index} style={styles.membroEquipe}>
                    <Text>{membro.nome}</Text>
                    <Text>{membro.matricula}</Text>
                </View>
        ))}
        </ScrollView>
      
        </View>
        
    );

};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor:'#ccc',
    },
    imagem: { 

        alignSelf: 'stretch',         
        height: 70,        
        marginTop: 5, 
        marginBottom: 10, 
        
    }, 
    jlw: {
        marginTop: 20,
        width: 250,
        height: 55,
        marginBottom: 10,
      },
      label: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10,
      
      },
      input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      scrollView: {
        marginTop: 20,
        width: '100%',
      },
      membroEquipe: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
      },

});
export default Login;