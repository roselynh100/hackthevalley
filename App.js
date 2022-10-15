import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import TodoPage from './components/TodoPage'
import Currency from './components/Currency'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>hello</Text>
        <Currency />
        <TodoPage />
        <Button title='asd' size='sm' />
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
  }
})

export default App