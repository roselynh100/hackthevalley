import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Roll from '../screens/roll';
import Cookbook from '../screens/cookbook';
import Tasks from '../screens/tasks';
import Shop from '../screens/shop';
import Inventory from '../screens/inventory';


const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Roll" component={Roll} />
      <Tab.Screen name="Cookbook" component={Cookbook} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Inventory" component={Inventory} />
    </Tab.Navigator>
  );
}