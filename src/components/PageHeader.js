import React from 'react'
import { StyleSheet, Text } from 'react-native'

const PageHeader = (props) => {
  return (
    <Text style={styles.title}>{props.title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10
  }
})

export default PageHeader