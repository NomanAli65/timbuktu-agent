import {Pressable, PressableProps, ViewStyle} from 'react-native';
import Text from './Text';
import useTheme from '../../hooks/useTheme';
import {TextStyle} from 'react-native';
import Apptheme from '../../styles/theme/theme';

interface IProps extends PressableProps {
  label: string;
  variant?: 'primary';
  backgroundColor?: keyof typeof Apptheme.colors;
  textColor?: keyof typeof Apptheme.colors;
}

export default function Button({
  label,
  variant = 'primary',
  style,
  backgroundColor = 'primary',
  textColor = 'white',
  ...rest
}: IProps) {
  const theme = useTheme();

  return (
    <Pressable
      {...rest}
      style={[
        {
          backgroundColor: theme.colors[backgroundColor],
          padding: theme.spacing.xl,
          borderRadius: 20,
          width: '100%',
        },
        style as ViewStyle,
      ]}>
      <Text color={textColor} textAlign="center" variant="medium" size="sm">
        {label}
      </Text>
    </Pressable>
  );
}
