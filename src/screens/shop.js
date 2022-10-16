import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PageHeader from '../components/PageHeader'
import Ingredient from '../components/Ingredient'
import Ingredients from '../data/ingredients.json'

const Shop = () => {

  const ingredientsArray = Ingredients.ingredients

  const allIngredients = ingredientsArray.map(({name, image, price}, index) =>
    <Ingredient key={index} name={name} image={image} price={price} />
  )

  return (
    <View>
      {/* <Text>Sale! Sale! We have produce and custom tasks!</Text> */}
      <PageHeader title='Shop' />
      <ScrollView style={styles.ingredients}>
        {allIngredients}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ingredients: {
    marginBottom: 60
  }
})

export default Shop