import React, { useState, useEffect } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { Button, Card } from '@rneui/themed'
import storage from '../data/storage'

const Ingredient = (props) => {

  const fadeAnimation = new Animated.Value(0)
  const [quantity, setQuantity] = useState(0)

  storage.load({
    key: props.name
  })
    .then(ret => {
      if (ret.quantity) setQuantity(ret.quantity)
    })
    .catch(err => {
      // console.warn(err.message)R
    })

  function fadeInAndOut() {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()

    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start()
    }, 2000)

    storage.save({
      key: props.name,
      data: {
        quantity: quantity
      }
    })
  }

  return (
    <View>
      <Animated.View style={[
        styles.overlay,
        {opacity: fadeAnimation}
      ]}>
        <Text>Purchased {props.name}</Text>
      </Animated.View>
      <Card>
        <Text style={styles.title}>{props.name}</Text>
        <Card.Image
          style={styles.image}
          source={{uri: props.image}}
        />
        <Text style={styles.owned}>Owned: {quantity}</Text>
        <Button onPress={fadeInAndOut}>{'Buy for $' + props.price}</Button>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: '25%',
    top: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    borderRadius: 20,
    zIndex: 2,
    backgroundColor: 'white'
  },
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