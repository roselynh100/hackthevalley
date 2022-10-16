import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Chip } from '@rneui/themed'
import { rollCurrency } from './context'
import { Button } from '@rneui/base'
import Money from '../data/money.json'

const Currency = () => {

  const [rollCur, setRollCur] = useContext(rollCurrency);

  return (
    <View style={styles.chipWrapper}>
      <View style={styles.chipContainer}>
        <Chip title={rollCur  + ' Stars'} style={styles.chip} />
        <Chip title={Money.coinNum + ' Coins'} />
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