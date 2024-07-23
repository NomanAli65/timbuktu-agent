import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigator, {MainStackNavigator} from './MainNavigator';
import {useAppSelector} from '../hooks/useAppSelector';

const AppNavigation = () => {
  const {isLoggedIn, type} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
