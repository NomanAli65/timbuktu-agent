import React from 'react';
import {View} from '../../atoms';
import LabelWithIcon from '../LabelWithIcon';

export default function AdStats() {
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <LabelWithIcon
        iconName="people-group"
        vector="FontAwesome6"
        label="Reached: 22k"
        iconColor="primary"
      />

      <LabelWithIcon
        iconName="chain"
        vector="FontAwesome"
        label="Engaged: 12k"
        iconColor="primary"
      />
    </View>
  );
}
