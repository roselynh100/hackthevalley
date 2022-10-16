import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from '@rneui/themed'

const Ingredient = (props) => {
  return (
    <View>
      <Card>
        <Text style={styles.title}>{props.name}</Text>
        <Card.Image
          style={styles.image}
          source={{uri: props.image}}
        />
        <Text style={styles.owned}>Owned: {props.owned}</Text>
        <Button>{'Buy for $' + props.price}</Button>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    margin: 10
  },
  owned: {
    marginVertical: 10
  }
})

export default Ingredient