import React from 'react';
import {TextInput} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {FontFamily} from '../../styles/theme/theme';

export default function MessageInput() {
  const theme = useTheme();
  return (
    <TextInput
      placeholder="Message here"
      placeholderTextColor={theme.colors.gray8}
      style={{
        borderRadius: 30,
        backgroundColor: theme.colors.gray7,
        padding: theme.spacing.lg,
        fontFamily: FontFamily.medium,
      }}
    />
  );
}
