import React from 'react';
import {Icon, Text, View} from '../atoms';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';

export default function PostTimeLabel() {
  const theme = useTheme();
  return (
    <View flexDirection="row" alignItems="center" gap={4}>
      <Icon
        vector="Fontisto"
        name="clock"
        size={moderateScale(14)}
        color={theme.colors.gray2}
      />
      <Text color="gray2" size="xs" variant="medium">
        2 hours ago
      </Text>
    </View>
  );
}
