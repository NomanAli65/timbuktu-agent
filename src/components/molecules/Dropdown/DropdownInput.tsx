import React from 'react';
import {Icon, Text, View} from '../../atoms';
import useTheme from '../../../hooks/useTheme';
import {moderateScale} from '../../../helpers/metrics';
import {TouchableOpacity} from 'react-native';

interface IProps {
  label: string;
  selectedValue?: string;
  toggleDropdown: () => void;
}

export default function DropdownInput({
  label,
  toggleDropdown,
  selectedValue,
}: IProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={toggleDropdown}>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        rounded
        p="xs"
        style={{borderWidth: 1.5, borderColor: theme.colors.black, height: 50}}>
        <Text size="sm">{selectedValue || label}</Text>
        <Icon
          name="keyboard-arrow-down"
          vector="MaterialIcons"
          size={moderateScale(22)}
        />
      </View>
    </TouchableOpacity>
  );
}
