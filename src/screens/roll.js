import React, { useState } from 'react';
import { Modal, Text, StyleSheet, Pressable, View } from "react-native";
import Recipes from '../data/recipes.json';

const recipes = Recipes;

function random(){
  return Math.floor(Math.random()*recipes.recipes.length);
}

function choose(){
  //remember to put if statement where if moneys are high enough we good
  number = random();
  return number;
}

function Roll() {
  const [modalVisible, setModalVisible] = useState(false);
  const [recipeNumber, setRecipeNumber] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Win a new recipe!</Text>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>You received the recipe for {recipes.recipes[recipeNumber]}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Sweet!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setRecipeNumber(choose()), setModalVisible(true)}}
      >
        <Text style={styles.textStyle}>ROLL</Text>
      </Pressable>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "purple",
    marginBottom: 100
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
});

export default Roll;