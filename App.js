import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import TodoPage from './components/TodoPage'
import Currency from './components/Currency'
import Ingredient from './components/Ingredient'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.currency}>
          <Currency style={styles.currency} />
        </View>
        {/* <TodoPage /> */}
        <ScrollView style={styles.ingredients}>
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
          <Ingredient name='Rice' image='https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png' owned='2' price='2' />
        </ScrollView>
      </View>
    </View>
  )
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

export default App