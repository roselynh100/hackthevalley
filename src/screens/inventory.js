import React from 'react';
import { Text, View } from 'react-native';

export default function Inventory() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ingredients Owned!</Text>
        <Text>Dishes Owned!</Text>
      </View>
    );
  }