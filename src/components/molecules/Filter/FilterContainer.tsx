import React, {useState} from 'react';
import {Text, View} from '../../atoms';
import {IFilter, IFilterOption} from '../../types';
import FilterOptionsContainer from './FilterOptionsContainer';
import useTheme from '../../../hooks/useTheme';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useWindowDimensions} from 'react-native';

interface IProps {
  item: IFilter;
}

export const CustomSlider = () => {
  const theme = useTheme();
  const {width} = useWindowDimensions();

  const SliderMarker = ({currentValue}: {currentValue: number}) => (
    <View
      style={{position: 'relative'}}
      justifyContent="center"
      alignItems="center">
      <View rounded backgroundColor="primary" style={{height: 20, width: 20}} />
      <View
        style={{
          position: 'absolute',
          bottom: -30,
          zIndex: 99,
          width: 28,
          height: undefined,
          aspectRatio: 1,
          borderRadius: 28 / 2,
        }}
        justifyContent="center"
        alignItems="center"
        backgroundColor="primary"
        p="xxs">
        <Text color="white" size="xxs" variant="semibold">
          {currentValue}
        </Text>
      </View>
    </View>
  );
  return (
    <MultiSlider
      values={[0, 50]}
      min={0}
      max={50}
      isMarkersSeparated={true}
      sliderLength={width * 0.85}
      trackStyle={{
        backgroundColor: theme.colors.gray,
      }}
      selectedStyle={{
        backgroundColor: theme.colors.primary,
      }}
      containerStyle={{marginBottom: theme.spacing.lg}}
      customMarkerLeft={e => <SliderMarker currentValue={e.currentValue} />}
      customMarkerRight={e => <SliderMarker currentValue={e.currentValue} />}
    />
  );
};

export default function FilterContainer({item}: IProps) {
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
        <View
          style={{width: '100%'}}
          justifyContent="center"
          alignItems="center">
          <CustomSlider />
        </View>
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
