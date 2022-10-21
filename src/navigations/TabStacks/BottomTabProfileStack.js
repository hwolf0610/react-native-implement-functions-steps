import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeProfileScreen from '../../screens/Home/HomeProfileScreen';
import WelcomeScreen from '../../screens/NonAuth/WelcomeScreen';

const Stack = createStackNavigator();

export default function BottomTabProfileStack() {
  return (
    <Stack.Navigator initialRouteName="HomeProfileScreen">
      <Stack.Screen
        name="HomeProfileScreen"
        component={HomeProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
