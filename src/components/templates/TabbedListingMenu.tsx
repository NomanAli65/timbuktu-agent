import React, {useState} from 'react';
import {ITabMenuItem} from '../types';
import {View} from '../atoms';
import {TabbedMenu} from '../organisms';
import Apptheme from '../../styles/theme/theme';

interface IProps {
  items: ITabMenuItem[];
  activeId: number;
  onSelect: (item: ITabMenuItem) => any;
  backgroundColor?: keyof typeof Apptheme.colors;
  activeColor?: keyof typeof Apptheme.colors;
  textColor?: keyof typeof Apptheme.colors;
  activeTextColor?: keyof typeof Apptheme.colors;
}

export default function TabbedListingMenuTemplate({
  items,
  activeId,
  onSelect,
  backgroundColor = 'primary',
  activeColor = 'white',
  textColor = 'white',
  activeTextColor = 'primary',
}: IProps) {
  return (
    <View p="md">
      <TabbedMenu
        items={items}
        activeId={activeId}
        onSelect={onSelect}
        backgroundColor={backgroundColor}
        activeColor={activeColor}
        textColor={textColor}
        activeTextColor={activeTextColor}
      />
    </View>
  );
}
