import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {
  Login,
  Onboarding,
  Register,
  ForgotPassword,
} from '../components/screens';
import SCREENS from '../constants/screens';
import {AuthStackParamsList} from './types';

const Stack = createStackNavigator<AuthStackParamsList>();

const options: StackNavigationOptions = {
  headerShown: false,
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name={SCREENS.ONBOARDING} component={Onboarding} />
      <Stack.Group
        screenOptions={{
          cardStyle: {
            backgroundColor: 'transparent',
          },
          presentation: 'transparentModal',
          animationEnabled: false,
        }}>
        <Stack.Screen name={SCREENS.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.REGISTER} component={Register} />
        <Stack.Screen
          name={SCREENS.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
