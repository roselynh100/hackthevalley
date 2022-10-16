import React, { useState } from 'react'
import Currency from './src/components/Currency'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import NavBar from './src/navigation/navbar'
import { rollCurrency } from './src/components/context'
import Money from './src/data/money.json'

const App = () => {
  const [rollCur, setRollCur] = useState(Money.starNum)
  return (
    <rollCurrency.Provider value={[rollCur, setRollCur]}>
      <NavigationContainer>
        <Currency />
        <NavBar />
      </NavigationContainer>
    </rollCurrency.Provider>
  )
}

export default App