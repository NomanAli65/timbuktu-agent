import React from 'react';
import {
  KeyboardAvoidingContainer,
  SafeAreaContainer,
  ScreenContainer,
} from '../../atoms';
import {AddClientTemplate} from '../../templates';

export default function AddClient() {
  return (
    <KeyboardAvoidingContainer>
      <ScreenContainer backgroundColor="white">
        <SafeAreaContainer>
          <AddClientTemplate />
        </SafeAreaContainer>
      </ScreenContainer>
    </KeyboardAvoidingContainer>
  );
}
