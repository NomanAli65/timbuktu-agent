import React from 'react';
import {Pressable} from 'react-native';
import {Text, View} from '../atoms';
import {ITabMenuItem} from '../types';

interface IProps {
  item: ITabMenuItem;
  active?: boolean;
  onSelect: (item: ITabMenuItem) => any;
}

export default function TabMenuItem({item, active = false, onSelect}: IProps) {
  const onItemPress = () => {
    onSelect(item);
    item.onPress();
  };
  return (
    <Pressable onPress={onItemPress} style={{flex: 1}}>
      <View
        backgroundColor={active ? 'white' : undefined}
        pv="md"
        ph="lg"
        style={{borderRadius: 10}}
        alignItems="center">
        <Text size="xs" variant="semibold" color={active ? 'primary' : 'black'}>
          {item.label}
        </Text>
      </View>
    </Pressable>
  );
}
