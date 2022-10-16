import React, { useState, useEffect, useContext } from 'react'
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { Card } from '@rneui/themed'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import storage from '../data/storage'
import { rollCurrency } from '../components/context'

const Recipe = (props) => {
  const [unlocked, setUnlocked] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [rollCur, setRollCur] = useContext(rollCurrency)

  useEffect(() => {
    storage.load({
      key: props.name
    })
      .then(ret => {
        // console.log('sldkfjlsdjfsd')
        if (ret.unlocked) {
          setUnlocked(true)
          // console.log('setting unlocked for', props.name)
        }
      })
      .catch(err => {
        console.warn(err.message)
      })  
  }, [rollCur])

  return (
    <View style={{marginHorizontal: 40}}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.info}>{props.info}</Text>
          <Button title='Close' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Card>
        {unlocked ?
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.title}>{props.name}</Text>
            <Card.Image
              style={styles.image}
              source={{uri: props.image}}
            />
          </Pressable>
        :
          <View style={styles.locked}>
            <MaterialCommunityIcons name='lock-question' size={50} color='grey' />
          </View>
        }
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 30,
    padding: 30,
    top: '25%'
  },
  info: {
    marginTop: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    margin: 10
  },
  locked: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  }
})

export default Recipe