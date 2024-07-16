import React from 'react';
import {ISettingSwitch} from '../types';
import {Icon, Text, View} from '../atoms';
import {Switch} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {moderateScale} from '../../helpers/metrics';

export default function ProfileSettingSwitchItem({
  title,
  iconName,
  iconVector,
  style,
  ...rest
}: ISettingSwitch) {
  const theme = useTheme();
  return (
    <View
      p="md"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      style={style}>
      <View flexDirection="row" alignItems="center" gap={6}>
        <View backgroundColor="primary" p="xs" style={{borderRadius: 5}}>
          <Icon
            name={iconName}
            vector={iconVector}
            size={moderateScale(20)}
            color={theme.colors.white}
          />
        </View>
        <Text size="sm" variant="medium">
          {title}
        </Text>
      </View>
      <Switch {...rest} thumbColor={theme.colors.gray3} trackColor={{
        false: theme.colors.gray5,
        true: theme.colors.success
      }} />
    </View>
  );
}
