import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';

const App = () => {
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const matInteira = () => {
    setMat(parseInt(matricula))
  }

  // Essa função remove quaisquer caracter que não seja número
  const handleMatriculaChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, ''); 
    setMatricula(numericText);
  };

  // Essa função remove quaisquer caracter que não seja número
  const handleNumeroChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, '');
    setNumero(numericText);
  };
  
  // Essa função remove quaisquer caracter que não seja número
  const handleCepChange = (text) => {
  
    const CepText = text.replace(/[^0-9]/g, '');
    setCep(CepText);
  };


  // Informações sobre integrantes do trabalho

  const equipe = [
    { nome: 'Jenifer Carvalho', matricula: '202103406734' },
    { nome: 'Lucas França', matricula: '202102286115' },
    { nome: 'Wagner Mesquita', matricula: '202003315338' },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.empresa}>JLW Company</Text>

      <Image source={require('./imagens/logo.jpg')} style={styles.logo} />
      <Text style={styles.label}>Cadastramento de Clientes</Text>
      
      <TextInput
        placeholder="Matrícula"
        value={matricula}
        onChangeText={handleMatriculaChange}
        keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Número"
        value={numero}
        onChangeText={handleNumeroChange}
        keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />
    

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Logradouro"
        value={logradouro}
        onChangeText={setLogradouro}
        style={styles.input}
      />

     

      <TextInput
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
        style={styles.input}
      />

      <TextInput
        placeholder="CEP"
        value={cep}
        onChangeText={handleCepChange}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
        style={styles.input}
      />

      <TextInput
        placeholder="UF"
        value={uf}
        onChangeText={setUf}
        style={styles.input}
      />

      <Text>Membros do Trabalho</Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  empresa: {
    fontFamily: "helvetica",
    fontSize: 40,
    fontWeight: 'normal',
    marginTop: 30,
  
  },
  logo: {
    marginTop: 20,
    width: 100,
    height: 100,
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

export default App;