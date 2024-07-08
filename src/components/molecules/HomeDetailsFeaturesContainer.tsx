import React from 'react';
import {Text, View} from '../atoms';
import {IHomeFeature} from '../types';
import HomeDetailsFeatureLabel from './HomeDetailsFeatureLabel';

interface IProps {
  title: string;
  items: IHomeFeature[];
}

export default function HomeDetailsFeaturesContainer({title, items}: IProps) {
  return (
    <View mt="md">
      <Text textAlign="center" variant="semibold">
        {title}
      </Text>
      <View
        flexDirection="row"
        style={{flexWrap: 'wrap'}}
        mt="md"
        alignItems="center">
        {items.map(item => (
          <HomeDetailsFeatureLabel item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
}
