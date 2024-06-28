import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigator from './MainNavigator';
import {useAppSelector} from '../hooks/useAppSelector';

const AppNavigation = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
