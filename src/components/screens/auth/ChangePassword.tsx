import React from 'react';
import {
  FadeInContainer,
  SafeAreaContainer,
  ScreenContainer,
  View,
} from '../../atoms';
import {ChangePasswordAuthForm} from '../../templates';

export default function ChangePassword() {
  return (
    <ScreenContainer>
      <SafeAreaContainer>
        <View flex={1} justifyContent="flex-end" alignItems="center">
          <View style={{width: '95%', flex: 0.7}}>
            <FadeInContainer>
              <ChangePasswordAuthForm />
            </FadeInContainer>
          </View>
        </View>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
