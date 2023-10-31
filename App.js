import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Fornecedores from './fornecedores';
import Produtos from './produtos';
import Home from './home';

const Stack = createStackNavigator();

const App = () => {

return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="JLW Company" component={Login}/>
      <Stack.Screen name="Página Inicial | Tech One Two" component={Home} />
      <Stack.Screen name="Cadastro Fornecedor | Tech One Two" component={Fornecedores} />
      <Stack.Screen name="Cadastro Produtos | Tech One Two" component={Produtos} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
