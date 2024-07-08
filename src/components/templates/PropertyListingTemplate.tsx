import React from 'react';
import {View} from '../atoms';
import {PropertyListing} from '../organisms';
import {IPropertyDetails} from '../types';

interface IProps {
  listings: IPropertyDetails[];
}

export default function PropertyListingTemplate({listings}: IProps) {
  return (
    <View flex={1}>
      <PropertyListing items={listings} />
    </View>
  );
}
