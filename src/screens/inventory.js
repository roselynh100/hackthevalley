import React from 'react'
import { Text, View } from 'react-native'
import PageHeader from '../components/PageHeader'

export default function Inventory() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <PageHeader title='Inventory' />
        <Text>Ingredients Owned!</Text>
        <Text>Dishes Owned!</Text>
      </View>
    )
  }