import React, {useState} from 'react';
import {Text, View} from '../../atoms';
import {IFilter, IFilterOption} from '../../types';
import FilterOptionsContainer from './FilterOptionsContainer';
import useTheme from '../../../hooks/useTheme';
import LabeledIconInput from '../LabeledIconInput';
import {CustomSlider} from '../CustomSlider';

interface IProps {
  item: IFilter;
}

export default function FilterContainer({item}: IProps) {
  const [activeValue, setActiveValue] = useState<IFilterOption | undefined>(
    undefined,
  );

  const onSelect = (item: IFilterOption) => setActiveValue(item);
  const theme = useTheme();

  const renderFilters = () => {
    switch (item.type) {
      case 'slider': {
        return (
          <View style={{width: '100%'}} alignItems="center">
            <Text
              variant="medium"
              size="sm"
              style={{
                paddingHorizontal: theme.spacing.xs,
                width: '100%',
              }}>
              {item.title}
            </Text>
            <CustomSlider values={item.values} min={item.min} max={item.max} />
          </View>
        );
      }

      case 'input': {
        return (
          <View
            style={{
              paddingHorizontal: theme.spacing.xs,
            }}>
            <LabeledIconInput
              label={item.title}
              placeholder={`Enter ${item.title}`}
              labelColor="black"
            />
          </View>
        );
      }

      default: {
        return (
          <View>
            <Text
              variant="medium"
              size="sm"
              style={{
                paddingHorizontal: theme.spacing.xs,
              }}>
              {item.title}
            </Text>
            <FilterOptionsContainer
              options={item.options}
              onSelect={onSelect}
              active={activeValue}
            />
          </View>
        );
      }
    }
  };

  return <View gap={10}>{renderFilters()}</View>;
}
