import React from 'react';
import {
  Icon,
  SafeAreaContainer,
  ScreenContainer,
  Text,
  View,
} from '../../atoms';
import {IFilter} from '../../types';
import Filters from '../../templates/Filters';
import {moderateScale} from '../../../helpers/metrics';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../../hooks/useAppSelector';
import useTheme from '../../../hooks/useTheme';

const listingFilters: IFilter[] = [
  {
    title: 'Property Type',
    options: [
      {id: 1, label: 'Condo'},
      {id: 2, label: 'Townhouse'},
      {id: 3, label: 'Single family'},
    ],
    type: 'default',
  },
  {
    title: 'Bedroom',
    options: [
      {id: 1, label: '1'},
      {id: 2, label: '2'},
      {id: 3, label: '3'},
      {id: 4, label: '4'},
      {id: 5, label: '5'},
      {id: 6, label: '6'},
      {id: 7, label: '7'},
    ],
  },
  {
    title: 'Bathroom',
    options: [
      {id: 1, label: '1'},
      {id: 2, label: '2'},
      {id: 3, label: '3'},
      {id: 4, label: '4'},
      {id: 5, label: '5'},
      {id: 6, label: '6'},
      {id: 7, label: '7'},
    ],
    type: 'default',
  },

  {
    title: 'Living Square feet',
    options: [
      {id: 1, label: '1'},
      {id: 2, label: '2'},
      {id: 3, label: '3'},
    ],
    type: 'slider',
  },

  {
    title: 'LOT Size',
    options: [
      {id: 1, label: '1'},
      {id: 2, label: '2'},
      {id: 3, label: '3'},
    ],
    type: 'slider',
  },

  {
    title: 'Pool',
    options: [
      {id: 1, label: 'Yes'},
      {id: 2, label: 'No'},
      {id: 3, label: "Doesn't matter"},
    ],
    type: 'default',
  },

  {
    title: 'HOA',
    options: [
      {id: 1, label: '$150'},
      {id: 2, label: 'N/A'},
    ],
    type: 'default',
  },
];

const agentsFilter: IFilter[] = [
  {
    title: 'Rating',
    values: [0, 5],
    min: 0,
    max: 5,
    type: 'slider',
  },
  {
    title: 'Years in service',
    values: [0, 100000],
    min: 0,
    max: 100000,
    type: 'slider',
  },
  {
    title: 'Annual Sales Volume',
    values: [0, 100000],
    min: 0,
    max: 100000,
    type: 'slider',
  },

  {
    title: 'Location',
    type: 'input',
  },
  {
    title: 'Primary Service areas',
    type: 'input',
  },
];

export default function SearchFilters() {
  const navigation = useNavigation();
  const {filter} = useAppSelector(state => state.searchFilters);
  const theme = useTheme()

  

  return (
    <ScreenContainer>
      <SafeAreaContainer>
        <View
          flex={1}
          backgroundColor="white"
          rounded
          style={{position: 'relative'}}>
          <View p="md" style={{position: 'relative'}}>
            <Text variant="semibold" textAlign="center">
              Search & Filters
            </Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{position: 'absolute', right: 10, top: 10, zIndex: 10}}>
              <Icon name="close" size={moderateScale(26)} color={theme.colors.gray4} />
            </TouchableOpacity>
          </View>

          <Filters
            filters={filter === 'agent' ? agentsFilter : listingFilters}
          />
        </View>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
