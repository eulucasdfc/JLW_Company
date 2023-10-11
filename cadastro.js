import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from 'react-native-web';

const Stack = createStackNavigator(); 


const ufsBrasil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const armazenamento = ['UNID','CX'];

const Cadastro = ({navigation}) => {
  //FORNECEDORES
    const [CNPJ, setCNPJ] = useState('');
    const [razaosocial, setRazaoSocial] = useState('');
    const [email, setEmail] = useState('');
    const [representante, setRepresentante] = useState('');
    const [celular, setCelular] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState(''); 
    const [produto, setProduto] = useState('');
    const [codigodebarras, setCodigodebarras] = useState('');
    const [preco, setPreco] = useState('');
    const [qtd_produto, setQtd_Produto] = useState('');
    const [unid_armazenamento, setUnid_Armazenamento] = useState('');
    const [qtd_caixas, setQtd_Caixas] = useState('');

  const showAlert = () =>{
    window.alert('Cadastro efetuado com sucesso')};

  const handleSubmit = () => {
    if (!CNPJ||!razaosocial||!uf||!produto||!qtd_produto||!unid_armazenamento||!email||!representante||!cep) {
      // Os campos obrigatórios estão vazios, exibir uma mensagem de erro ou tomar a ação apropriada
      alert('Por favor preencher todos os campos obrigatórios.');
      return;
    }
       // Impede o envio do formulário se os campos obrigatórios não tiverem preenchidos
      showAlert();
      //Atualizar a página automaticamente e volta para a tela de login como medida de segurança
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };

  // Essa função remove quaisquer caracter que não seja número
  const handleCNPJChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, ''); 
    setCNPJ(numericText);
  };
  
  // Essa função remove quaisquer caracter que não seja número
  const handleCelularChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, '');
    setCelular(numericText);
  }; 
    
  // Essa função remove quaisquer caracter que não seja número
  const handleCepChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, '');
    setCep(numericText);
  };

  // Essa função remove quaisquer caracter que não seja número
  const handleNumeroChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, '');
    setNumero(numericText);
  };

  // Essa função remove quaisquer caracter que não seja número
  const handleQtd_ProdutoChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, '');
    setQtd_Produto(numericText);
  };

  // Essa função remove quaisquer caracter que não seja número
  const handleCodigodebarrasChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, '');
    setCodigodebarras(numericText);
  };

  // Essa função remove quaisquer caracter que não seja número
  const handlePrecoChange = (text) => {
  
    const numericText = text.replace(/[^0-9,]/g, '');
    setPreco(numericText);
  };

  // Essa função remove quaisquer caracter que não seja número
  const handleQtd_CaixaChange = (text) => {
  
    const numericText = text.replace(/[^0-9]/g, '');
    setQtd_Caixas(numericText);
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
        placeholder="CNPJ (Somente números e Campo obrigatório)"
        value={CNPJ}
        onChangeText={handleCNPJChange}
        keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Razão Social (Campo obrigatório)"
        value={razaosocial}
        onChangeText={setRazaoSocial}
        style={styles.input}
      />
       <TextInput
        placeholder="E-mail (Campo obrigatório)"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />       
      <TextInput
      placeholder="Representante (Campo obrigatório)"
      value={representante}
      onChangeText={setRepresentante}
      style={styles.input}
      />
      <TextInput
      placeholder="Número para contato (Campo obrigatório)"
      value={celular}
      onChangeText={handleCelularChange}
      keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
      style={styles.input}
      />
      <br/><br/>
      <TextInput
        placeholder="CEP (Somente números e Campo obrigatório)"
        value={cep}
        onChangeText={handleCepChange}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
      />

      <TextInput
        placeholder="Número (somente números)"
        value={numero}
        onChangeText={handleNumeroChange}
        keyboardType="numeric" // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
      placeholder="Complemento"
      value={complemento}
      onChangeText={setComplemento}
      style={styles.input}
      />         

      <TextInput
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
        style={styles.input}
      />

      <TextInput
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
        style={styles.input}
      />

      <Picker
        selectedValue={uf}
        onValueChange={(itemValue, itemIndex) => setUf(itemValue)}
        style={styles.input}
        >
        <Picker.Item label="UF (campo obrigatório)" value="" />
        {ufsBrasil.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>

      <Image source={require('./imagens/produtos.gif')} style={styles.gif} /><br/>

      <TextInput
        placeholder="Produto (Campo obrigatório)"
        value={produto}
        onChangeText={setProduto}
        style={styles.input}
      />

      <TextInput
        placeholder="Código de Barras (Somente número e Campo obrigatório)"
        value={codigodebarras}
        onChangeText={handleCodigodebarrasChange}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Preço (Somente número e Campo obrigatório)"
        value={preco}
        onChangeText={handlePrecoChange}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Quantidade (Campo obrigatório)"
        value={qtd_produto}
        onChangeText={handleQtd_ProdutoChange}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <Picker
        selectedValue={unid_armazenamento}
        onValueChange={(itemValue, itemIndex) => setUnid_Armazenamento(itemValue)}
        style={styles.input}
        >
        <Picker.Item label="Unidade (Campo obrigatório)" value="" />
        {armazenamento.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>

      <TextInput
        placeholder="Quantidade de caixas"
        value={qtd_caixas}
        onChangeText={handleQtd_CaixaChange}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <Button title="Enviar" onPress={handleSubmit}/>

      <Text style={{fontStyle: 'italic', fontSize: 15}}><br/><br/>Membros do Trabalho</Text>

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
  },
  scrollView: {
    marginTop: 20,
    width: '90%',
  },
  membroEquipe: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default Cadastro;