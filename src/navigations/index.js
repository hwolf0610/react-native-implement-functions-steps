import React, {useState, useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import NonAuthStack from './NonAuthStack';
import MainStack from './MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import StatusBarComponent from '../components/StatusBar/Index';

export default function RootNavigator() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {user ? <MainStack /> : <NonAuthStack />}
      </NavigationContainer>
      <Toast />
      <StatusBarComponent color="#fff" currentStyle="dark-content" />
    </NativeBaseProvider>
  );
}
