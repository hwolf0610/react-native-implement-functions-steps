import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabViewNavigator from './TabViewNavigator';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Dashboard" component={TabViewNavigator} />
    </Drawer.Navigator>
  );
}
