import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import theme, {FontFamily} from '../../styles/theme/theme';

interface IProps extends TextProps {
  size?: keyof typeof theme.fontSizes;
  color?: keyof typeof theme.colors;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  variant?: keyof typeof FontFamily;
}

export default function Text({
  size,
  color,
  textAlign,
  children,
  style,
  variant,
  ...rest
}: IProps) {
  console.log({variant});

  return (
    <RNText
      {...rest}
      style={[
        {
          color: color ? theme.colors[color] : theme.colors.black,
          textAlign,
          fontSize: size ? theme.fontSizes[size] : theme.fontSizes.body,
          fontFamily: variant ? FontFamily[variant] : FontFamily.regular,
        },
        style,
      ]}>
      {children}
    </RNText>
  );
}
