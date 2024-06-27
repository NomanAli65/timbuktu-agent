import useTheme from '../../hooks/useTheme';
import Apptheme, {FontFamily} from '../../styles/theme/theme';
import {ICustomTextProps} from '../atoms/Text';
import {Text, View} from '../atoms';

interface IProps extends ICustomTextProps {
  active?: boolean;
  textColor?: keyof typeof Apptheme.colors;
  size?: keyof typeof Apptheme.fontSizes;
  variant?: keyof typeof FontFamily;
}

export default function ActiveLineText({
  children,
  active,
  style,
  textColor = 'white',
  size = 'body',
  ...rest
}: IProps) {
  const theme = useTheme();
  return (
    <View style={{alignSelf: 'flex-start'}}>
      <Text
        {...rest}
        variant={active ? 'bold' : 'regular'}
        color={textColor}
        size={size}>
        {children}
      </Text>
      <View
        style={{
          borderWidth: active ? 2 : 0,
          borderColor: theme.colors.primary,
          borderRadius: 10,
        }}
        mt="xs"
      />
    </View>
  );
}
