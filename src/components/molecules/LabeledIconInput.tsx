import {TextInputProps} from 'react-native';
import {Text, View, Icon, TextInput} from '../atoms';
import {IconVector} from '../types';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';
import {useState} from 'react';

interface IProps extends TextInputProps {
  label: string;
  vector?: IconVector;
  leftIconName?: string;
  rightIconName?: string;
}

export default function LabeledIconInput({
  label,
  vector,
  leftIconName,
  rightIconName,
  ...rest
}: IProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  return (
    <View style={{width: '100%'}} gap={6}>
      <Text color="white" size="sm">
        {label}
      </Text>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p="lg"
        style={{
          width: '100%',
          borderWidth: 2,
          borderColor: isFocused ? theme.colors.primary : theme.colors.gray4,
          borderRadius: 10,
        }}>
        <View flexDirection="row" alignItems="center" gap={5} flex={1}>
          {leftIconName && (
            <Icon
              vector={vector}
              name={leftIconName}
              size={moderateScale(20)}
              color={theme.colors.gray2}
            />
          )}
          <TextInput onFocus={onFocus} onBlur={onBlur} {...rest} />

          {rightIconName && (
            <Icon
              vector={vector}
              name={rightIconName}
              size={moderateScale(20)}
              color={theme.colors.gray2}
            />
          )}
        </View>
      </View>
    </View>
  );
}
