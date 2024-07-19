import {DimensionValue, TextInputProps} from 'react-native';
import {Text, View, Icon, TextInput} from '../atoms';
import {IconVector} from '../types';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';
import {useState} from 'react';
import Apptheme, {FontFamily} from '../../styles/theme/theme';

interface IProps extends TextInputProps {
  label: string;
  vector?: IconVector;
  leftIconName?: string;
  rightIconName?: string;
  showLabel?: boolean;
  labelColor?: keyof typeof Apptheme.colors;
  width?: DimensionValue;
}

export default function UnderlinedLabeledInput({
  label,
  vector,
  leftIconName,
  rightIconName,

  multiline,
  labelColor = 'gray2',
  width = '100%',
  style,
  ...rest
}: IProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  return (
    <View style={{width}} gap={2}>
      <Text color={labelColor} size="xs" variant="medium">
        {label}
      </Text>

      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        pb="xs"
        style={{
          width: '100%',
          borderBottomWidth: 1,
          borderColor: isFocused ? theme.colors.primary : theme.colors.gray2,
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
          <TextInput
            onFocus={onFocus}
            onBlur={onBlur}
            multiline={multiline}
            style={[
              style,
              multiline
                ? {
                    height: 100,
                    textAlignVertical: 'top',
                    overflow: 'scroll',
                  }
                : {},
              {color: theme.colors.black},
            ]}
            {...rest}
          />

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
