import {useIsFocused} from '@react-navigation/native';
import {
  FadeInContainer,
  SafeAreaContainer,
  ScreenContainer,
  View,
} from '../../atoms';
import {ForgotPasswordForm} from '../../templates';

export default function ForgotPassword() {
  const isFocused = useIsFocused();

  return (
    isFocused && (
      <ScreenContainer>
        <SafeAreaContainer>
          <View flex={1} justifyContent="flex-end" alignItems="center">
            <View style={{width: '95%', flex: 0.7}}>
              <FadeInContainer>
                <ForgotPasswordForm />
              </FadeInContainer>
            </View>
          </View>
        </SafeAreaContainer>
      </ScreenContainer>
    )
  );
}
