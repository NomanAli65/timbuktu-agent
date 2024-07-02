import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import View from './View';

export default function BottomTabBarPadding() {
  const height = useBottomTabBarHeight();

  return (
    <View
      style={{
        paddingTop: height,
      }}
    />
  );
}
