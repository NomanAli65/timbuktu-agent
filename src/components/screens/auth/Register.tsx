import {useIsFocused} from '@react-navigation/native';
import {
  FadeInContainer,
  SafeAreaContainer,
  ScreenContainer,
  View,
} from '../../atoms';
import {SignupForm} from '../../templates';

export default function Register() {
  const isFocused = useIsFocused();
  return (
    isFocused && (
      <ScreenContainer>
        <SafeAreaContainer>
          <View flex={1} justifyContent="flex-end" alignItems="center">
            <View flex={0.8} style={{width: '90%'}}>
              <FadeInContainer>
                <SignupForm />
              </FadeInContainer>
            </View>
          </View>
        </SafeAreaContainer>
      </ScreenContainer>
    )
  );
}
