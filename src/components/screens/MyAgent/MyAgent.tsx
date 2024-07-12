import React, {useEffect} from 'react';
import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {Header} from '../../organisms';
import {AgentsListTemplate} from '../../templates';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {getAgentsAsync} from '../../../redux/slices/referralAgents/referralAgentsThunks';

export default function MyAgent() {
  const {referralAgents} = useAppSelector(state => state.referralAgents);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAgentsAsync());
  }, []);
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="My Agent" />
        <AgentsListTemplate items={referralAgents} />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
