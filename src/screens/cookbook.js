import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Recipe from '../components/Recipe'
import Recipes from '../data/recipes2.json'

const Cookbook = () => {

  const recipesArray = Recipes.recipes

  const allRecipes = recipesArray.map(({name, image, info}, index) =>
    <Recipe key={index} name={name} image={image} info={info} />
  )

  return (
    <View>
      {/* <Text>Recipes Owned!</Text> */}
      <ScrollView style={styles.recipes}>
        {allRecipes}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  recipes: {
    marginBottom: 30
  }
})

export default Cookbook