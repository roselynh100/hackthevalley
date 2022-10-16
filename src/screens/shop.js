import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Ingredient from '../components/Ingredient'

export default function Shop() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sale! Sale! We have produce! (and custom tasks in the future!)</Text>
        <ScrollView style={styles.ingredients}>
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AA8866'
    },
    wrapper: {
      margin: 25
    },
    currency: {
      alignItems: 'flex-end'
    },
    ingredients: {
      marginBottom: 20
    }
  })