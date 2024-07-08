import React from 'react';
import {FlatList} from 'react-native';
import {IPropertyDetails} from '../types';
import {PropertyListingCard} from '../molecules';

interface IProps {
  items: IPropertyDetails[];
}

export default function PropertyListing({items}: IProps) {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <PropertyListingCard item={item} />}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
    />
  );
}
