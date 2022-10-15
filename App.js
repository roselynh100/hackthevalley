/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import NavBar from './src/navigation/navbar';

export default function App() {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}