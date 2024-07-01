import React from 'react';
import {Avatar, Text, View} from '../../atoms';
import {TextInput} from 'react-native';
import useTheme from '../../../hooks/useTheme';
import {FontFamily} from '../../../styles/theme/theme';

export default function PostCardComment() {
  const theme = useTheme();
  return (
    <View
      flexDirection="row"
      alignItems="center"
      backgroundColor="gray3"
      p="xs"
      mt="md"
      rounded>
      <Avatar width={40} />
      <TextInput
        placeholder="Write a comment..."
        style={{
          flex: 1,
          marginLeft: theme.spacing.xs,
          fontFamily: FontFamily.regular,
          color: theme.colors.black,
        }}
        placeholderTextColor={theme.colors.gray2}
      />
    </View>
  );
}
