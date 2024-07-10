import React from 'react';
import {Icon, Text, View} from '../atoms';
import {IconVector} from '../types';
import {moderateScale} from '../../helpers/metrics';
import theme from '../../styles/theme/theme';

interface IProps {
  iconName: string;
  vector?: IconVector;
  label: string;
  iconColor?: keyof typeof theme.colors;
}

export default function LabelWithIcon({
  iconName,
  vector,
  label,
  iconColor = 'black',
}: IProps) {
  return (
    <View flexDirection="row" alignItems="center" gap={8}>
      <Icon
        name={iconName}
        vector={vector}
        size={moderateScale(20)}
        color={theme.colors[iconColor]}
      />
      <Text size="xs" variant="medium">
        {label}
      </Text>
    </View>
  );
}
