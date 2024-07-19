import React from 'react';
import {ShadowContainer, View} from '../atoms';
import {ITabMenuItem} from '../types';
import {TabMenuItem} from '../molecules';
import Apptheme from '../../styles/theme/theme';

interface IProps {
  items: ITabMenuItem[];
  activeId: number;
  onSelect: (item: ITabMenuItem) => void;
  backgroundColor?: keyof typeof Apptheme.colors;
  activeColor?: keyof typeof Apptheme.colors;
  textColor?: keyof typeof Apptheme.colors;
  activeTextColor?: keyof typeof Apptheme.colors;
}

export default function TabbedMenu({
  items = [],
  activeId,
  onSelect,
  backgroundColor = 'primary',
  activeColor,
  activeTextColor = 'primary',
  textColor = 'white',
}: IProps) {
  return (
    <View
      backgroundColor={backgroundColor}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      p="md"
      rounded>
      {items.map(item => (
        <TabMenuItem
          item={item}
          key={item.id}
          active={activeId === item.id}
          onSelect={onSelect}
          activeColor={activeColor}
          activeTextColor={activeTextColor}
          textColor={textColor}
        />
      ))}
    </View>
  );
}
