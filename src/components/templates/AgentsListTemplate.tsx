import React from 'react';
import {IAgentDetails} from '../types';
import {View} from '../atoms';
import {AgentsList} from '../organisms';

interface IProps {
  items: IAgentDetails[];
}

export default function AgentsListTemplate({items}: IProps) {
  return (
    <View flex={1}>
      <AgentsList items={items} />
    </View>
  );
}
