import React from 'react';
import View, {IView} from './View';

interface IProps extends IView {}

export default function ScreenContainer({
  children,
  backgroundColor,
  ...rest
}: IProps) {
  return (
    <View flex={1} backgroundColor={backgroundColor} {...rest}>
      {children}
    </View>
  );
}
