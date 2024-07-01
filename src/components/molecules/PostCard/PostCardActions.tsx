import React from 'react';
import {Icon, Text, View} from '../../atoms';
import {moderateScale} from '../../../helpers/metrics';
import useTheme from '../../../hooks/useTheme';

export default function PostCardActions() {
  const theme = useTheme();
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      pv="md"
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.gray5,
      }}>
      <View flexDirection="row" alignItems="center" gap={4}>
        <Icon
          name="like"
          size={moderateScale(24)}
          color={theme.colors.gray2}
          vector="EvilIcons"
        />
        <Text color="gray2" size="sm">
          Like
        </Text>
      </View>
      <View flexDirection="row" alignItems="center" gap={4}>
        <Icon
          name="comment"
          size={moderateScale(24)}
          vector="EvilIcons"
          color={theme.colors.gray2}
        />
        <Text color="gray2" size="sm">
          Comment
        </Text>
      </View>
    </View>
  );
}
