import React from 'react';
import {ISetting} from '../types';
import {Icon, Text, View} from '../atoms';
import {moderateScale} from '../../helpers/metrics';
import {TouchableOpacity} from 'react-native';
import useTheme from '../../hooks/useTheme';

export default function ProfileSettingItem({
  iconName,
  iconVector,
  title,
  onPress,
  style,
  ...rest
}: ISetting) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          padding: theme.spacing.md,
        },
        style,
      ]}
      onPress={onPress}
      {...rest}>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
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
        <Icon
          name="keyboard-arrow-right"
          size={moderateScale(20)}
          vector="MaterialIcons"
          color={theme.colors.black}
        />
      </View>
    </TouchableOpacity>
  );
}
