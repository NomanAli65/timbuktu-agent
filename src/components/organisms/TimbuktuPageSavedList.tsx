import React from 'react';
import {FlatList} from 'react-native';
import TimbuktuPageSavedCard from './TimbuktuPageSavedCard';
import {ITimbuktuSavedCard} from '../types';

export default function TimbuktuPageSavedList() {
  const items: ITimbuktuSavedCard[] = [
    {
      id: 123213,
      time: '11:30',
      status: 'Active',
    },
    {
      id: 123214,
      time: '11:30',
      status: 'Connected',
    },
    {
      id: 123215,
      time: '11:30',
      status: 'Active',
    },
    {
      id: 123216,
      time: '11:30',
      status: 'Active',
    },
    {
      id: 123218,
      time: '11:30',
      status: 'Active',
    },
  ];
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <TimbuktuPageSavedCard details={item} />}
    />
  );
}
