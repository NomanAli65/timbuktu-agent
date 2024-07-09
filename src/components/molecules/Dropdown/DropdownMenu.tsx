import React from 'react';
import {Text, View} from '../../atoms';
import useTheme from '../../../hooks/useTheme';
import {TouchableOpacity} from 'react-native';

interface IProps {
  items: string[];
  handleSelect: (option: string) => any;
}

export default function DropdownMenu({items, handleSelect}: IProps) {
  const theme = useTheme();
  return (
    <View
      style={{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: theme.colors.gray4,
        backgroundColor: theme.colors.primary,
        position: 'absolute',
        top: 40,
        width: '100%',
        borderBottomLeftRadius: 10,
        zIndex: 999,
        borderBottomRightRadius: 10,
      }}>
      {items.map(item => (
        <TouchableOpacity onPress={() => handleSelect(item)}>
          <Text style={{padding: theme.spacing.md}} color="gray4" size="sm">
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
