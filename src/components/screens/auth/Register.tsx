import {useIsFocused} from '@react-navigation/native';
import {
  FadeInContainer,
  KeyboardAvoidingContainer,
  SafeAreaContainer,
  ScreenContainer,
  View,
} from '../../atoms';
import {SignupForm} from '../../templates';
import useKeyboard from '../../../hooks/useKeyboard';

export default function Register() {
  const isFocused = useIsFocused();
  const {isOpen} = useKeyboard();
  return (
    isFocused && (
      <KeyboardAvoidingContainer>
        <ScreenContainer>
          <SafeAreaContainer>
            <View flex={1} justifyContent="flex-end" alignItems="center">
              <View flex={isOpen ? 1 : 0.8} style={{width: '90%'}}>
                <FadeInContainer>
                  <SignupForm />
                </FadeInContainer>
              </View>
            </View>
          </SafeAreaContainer>
        </ScreenContainer>
      </KeyboardAvoidingContainer>
    )
  );
}
