import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from 'react-native-web';

const Stack = createStackNavigator(); 


const UF_BRASIL = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const armazenamento = ['UNID','CX'];

const Cadastro = ({navigation}) => {
  //FORNECEDORES
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
    const [PRODUTO, InsiraPRODUTO] = useState('');
    const [CODIGO_BARRAS, InsiraCODIGO_BARRAS] = useState('');
    const [PREÇO, InsiraPREÇO] = useState('');
    const [QTD_PRODUTO, InsiraQTD_PRODUTO] = useState('');
    const [UNID_ARMAZENAMENTO, InsiraUNID_ARMAZENAMENTO] = useState('');
    const [QTD_CAIXAS, InsiraQTD_CAIXAS] = useState('');
    const [TOTAL_PRODUTOS, InsiraTotalPRODUTO] = useState('');

  const MostrarAlerta = () =>{
    window.alert('Cadastro efetuado com sucesso')};

  const VerificarEnvio = () => {
    if (!CNPJ||!RAZAOSOCIAL||!UF||!PRODUTO||!QTD_PRODUTO||!UNID_ARMAZENAMENTO||!EMAIL||!REPRESENTANTE||!CEP) {
      alert('Por favor preencher todos os campos obrigatórios.');
      return;
    }
      // Impede o envio do formulário se os campos obrigatórios não tiverem preenchidos
      MostrarAlerta();
      //Atualizar a página automaticamente e volta para a tela de login como medida de segurança
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    };


  // Essas funções removem qualquer caracter que não seja NUMERO do (1 ao 8)
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
  const CriterioQTD_PRODUTO = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, '');
    InsiraQTD_PRODUTO(textonumerico);
    calcularTOTAL_PRODUTOS(PREÇO, text);
  };

  //(6)
  const CriterioCodigodebarra = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, '');
    InsiraCODIGO_BARRAS(textonumerico);
  };

  //(7) *Aqui a vírgula é permitido
  const CriterioPREÇO = (text) => {
  
    const textonumerico = text.replace(/[^0-9,]/g, '');
    InsiraPREÇO(textonumerico);
    calcularTOTAL_PRODUTOS(text, QTD_PRODUTO);
  };

  //(8)
  const CriterioQtd_caixa = (text) => {
  
    const textonumerico = text.replace(/[^0-9]/g, '');
    InsiraQTD_CAIXAS(textonumerico);
  };

  //Essa função calcula o preço total (QTD_PRODUTO *preço)
  const calcularTOTAL_PRODUTOS = (PREÇO, QTD_PRODUTO) => {
    if (PREÇO && QTD_PRODUTO) {
      // Substitui vírgulas por pontos
      const PREÇOComPonto = PREÇO.replace(',', '.');
      const QtdComPonto = QTD_PRODUTO.replace(',', '.');
      
      // Realiza o cálculo com os valores substituídos
      const resultadoCalculado = parseFloat(PREÇOComPonto) * parseFloat(QtdComPonto);
      
      // Formata o resultado com vírgula em vez de ponto
      const resultadoFormatado = resultadoCalculado.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
  
      InsiraTotalPRODUTO(resultadoFormatado);
    } else {
      InsiraTotalPRODUTO(''); // Reset do cálculo se os campos estiverem vazios
    }
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
      <TextInput
        placeholder="CEP (Somente números e Campo obrigatório)"
        value={CEP}
        onChangeText={CriterioCEP}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

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

      <Image source={require('./imagens/PRODUTOs.gif')} style={styles.gif} /><br/>

      <TextInput
        placeholder="Insira o Produto (Campo obrigatório)"
        value={PRODUTO}
        onChangeText={InsiraPRODUTO}
        style={styles.input}
      />

      <TextInput
        placeholder="Código de Barras (Somente número e Campo obrigatório)"
        value={CODIGO_BARRAS}
        onChangeText={CriterioCodigodebarra}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <TextInput
        placeholder="Preço (Somente número e Campo obrigatório)"
        value={PREÇO}
        onChangeText={CriterioPREÇO}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Quantidade (Campo obrigatório)"
        value={QTD_PRODUTO}
        onChangeText={CriterioQTD_PRODUTO}
        keyboardType="numeric"
        style={styles.input}
      />
      
      <br/><br/><Text style={{fontSize: 20}}> Total de Custo do Produto: {TOTAL_PRODUTOS ? `R$ ${TOTAL_PRODUTOS}` : 'Insira preço e quantidade'}</Text><br/><br/>

      <Picker
        selectedValue={UNID_ARMAZENAMENTO}
        onValueChange={(itemValue, itemIndex) => InsiraUNID_ARMAZENAMENTO(itemValue)}
        style={styles.input}
        >
        <Picker.Item label="Unidade (Campo obrigatório)" value="" />
        {armazenamento.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>

      <TextInput
        placeholder="Quantidade de caixas"
        value={QTD_CAIXAS}
        onChangeText={CriterioQtd_caixa}
        keyboardType='numeric' // Componente para garantir que apareça o teclado númerico
        style={styles.input}
      />

      <Button title="Enviar" onPress={VerificarEnvio}/>

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