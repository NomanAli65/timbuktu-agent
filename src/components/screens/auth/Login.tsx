import {useIsFocused} from '@react-navigation/native';
import {
  FadeInContainer,
  KeyboardAvoidingContainer,
  SafeAreaContainer,
  ScreenContainer,
  View,
} from '../../atoms';
import {LoginForm} from '../../templates';
import useKeyboard from '../../../hooks/useKeyboard';

export default function Login() {
  const isFocused = useIsFocused();
  const {isOpen} = useKeyboard();

  return (
    isFocused && (
      <KeyboardAvoidingContainer>
        <ScreenContainer>
          <SafeAreaContainer>
            <View flex={1} justifyContent="flex-end" alignItems="center">
              <View style={{width: '95%', flex: isOpen ? 1 : 0.7}}>
                <FadeInContainer>
                  <LoginForm />
                </FadeInContainer>
              </View>
            </View>
          </SafeAreaContainer>
        </ScreenContainer>
      </KeyboardAvoidingContainer>
    )
  );
}
