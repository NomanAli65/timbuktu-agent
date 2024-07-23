import React, {useState} from 'react';
import {Text, View} from '../../atoms';
import {IFilter, IFilterOption} from '../../types';
import FilterOptionsContainer from './FilterOptionsContainer';
import useTheme from '../../../hooks/useTheme';
import LabeledIconInput from '../LabeledIconInput';
import {CustomSlider} from '../CustomSlider';
import {LabeledDropdownInput} from '..';
import {TouchableOpacity} from 'react-native';

interface IProps {
  item: IFilter;
}

export default function FilterContainer({item}: IProps) {
  const [activeValue, setActiveValue] = useState<IFilterOption | undefined>(
    undefined,
  );

  const onSelect = (item: IFilterOption) => setActiveValue(item);
  const theme = useTheme();

  // ==================================================
  // TODO: This needs to be corrected in BETA.
  // A quick fix for the QA. Need to make this reusable.
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);
  const [dropdownValue, setDropdownValue] = useState('');
  const handleSelect = (item: string) => {
    setDropdownValue(item);
    toggleVisible();
  };
  console.log({dropdownValue});
  // ====================================================

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

      case 'dropdown': {
        return (
          <TouchableOpacity onPress={toggleVisible}>
            <View pointerEvents="none">
              <LabeledDropdownInput
                placeholder={item.title}
                label={item.title}
                name={item.title}
                labelColor="black"
                handleChange={(name, value) => handleSelect(value)}
                options={['Buyer', 'Seller', 'Residential', 'Commercial']}
                value={dropdownValue}
                isVisible={isVisible}
                close={toggleVisible}
              />
            </View>
          </TouchableOpacity>
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
