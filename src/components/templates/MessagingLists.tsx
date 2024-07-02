import React from 'react';
import {View} from '../atoms';
import {FlatList} from 'react-native';
import {IMessages} from '../types';
import {MessagesListItem} from '../molecules';

interface IProps {
  items: IMessages[];
}

export default function MessagingList({items}: IProps) {
  return (
    <View flex={1} p="md">
      <FlatList
        data={items}
        renderItem={({item}) => <MessagesListItem item={item} key={item.id} />}
      />
    </View>
  );
}
