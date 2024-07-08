import React from 'react';
import {FlatList} from 'react-native';
import {IMyReferral} from '../types';
import MyReferralsCard from './MyReferralsCard';

interface IProps {
  items: IMyReferral[];
}

export default function MyReferralsList({items}: IProps) {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <MyReferralsCard item={item} />}
    />
  );
}
