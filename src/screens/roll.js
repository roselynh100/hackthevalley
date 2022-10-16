
import React, { useState, useContext } from 'react'
import { Image, Modal, Text, StyleSheet, Pressable, View } from 'react-native'
import Recipes from '../data/recipes.json'
import PageHeader from '../components/PageHeader'
import { rollCurrency } from '../components/context'
import storage from '../data/storage'

const recipes = Recipes

function random() {
  return Math.floor(Math.random()*recipes.recipes.length)
}

const Roll = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [recipeNumber, setRecipeNumber] = useState(0)
  const [rollCur, setRollCur] = useContext(rollCurrency)

  function choose() {
    if (rollCur > 0) {
      number = random()
      storage.save({
        key: recipes.recipes[number]?.name,
        data: {
          unlocked: true
        }
      })
      return number
    } else {
      return 0
    }
  }
  
  function visible() {
    if (rollCur > 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <View>
      {/* <Text>Win a new recipe!</Text> */}
      <PageHeader title='Roll' />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>You received the recipe for {recipes.recipes[recipeNumber]?.name}!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Sweet!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Image source={{
        uri: 'https://www.pngkey.com/png/full/277-2775656_splash-gumball-machine-regular-gumball-machine-clipart-free.png'}}
        style={styles.image} />
      <View style={styles.buttonGroup}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {setRecipeNumber(choose()), setModalVisible(visible()), rollCur>0 ? setRollCur(rollCur-1) : null}}
        >
          <Text style={styles.textStyle}>ROLL</Text>
        </Pressable>
      
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {setRollCur(5)}}
        >{/* Can remove once a way to get stars is implemented */}
          <Text style={styles.textStyle}>Add More</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  image: {
    height: 300,
    width: 150,
    margin: 20,
    left: '27%'
  },
  buttonGroup: {
    left: '25%',
    width: 200,
    marginTop: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "purple",
    marginBottom: 30
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default Roll