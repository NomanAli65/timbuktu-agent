import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {Login} from '../screens/auth';
import SCREENS from '../constants/screens';
import {AuthStackParamsList} from './types';

const Stack = createStackNavigator<AuthStackParamsList>();

const options: StackNavigationOptions = {
  headerShown: false,
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
