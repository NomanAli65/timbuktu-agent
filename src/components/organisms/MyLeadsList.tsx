import React from 'react';
import {FlatList} from 'react-native';
import {IMyLead} from '../types';
import {MyLeadsCard} from '../molecules';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { BottomTabBarHeight } from '../../constants/values';

interface IProps {
  items: IMyLead[];
}
export default function MyLeadsList({items}: IProps) {
  const insets = useSafeAreaInsets();
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <MyLeadsCard details={item} />}
      contentContainerStyle={{
        paddingBottom: insets.bottom + BottomTabBarHeight,
        flexGrow: 1,
      }}
    />
  );
}
