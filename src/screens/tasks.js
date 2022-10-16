import React from 'react'
import { Text, View } from 'react-native'
import PageHeader from '../components/PageHeader'
import TodoPage from '../components/TodoPage'

const Tasks = () => {
  return (
    <View>
      <PageHeader title='Tasks' />
      {/* <Text>Tasks to do!!!</Text>
      <Text>Wah to someone!</Text> */}
      <TodoPage />
    </View>
  )
}

export default Tasks