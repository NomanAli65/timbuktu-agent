import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigator from './MainNavigator';
import {useLoginUserMutation} from '../redux/slices/auth/authApi';

const AppNavigation = () => {
  const [_, {data}] = useLoginUserMutation({
    fixedCacheKey: 'authentication',
  });

  console.log({data});

  return (
    <NavigationContainer>
      {data ? <MainNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
