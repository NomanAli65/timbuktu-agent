import React from 'react';
import {FlatList} from 'react-native';
import {IMyClient} from '../types';
import MyClientCard from './MyClientsCard';

interface IProps {
  items: IMyClient[];
}

export default function MyClientsList({items}: IProps) {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <MyClientCard details={item} />}
    />
  );
}
