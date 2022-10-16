import React from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { Button, Card } from '@rneui/themed'

const Ingredient = (props) => {

  const fadeAnimation = new Animated.Value(0)

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
        <Text style={styles.owned}>Owned: {props.owned}</Text>
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