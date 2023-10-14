import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Cadastro from './cadastro';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "JLW Company">
        <Stack.Screen name = "JLW Company" component={Login}/>
        <Stack.Screen name = "Cadastro | Tech One Two" component = {Cadastro}/>
        </Stack.Navigator>
        
    </NavigationContainer>
    
  );
};

export default App;