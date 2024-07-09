// CheckboxGroup.js

import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text, View} from '../atoms';
import useTheme from '../../hooks/useTheme';

interface IProps {
  title?: string;
  options: string[];
  selectedOptions: string[];
  onSelect: (options: string[]) => any;
}

const CheckboxGroup = ({title, options, selectedOptions, onSelect}: IProps) => {
  const theme = useTheme();
  const toggleOption = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      onSelect(selectedOptions.filter(item => item !== option));
    } else {
      onSelect([...selectedOptions, option]);
    }
  };

  return (
    <View gap={6}>
      {title && (
        <Text color="black" size="sm" variant="semibold">
          *{title}
        </Text>
      )}
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={styles.checkboxContainer}
          onPress={() => toggleOption(option)}>
          <View style={styles.checkbox}>
            {selectedOptions.includes(option) && (
              <View
                style={[
                  styles.checkedBox,
                  {backgroundColor: theme.colors.primary},
                ]}
              />
            )}
          </View>
          <Text size="sm">{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkedBox: {
    height: 12,
    width: 12,
    borderRadius: 3,
  },
});

export default CheckboxGroup;
