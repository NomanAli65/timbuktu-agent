import React from 'react';
import {SafeAreaContainer, ScreenContainer, Text, View} from '../../atoms';

export default function Listings() {
  return (
    <ScreenContainer>
      <SafeAreaContainer>
        <View flex={1}>
          <Text>Listing</Text>
        </View>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
