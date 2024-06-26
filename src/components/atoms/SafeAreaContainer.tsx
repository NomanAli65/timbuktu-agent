import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View, {IView} from './View';
import {PropsWithChildren} from 'react';
import theme from '../../styles/theme/theme';

interface IProps extends PropsWithChildren {
  backgroundColor: keyof typeof theme.colors;
}

export default function SafeAreaContainer({
  children,
  backgroundColor = 'white',
}: IProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      backgroundColor={backgroundColor}>
      {children}
    </View>
  );
}
