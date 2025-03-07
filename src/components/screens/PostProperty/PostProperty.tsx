import React from 'react';
import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {PostPropertyFormTemplate} from '../../templates';

export default function PostProperty() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <PostPropertyFormTemplate />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
