import React, {useState} from 'react';
import {ITabMenuItem} from '../types';
import {View} from '../atoms';
import {TabbedMenu} from '../organisms';

interface IProps {
  items: ITabMenuItem[];
  activeId: number;
  onSelect: (item: ITabMenuItem) => any;
}

export default function TabbedListingMenuTemplate({
  items,
  activeId,
  onSelect,
}: IProps) {
  return (
    <View p="md">
      <TabbedMenu items={items} activeId={activeId} onSelect={onSelect} />
    </View>
  );
}
