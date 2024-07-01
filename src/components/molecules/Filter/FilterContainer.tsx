import React, {useState} from 'react';
import {Text, View} from '../../atoms';
import {IFilter, IFilterOption} from '../../types';
import FilterOptionsContainer from './FilterOptionsContainer';
import Slider from '@react-native-community/slider';
import useTheme from '../../../hooks/useTheme';

interface IProps {
  item: IFilter;
}

export default function FilterContainer({item}: IProps) {
  const theme = useTheme();
  const [activeValue, setActiveValue] = useState<IFilterOption | undefined>(
    undefined,
  );

  const onSelect = (item: IFilterOption) => setActiveValue(item);

  return (
    <View gap={10}>
      <Text variant="medium" size="sm">
        {item.title}
      </Text>
      {item.type === 'slider' ? (
        <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme.colors.primary}
          maximumTrackTintColor={theme.colors.gray}
          thumbTintColor={theme.colors.primary}
        />
      ) : (
        <FilterOptionsContainer
          options={item.options}
          onSelect={onSelect}
          active={activeValue}
        />
      )}
    </View>
  );
}
