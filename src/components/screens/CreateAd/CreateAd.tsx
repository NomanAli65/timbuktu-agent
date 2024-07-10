import React from 'react';
import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {CreateAdTemplate} from '../../templates';

export default function CreateAd() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <CreateAdTemplate />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
