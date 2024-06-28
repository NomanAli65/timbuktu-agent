import React from 'react';
import View, {IView} from './View';
import useTheme from '../../hooks/useTheme';

export default function ShadowContainer({children, style, ...rest}: IView) {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          shadowColor: theme.colors.shadow,
          backgroundColor: theme.colors.white,
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 1,
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}
