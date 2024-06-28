import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../constants/screens';
import {AuthStackNavigationProp} from '../../navigation/types';
import {BlurContainer, Button, Text, View} from '../atoms';
import {ActiveLineText, LabeledIconInput} from '../molecules';

export default function ForgotPasswordForm() {
  const navigation = useNavigation<AuthStackNavigationProp>();

  const onPress = () => {
    navigation.navigate(SCREENS.CHANGE_PASSWORD);
  };
  return (
    <BlurContainer>
      <View p="lg" flex={1}>
        <View justifyContent="space-between" flex={0.7}>
          <ActiveLineText active size="lg">
            Forgot Password
          </ActiveLineText>
          <Text color="gray2">
            Enter your email for the verification process, we will send 4 digits
            code to your email.
          </Text>
          <LabeledIconInput
            label="Email Address"
            placeholder="Enter your email"
            leftIconName="mail"
          />
          <Button label="Continue" onPress={onPress} />
        </View>
      </View>
    </BlurContainer>
  );
}
