import React from 'react';
import {FlatList} from 'react-native';
import {IAgentDetails} from '../types';
import {AgentCard} from '../molecules';

interface IProps {
  items: IAgentDetails[];
}
export default function AgentsList({items}: IProps) {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <AgentCard details={item} />}
    />
  );
}
