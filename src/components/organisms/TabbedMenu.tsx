import React from 'react';
import {ShadowContainer, View} from '../atoms';
import {ITabMenuItem} from '../types';
import {TabMenuItem} from '../molecules';

interface IProps {
  items: ITabMenuItem[];
  activeId: number;
  onSelect: (item: ITabMenuItem) => void;
}

export default function TabbedMenu({items = [], activeId, onSelect}: IProps) {
  return (
    <View
      backgroundColor="gray7"
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
        />
      ))}
    </View>
  );
}
