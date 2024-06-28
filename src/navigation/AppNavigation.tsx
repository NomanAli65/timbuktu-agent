import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigator from './MainNavigator';
const AppNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
