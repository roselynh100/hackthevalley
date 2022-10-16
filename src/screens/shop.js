import React from 'react'
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native'
import Ingredient from '../components/Ingredient'

const Shop = () => {
  return (
    <View>
      <Text>Sale! Sale! We have produce and custom tasks!</Text>
      <ScrollView style={styles.ingredients}>
        <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' price='2' />
        {/* <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
        <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
        <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredients: {
    marginBottom: 30
  }
})

export default Shop