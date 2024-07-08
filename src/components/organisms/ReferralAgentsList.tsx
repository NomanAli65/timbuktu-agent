import React from 'react';
import {FlatList} from 'react-native';
import {IReferralAgent} from '../types';
import {ReferralAgentCard} from '../molecules';

interface IProps {
  items: IReferralAgent[];
}
export default function ReferralAgentsList({items}: IProps) {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <ReferralAgentCard details={item} />}
    />
  );
}
