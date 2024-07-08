import {Pressable, PressableProps, ViewStyle} from 'react-native';
import Text from './Text';
import useTheme from '../../hooks/useTheme';

interface IProps extends PressableProps {
  label: string;
  variant?: 'primary';
}

export default function Button({
  label,
  variant = 'primary',
  style,
  ...rest
}: IProps) {
  const theme = useTheme();

  return (
    <Pressable
      {...rest}
      style={[
        {
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.xl,
          borderRadius: 10,
          width: '100%',
        },
        style as ViewStyle,
      ]}>
      <Text color="white" textAlign="center" variant="medium" size="sm">
        {label}
      </Text>
    </Pressable>
  );
}
