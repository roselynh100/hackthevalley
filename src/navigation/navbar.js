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
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Roll') {
          iconName = focused ? "dice-multiple" : "dice-multiple-outline";
          color = focused ? "#439ce0" : "gray";
        } else if (route.name === 'Cookbook') {
          iconName = focused ? "book-open" : "book-open-outline";
          color = focused ? "#439ce0" : "gray";
        } else if (route.name === 'Tasks') {
          iconName = focused ? "sticker-check" : "sticker-check-outline";
          color = focused ? "#439ce0" : "gray";
        } else if (route.name === 'Shop') {
          iconName = focused ? "shopping" : "shopping-outline";
          color = focused ? "#439ce0" : "gray";
        } else if (route.name === 'Inventory') {
          iconName = focused ? "bag-personal" : "bag-personal-outline";
          color = focused ? "#439ce0" : "gray";
        }
      
        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Roll" component={Roll} />
      <Tab.Screen name="Cookbook" component={Cookbook} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Inventory" component={Inventory} />
    </Tab.Navigator>
  );
}