import React from 'react';
import {IMyLead} from '../types';
import {View} from '../atoms';

import {MyLeadsList} from '../organisms';

interface IProps {
  items: IMyLead[];
}

export default function MyLeadsListTemplate({items}: IProps) {
  return (
    <View flex={1}>
      <MyLeadsList items={items} />
    </View>
  );
}
