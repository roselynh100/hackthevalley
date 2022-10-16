import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Roll from '../screens/roll'
import Cookbook from '../screens/cookbook'
import Tasks from '../screens/tasks'
import Shop from '../screens/shop'
import Inventory from '../screens/inventory'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      // screenOptions={({route}) => {
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName

      //     if (route.name === 'Roll') {
      //       iconName = focused
      //         ? 'dice-multiple'
      //         : 'dice-multiple-outline'
      //     } else if (route.name === 'Cookbook') {
      //       iconName = focused
      //       ? 'book-open-page-variant'
      //       : 'book-open-page-variant-outline'
      //     }

      //     return <MaterialCommunityIcons name={iconName} size={size} color={color} />
      //   }
      // }}>
      >
      <Tab.Screen name="Roll" component={Roll} />
      <Tab.Screen name="Cookbook" component={Cookbook} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Inventory" component={Inventory} />
    </Tab.Navigator>
  );
}