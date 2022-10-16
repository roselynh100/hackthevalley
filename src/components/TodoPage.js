import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CheckBox } from '@rneui/themed'

const TodoPage = () => {
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)
  const [check5, setCheck5] = useState(false)

  return (
    <View style={styles.checkboxWrapper}>
      <CheckBox 
        title='Exercise'
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />
      <CheckBox 
        title='Drink water'
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />
      <CheckBox 
        title='Talk to a loved one'
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />
      <CheckBox 
        title='Get some fresh air'
        checked={check4}
        onPress={() => setCheck4(!check4)}
      />
      <CheckBox 
        title='Buy mega stonks'
        checked={check5}
        onPress={() => setCheck5(!check5)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxWrapper: {
    marginHorizontal: 20
  }
})

export default TodoPage
