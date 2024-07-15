import {useWindowDimensions} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {Text, View} from '../atoms';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import shortenNumber from '../../helpers/shortenNumber';

interface IProps {
  values: number[];
  min: number;
  max: number;
}

export const CustomSlider = ({values, min, max}: IProps) => {
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
          borderRadius: 5,
        }}
        justifyContent="center"
        alignItems="center"
        backgroundColor="primary"
        p="xxs">
        <Text color="white" size="xxs" variant="semibold">
          {shortenNumber(currentValue)}
        </Text>
      </View>
    </View>
  );
  return (
    <MultiSlider
      values={values}
      min={min}
      max={max}
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
