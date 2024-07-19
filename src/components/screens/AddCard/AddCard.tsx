import {
  KeyboardAvoidingContainer,
  SafeAreaContainer,
  ScreenContainer,
} from '../../atoms';

import {AddCardTemplate} from '../../templates';

export default function AddCard() {
  return (
    <KeyboardAvoidingContainer>
      <ScreenContainer backgroundColor="white">
        <SafeAreaContainer>
          <AddCardTemplate />
        </SafeAreaContainer>
      </ScreenContainer>
    </KeyboardAvoidingContainer>
  );
}
