import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomTabHomeStack from './TabStacks/BottomTabHomeStack';
import BottomTabProfileStack from './TabStacks/BottomTabProfileStack';
import {COLORS} from '../utils/Colors';

const Tab = createBottomTabNavigator();
export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={BottomTabHomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                source={
                  focused
                    ? require('../../assets/img/activeTab_home.png')
                    : require('../../assets/img/inactiveTab_home.png')
                }
              />
              <Text style={styles.tabBarTextStyle}>Home</Text>
            </View>
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {display: 'flex'},
        }}
      />
      <Tab.Screen
        name="Profile"
        component={BottomTabProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                source={
                  focused
                    ? require('../../assets/img/activeTab_profile.png')
                    : require('../../assets/img/inactiveTab_profile.png')
                }
              />
              <Text style={styles.tabBarTextStyle}>Profile</Text>
            </View>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarItemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 5,
    paddingTop: 6,
    borderTopWidth: 2,
    borderTopColor: COLORS.homeCardBorderColor,
  },
  tabBarTextStyle: {
    color: 'white',
  },
});
