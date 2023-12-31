import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from 'react-native-web';
import axios from 'axios';

const Stack = createStackNavigator(); 

const UF_BRASIL = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

const Fornecedores = ({navigation}) => {
  //FORNECEDORES
    const [ID, InsiraID] = useState('');
    const [CNPJ, InsiraCNPJ] = useState('');
    const [RAZAOSOCIAL, InsiraRAZAOSOCIAL] = useState('');
    const [EMAIL, InsiraEMAIL] = useState('');
    const [REPRESENTANTE, InsiraREPRESENTANTE] = useState('');
    const [CELULAR, InsiraCELULAR] = useState('');
    const [CEP, InsiraCEP] = useState('');
    const [ENDEREÇO, InsiraENDEREÇO] = useState('');
    const [NUMERO, InsiraNUMERO] = useState('');
    const [COMPLEMENTO, InsiraCOMPLEMENTO] = useState('');
    const [BAIRRO, InsiraBAIRRO] = useState('');
    const [CIDADE, InsiraCIDADE] = useState('');
    const [UF, InsiraUF] = useState(''); 

  //Função do Botão para mostrar Alerta
  const MostrarAlerta = () => {
    window.alert('Cadastro efetuado com sucesso');
    // Redireciona para a Página Inicial | Tech One Two
    navigation.navigate('Página Inicial | Tech One Two');
  };

  //Função para Verificar Envio de campo obrigatório
  const VerificarEnvio = () => {
    if (!CNPJ||!RAZAOSOCIAL||!UF||!EMAIL||!REPRESENTANTE||!CEP) {
      alert('Por favor preencher todos os campos obrigatórios.');
      return;
    }
      // Impede o envio do formulário se os campos obrigatórios não tiverem preenchidos
      MostrarAlerta();
    };
  
  // Função para buscar o CEP
  const buscarCEP = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
      const data = response.data;

      if (data.erro) {
        alert('CEP não encontrado');
      } else {
        InsiraENDEREÇO(data.logradouro);
        InsiraBAIRRO(data.bairro);
        InsiraCIDADE(data.localidade);
        InsiraUF(data.uf);
      }
    } catch (error) {
      alert('Ocorreu um erro ao buscar o CEP.');
    }
  };
    

  // Essas funções removem qualquer caracter que não seja NUMERO do (1 ao 4)
  //(1)
  const CriterioCNPJ = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, ''); 
    InsiraCNPJ(textonumerico);
  };
  
  //(2)
  const CriterioCELULAR = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, '');
    InsiraCELULAR(textonumerico);
  }; 
    
  //(3)
  const CriterioCEP = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, '');
    InsiraCEP(textonumerico);
  };

  //(4)
  const CriterioNUMERO = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, '');
    InsiraNUMERO(textonumerico);
  };
  //(5)
  const CriterioID = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, ''); 
    InsiraID(textonumerico);
  };
 
  // Informações sobre integrantes do trabalho
  const equipe = [
    { nome: 'Jenifer Carvalho', matricula: '202103406734' },
    { nome: 'Lucas de França', matricula: '202102286115' },
    { nome: 'Wagner Mesquita', matricula: '202003315338' },

  ];

  return (
    <View style={styles.container}>
    
      <Image source={require('./imagens/tech.png')} style={styles.tech} />
      <Image source={require('./imagens/fornecedores.gif')} style={styles.gif} /><br/>
      
      <TextInput
        placeholder="ID (Somente números e Campo obrigatório)"
        value={ID}
        onChangeText={CriterioID}
        keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="CNPJ (Somente números e Campo obrigatório)"
        value={CNPJ}
        onChangeText={CriterioCNPJ}
        keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Razão Social (Campo obrigatório)"
        value={RAZAOSOCIAL}
        onChangeText={InsiraRAZAOSOCIAL}
        style={styles.input}
      />
       <TextInput
        placeholder="E-mail (Campo obrigatório)"
        value={EMAIL}
        onChangeText={InsiraEMAIL}
        style={styles.input}
      />       
      <TextInput
      placeholder="Representante (Campo obrigatório)"
      value={REPRESENTANTE}
      onChangeText={InsiraREPRESENTANTE}
      style={styles.input}
      />
      <TextInput
      placeholder="Número para contato (Campo obrigatório)"
      value={CELULAR}
      onChangeText={CriterioCELULAR}
      keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
      style={styles.input}
      />
      <br/><br/>

      {/* Texto Input para colocar o CEP*/}
      <TextInput
      placeholder="CEP (Campo obrigatório)"
      value={CEP}
      onChangeText={CriterioCEP}
      keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
      style={styles.input}
      />

      {/* Botão Buscar CEP */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#28a745' }]}
        onPress={buscarCEP}
      >
        <Text style={styles.buttonText}>Buscar CEP</Text>
      </TouchableOpacity><br/>

      <TextInput
        placeholder="Endereço"
        value={ENDEREÇO}
        onChangeText={InsiraENDEREÇO}
        style={styles.input}
      />

      <TextInput
        placeholder="Número (somente números)"
        value={NUMERO}
        onChangeText={CriterioNUMERO}
        keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
      placeholder="Complemento"
      value={COMPLEMENTO}
      onChangeText={InsiraCOMPLEMENTO}
      style={styles.input}
      />         

      <TextInput
        placeholder="Bairro"
        value={BAIRRO}
        onChangeText={InsiraBAIRRO}
        style={styles.input}
      />

      <TextInput
        placeholder="Cidade"
        value={CIDADE}
        onChangeText={InsiraCIDADE}
        style={styles.input}
      />

      <Picker
        selectedValue={UF}
        onValueChange={(itemValue, itemIndex) => InsiraUF(itemValue)}
        style={styles.input}
        >
        <Picker.Item label="UF (campo obrigatório)" value="" />
        {UF_BRASIL.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>

      <View style={{ marginVertical: 10 }} />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#28a745' }]}
        onPress={VerificarEnvio}
      >
        <Text style={styles.buttonText}>Cadastrar Fornecedor</Text>
      </TouchableOpacity>

      <br/>
      <Text style={[styles.label1, { marginBottom: 10, marginTop: 10, textAlign: 'left' }]}> 
        ©2023 JLW COMPANY | TODOS OS DIREITOS RESERVADOS.
      </Text>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tech: {
    marginTop: 20,
    width: 400,
    height: 150,
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
  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  membroEquipe: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Fornecedores;