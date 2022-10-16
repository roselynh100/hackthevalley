import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Chip } from '@rneui/themed'

const Currency = () => {

  const starNum = 2
  const coinNum = 15

  return (
    <View style={styles.chipContainer}>
      <Chip title={starNum + ' Stars'} style={styles.chip} />
      <Chip title={coinNum + ' Coins'} />
    </View>
  )
}

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 160,
    paddingVertical: 20
    }
})

export default Currency