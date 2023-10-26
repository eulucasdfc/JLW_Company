import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const RedirecionaCadastro = () => {
    navigation.navigate('Cadastro Fornecedor | Tech One Two'); // Navegar para a tela de cadastro
  };

  const RedirecionaProduto = () => {
    navigation.navigate('Cadastro Produtos | Tech One Two'); // Navegar para a tela de produtos
  };

  return (
    <View style={styles.container}>

    <Image source={require('./imagens/tech.png')} style={styles.tech}/>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28a745' }]}
          onPress={RedirecionaCadastro}
        >
          <Text style={styles.buttonText}>Cadastrar Fornecedor</Text>

        </TouchableOpacity>
        <View style={{ marginVertical: 10 }} />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007bff' }]}
          onPress={RedirecionaProduto}
        >
          <Text style={styles.buttonText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tech: {
    marginTop: 20,
    width: 400,
    height: 150,
    marginBottom: 10,
  },
});

export default Home;

