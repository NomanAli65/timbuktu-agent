import React from 'react';
import {IPotentialAgent} from '../types';
import {Button, View} from '../atoms';

import {PotentialAgentsList} from '../organisms';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';

interface IProps {
  items: IPotentialAgent[];
}

export default function PotentialAgentsListTemplate({items}: IProps) {
  const navigation = useNavigation<MainStackNavigation>();
  return (
    <View flex={1}>
      <PotentialAgentsList items={items} />
      <View p="md">
        <Button
          label="Setup property"
          onPress={() => navigation.navigate(SCREENS.ADD_CLIENT)}
        />
      </View>
    </View>
  );
}
