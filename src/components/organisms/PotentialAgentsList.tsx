import React from 'react';
import {FlatList} from 'react-native';
import {IPotentialAgent} from '../types';
import {PotentialAgentCard} from '../molecules';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarHeight} from '../../constants/values';
import {Button} from '../atoms';

interface IProps {
  items: IPotentialAgent[];
}
export default function PotentialAgentsList({items}: IProps) {
  const insets = useSafeAreaInsets();
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <PotentialAgentCard details={item} />}
      contentContainerStyle={{
        paddingBottom: insets.bottom + BottomTabBarHeight,
        flexGrow: 1,
      }}
    />
  );
}
