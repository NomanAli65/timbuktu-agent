import React from 'react';
import {
  FadeInContainer,
  KeyboardAvoidingContainer,
  SafeAreaContainer,
  ScreenContainer,
  View,
} from '../../atoms';
import {ChangePasswordAuthForm} from '../../templates';
import useKeyboard from '../../../hooks/useKeyboard';

export default function ChangePassword() {
  const {isOpen} = useKeyboard();
  return (
    <KeyboardAvoidingContainer>
      <ScreenContainer>
        <SafeAreaContainer>
          <View
            flex={1}
            justifyContent={isOpen ? 'flex-start' : 'flex-end'}
            alignItems="center">
            <View style={{width: '95%', flex: isOpen ? 1 : 0.7}}>
              <FadeInContainer>
                <ChangePasswordAuthForm />
              </FadeInContainer>
            </View>
          </View>
        </SafeAreaContainer>
      </ScreenContainer>
    </KeyboardAvoidingContainer>
  );
}
