import {TextInputProps} from 'react-native';
import {Text, View, Icon, TextInput} from '../atoms';
import {IconVector} from '../types';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';
import {useState} from 'react';
import Apptheme from '../../styles/theme/theme';
import {DropdownMenu} from './Dropdown';

interface IProps extends TextInputProps {
  label: string;
  name: string;
  vector?: IconVector;
  leftIconName?: string;
  rightIconName?: string;
  showLabel?: boolean;
  labelColor?: keyof typeof Apptheme.colors;
  handleChange: (name: string, value: string | boolean) => any;
  isVisible?: boolean;
  close?: () => any;
  options?: string[];
}

export default function LabledDropdownInput({
  label,
  vector,
  leftIconName,
  rightIconName,
  showLabel = true,
  multiline,
  labelColor = 'white',
  handleChange,
  isVisible,
  close,
  options = [],
  style,
  name,
  ...rest
}: IProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <View style={{width: '100%'}} gap={6}>
      {showLabel && (
        <Text color={labelColor} size="sm" variant="semibold">
          {label}
        </Text>
      )}
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p="lg"
        style={{
          width: '100%',
          borderWidth: 1.5,
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

      <DropdownMenu
        items={options}
        handleSelect={option => {
          handleChange(name, option);
        }}
        open={isVisible as boolean}
        close={close as () => any}
      />
    </View>
  );
}
