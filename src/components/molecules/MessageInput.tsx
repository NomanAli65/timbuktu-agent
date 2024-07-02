import React from 'react';
import {TextInput} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {FontFamily} from '../../styles/theme/theme';
import useKeyboard from '../../hooks/useKeyboard';

export default function MessageInput() {
  const theme = useTheme();
  const {isOpen} = useKeyboard();
  return (
    <TextInput
      placeholder="Message here"
      placeholderTextColor={theme.colors.gray8}
      style={{
        borderRadius: isOpen ? 0 : 30,
        backgroundColor: theme.colors.gray7,
        padding: theme.spacing.lg,
        fontFamily: FontFamily.medium,
      }}
    />
  );
}
