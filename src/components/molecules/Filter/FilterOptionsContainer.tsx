import React from 'react';
import {ScrollView} from 'react-native';
import {IFilterOption} from '../../types';
import FitlerOption from './FilterOption';

interface IProps {
  options: IFilterOption[];
  onSelect: (item: IFilterOption) => any;
  active?: IFilterOption;
}

export default function FilterOptionsContainer({
  options,
  onSelect,
  active,
}: IProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 10}}>
      {options.map(option => (
        <FitlerOption
          label={option.label}
          active={active === option}
          key={option.id}
          onPress={() => onSelect(option)}
        />
      ))}
    </ScrollView>
  );
}
