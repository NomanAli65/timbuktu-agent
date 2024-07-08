import React from 'react';
import {Icon, Text, View} from '../atoms';
import {IconVector} from '../types';
import {moderateScale} from '../../helpers/metrics';

interface IProps {
  iconName: string;
  vector?: IconVector;
  label: string;
}

export default function LabelWithIcon({iconName, vector, label}: IProps) {
  return (
    <View flexDirection="row" alignItems="center" gap={4}>
      <Icon name={iconName} vector={vector} size={moderateScale(20)} />
      <Text size="xs" variant="medium">
        {label}
      </Text>
    </View>
  );
}
