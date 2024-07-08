import React from 'react';
import {View} from '../atoms';
import {MyReferralsList} from '../molecules';
import {IMyReferral} from '../types';

interface IProps {
  items: IMyReferral[];
}

export default function MyReferralsListTemplate({items}: IProps) {
  return (
    <View flex={1}>
      <MyReferralsList items={items} />
    </View>
  );
}
