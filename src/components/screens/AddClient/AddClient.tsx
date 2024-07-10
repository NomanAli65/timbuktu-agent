import React from 'react';
import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {AddClientTemplate} from '../../templates';

export default function AddClient() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <AddClientTemplate />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
