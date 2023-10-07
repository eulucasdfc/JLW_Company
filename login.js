
import React, {useState} from 'react'
import { Button, StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator(); 

const Login = ({navigation}) => {

    const[username, setUsername] = useState ("");
    const[password, setPassword] = useState ("");

// Logins com usuários e senhas
const users = [
  { username: 'wagner', password: '12345' },
  { username: 'jenifer', password: '54321' },
  { username: 'lucas', password: '123456789'},
];

const handleLogin = () => {
  // Verifica se o username e a password correspondem a algum usuário na matriz
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    navigation.navigate('Cadastro'); // Navegue para a tela de Cadastro
    // Limpe os campos de entrada de dados
    setUsername('');
    setPassword('');
  } else {
    alert('Login e/ou senha inválido');
  }
};

const equipe = [
    { nome: 'Jenifer Carvalho', matricula: '202103406734' },
    { nome: 'Lucas de França', matricula: '202102286115' },
    { nome: 'Wagner Mesquita', matricula: '202003315338' },

  ];
    return(
      
            <View style={[styles.container, { backgroundColor: 'white' }]}>
            <Image source={require('./imagens/areadocliente.gif')} style={styles.areadocliente} />
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
            <TextInput
              style={[styles.input, { flex: 0.5 }]} // Ajuste o valor flex para aumentar a largura do campo
              placeholder="Usuário"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={[styles.input, { flex: 0.5 }]} // Ajuste o valor flex para aumentar a largura do campo
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            
            <View style={{ flex: 1, alignSelf: 'flex-end'}}>
              <Button title="Logar" onPress={handleLogin} />
            </View>
            </View>
  

            <Image source={require('./imagens/jlw2.jpg')} style={styles.jlw} />
            <Text style={[styles.label, { marginBottom: 10, marginTop: 10, textAlign: 'center' }]}> 
            SISTEMA DE CONTROLE DE FORNECEDORES E PRODUTOS DA JLW COMPANY
            </Text> 
            <Image source={require('./imagens/quemsomos.gif')} style={styles.gif} />
            <Text style={[styles.label1, { marginBottom: 10, marginTop: 10, textAlign: 'left' }]}> 
            DETALHAR QUEM SOMOS
            </Text>
            <Image source={require('./imagens/missao.gif')} style={styles.gif} />
            <Text style={[styles.label1, { marginBottom: 10, marginTop: 10, textAlign: 'left' }]}> 
            DETALHAR A MISSÃO DA EMPRESA
            </Text>
            <Text><br/>Membros do Trabalho</Text>
            <ScrollView style={styles.scrollView}>
                {equipe.map((membro, index) => (
                <View key={index} style={styles.membroEquipe}>
                    <Text>{membro.nome}</Text>
                    <Text>{membro.matricula}</Text>
                </View>
        ))}
        </ScrollView>
        <Text style={[styles.label1, { marginBottom: 10, marginTop: 10, textAlign: 'left' }]}> 
        ©2023 JLW COMPANY | TODOS OS DIREITOS RESERVADOS.
        </Text>        
        </View>
        
    );

};

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',

    },
    jlw: {
      marginTop: 20,
      width: 250,
      height: 55,
      alignSelf: 'center',
      marginBottom: 10,
    },
    areadocliente: {
      marginTop: 20,
      width: 200,
      height: 30,
      alignSelf: 'flex-end',
      marginBottom: 10,
    },
    gif: {
      marginTop: 20,
      width: 400,
      height: 60,
      alignSelf: 'center',
      marginBottom: 10,
    },
    label: {
      fontSize: 20,
      marginBottom: 20,
      marginTop: 10, 
    },
    label1: {
      fontSize: 15,
      marginBottom: 20,
      marginTop: 10, 
    },

    input: {
      width: 150,
      height: 35,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      alignSelf: 'flex-start',
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
