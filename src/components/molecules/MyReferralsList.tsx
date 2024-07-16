import React from 'react';
import {FlatList} from 'react-native';
import {IMyReferral} from '../types';
import MyReferralsCard from './MyReferralsCard';
import { BottomTabBarHeight } from '../../constants/values';

interface IProps {
  items: IMyReferral[];
}

export default function MyReferralsList({items}: IProps) {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <MyReferralsCard item={item} />}
      contentContainerStyle={{
        paddingBottom: BottomTabBarHeight
      }}
    />
  );
}
