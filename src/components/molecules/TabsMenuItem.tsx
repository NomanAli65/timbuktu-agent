import React from 'react';
import {Pressable} from 'react-native';
import {Text, View} from '../atoms';
import {ITabMenuItem} from '../types';
import Apptheme from '../../styles/theme/theme';
interface IProps {
  item: ITabMenuItem;
  active?: boolean;
  onSelect: (item: ITabMenuItem) => any;
  activeColor?: keyof typeof Apptheme.colors;
  textColor?: keyof typeof Apptheme.colors;
  activeTextColor?: keyof typeof Apptheme.colors;
}

export default function TabMenuItem({
  item,
  active = false,
  onSelect,
  activeColor,
  textColor,
  activeTextColor,
}: IProps) {
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
        <Text
          size="xs"
          variant="semibold"
          color={active ? activeTextColor : textColor}>
          {item.label}
        </Text>
      </View>
    </Pressable>
  );
}
