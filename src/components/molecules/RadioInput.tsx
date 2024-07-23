// CustomRadioInput.js

import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {Text, View} from '../atoms';

interface IProps {
  label: string;
  selected: boolean;
  onSelect: () => any;
  containerStyles?: ViewStyle;
}

const CustomRadioInput = ({
  label,
  selected,
  onSelect,
  containerStyles,
}: IProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
      onPress={onSelect}>
      <View
        style={[
          styles.radioButton,
          {
            borderColor: selected ? theme.colors.primary : theme.colors.black,
          },
        ]}>
        {selected && (
          <View
            style={[
              styles.innerCircle,
              {backgroundColor: theme.colors.primary},
            ]}
          />
        )}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
});

export default CustomRadioInput;
