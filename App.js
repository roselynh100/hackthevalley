import React from 'react'
import Currency from './src/components/Currency'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/navigation/navbar';

const App = () => {
  return (
    <NavigationContainer>
      <Currency />
      <NavBar />
    </NavigationContainer>
  )
}

export default App