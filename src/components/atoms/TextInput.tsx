import React from 'react';
import {type TextInputProps, TextInput as RNTextInput} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {FontFamily} from '../../styles/theme/theme';

interface IProps extends TextInputProps {}

export default function TextInput({style, ...rest}: IProps) {
  const theme = useTheme();

  return (
    <RNTextInput
      style={[
        {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          fontFamily: FontFamily.semibold,
          flex: 1,
          fontSize: theme.fontSizes.sm,
        },
        style,
      ]}
      placeholderTextColor={theme.colors.gray2}
      {...rest}
    />
  );
}
