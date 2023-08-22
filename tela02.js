import React, {useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

const Tela02 = () => {

    const[username, setUsername] = useState ("");
    const[password, setPassword] = useState ("");

    const handleLogin = () => {
        if (username == 'maria' && password == '123'){
            alert('Login bem sucedido')
        }else{
        alert('Login e senha inválido')
        }
};
    return(
        <View style={styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = "Usuário"
                value = {username}
                onChangeText = {setUsername}/>
            <TextInput
                style = {styles.input}
                placeholder = "Senha"
                value = {password}
                onChangeText = {setPassword}/>
            
            <Button title="Logar" onPress={handleLogin}/>
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

});
export default Tela02;