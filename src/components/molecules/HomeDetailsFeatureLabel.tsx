import React from 'react';
import {IHomeFeature} from '../types';
import {Icon, Text, View} from '../atoms';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';

interface IProps {
  item: IHomeFeature;
}

export default function HomeDetailsFeatureLabel({
  item: {iconName, iconVector, title, available = true},
}: IProps) {
  const theme = useTheme();
  return (
    <View
      justifyContent="center"
      alignItems="center"
      style={{width: '33.3%'}}
      mt="xs">
      <Icon
        name={iconName}
        vector={iconVector}
        size={moderateScale(30)}
        color={theme.colors.black}
      />
      <Text size="sm">{title}</Text>
      <Text size="sm" variant="bold">
        {available ? 'Yes' : 'No'}
      </Text>
    </View>
  );
}
