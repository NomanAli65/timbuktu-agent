import React from 'react';
import {Text, View} from '../../atoms';
import {Pressable, PressableProps} from 'react-native';

interface IProps extends PressableProps {
  label: string;
  active?: boolean;
}

export default function FitlerOption({label, active, ...rest}: IProps) {
  return (
    <Pressable {...rest}>
      <View
        ph="lg"
        pv="md"
        backgroundColor={active ? 'primary' : 'gray3'}
        style={{borderRadius: 5}}>
        <Text size="sm" color={active ? 'white' : 'gray2'}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
