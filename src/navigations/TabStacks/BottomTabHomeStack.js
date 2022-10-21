import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeMainScreen from '../../screens/Home/HomeMainScreen';
import WelcomeScreen from '../../screens/NonAuth/WelcomeScreen';

const Stack = createStackNavigator();

export default function BottomTabHomeStack(props) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(props.route);
    if (routeName === 'interview') {
      props.navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      props.navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [props.navigation, props.route]);

  return (
    <Stack.Navigator initialRouteName="HomeMainScreen">
      <Stack.Screen
        name="HomeMainScreen"
        component={HomeMainScreen}
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
