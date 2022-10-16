import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Chip } from '@rneui/themed'

const Currency = () => {

  const starNum = 2
  const coinNum = 15

  return (
    <View style={styles.chipWrapper}>
      <View style={styles.chipContainer}>
        <Chip title={starNum + ' Stars'} style={styles.chip} />
        <Chip title={coinNum + ' Coins'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chipWrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 160,
    paddingVertical: 10
  }
})

export default Currency