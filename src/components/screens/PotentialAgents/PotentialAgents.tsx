import React from 'react';
import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {Header} from '../../organisms';
import {IHeaderOption} from '../../types';
import {PotentialAgentsListTemplate} from '../../templates';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

export default function PotentialAgents() {
  const navigation = useNavigation<MainStackNavigation>();
  const headeroptions: IHeaderOption[] = [
    {
      id: 1,
      icon: 'filter',
      iconVector: 'Feather',
      onPress: () => navigation.navigate(SCREENS.POTENTIAL_AGENTS_FILTER),
    },
  ];

  const {potentialAgents} = useAppSelector(state => state.potentialAgents);

  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="Potential Agents" options={headeroptions} />
        <PotentialAgentsListTemplate items={potentialAgents} />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
