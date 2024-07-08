import React from 'react';
import {IReferralAgent} from '../types';
import {View} from '../atoms';
import {ReferralAgentsList} from '../organisms';

interface IProps {
  items: IReferralAgent[];
}

export default function ReferralAgentsListTemplate({items}: IProps) {
  return (
    <View flex={1}>
      <ReferralAgentsList items={items} />
    </View>
  );
}
