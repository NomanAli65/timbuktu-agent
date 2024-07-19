import {useNavigation} from '@react-navigation/native';
import {BlurContainer, Button, Text, View} from '../atoms';
import {ActiveLineText, LabeledIconInput} from '../molecules';
import {AuthStackNavigationProp} from '../../navigation/types';
import SCREENS from '../../constants/screens';
import useKeyboard from '../../hooks/useKeyboard';

export default function ChangePasswordAuthForm() {
  const navigation = useNavigation<AuthStackNavigationProp>();
  const {isOpen} = useKeyboard();
  return (
    <BlurContainer>
      <View p="lg" flex={1}>
        <View justifyContent="space-between" flex={isOpen ? 1 : 0.8}>
          <ActiveLineText active size="lg">
            Forgot Password
          </ActiveLineText>
          <Text color="gray2" size="sm">
            Enter your email for the verification process, we will send 4 digits
            code to your email.
          </Text>
          <LabeledIconInput
            label="Password"
            placeholder="Enter new password"
            leftIconName="lock"
            rightIconName="eye"
            vector="Feather"
          />
          <LabeledIconInput
            label="Confirm password"
            placeholder="Enter confirm password"
            leftIconName="lock"
            rightIconName="eye"
            vector="Feather"
          />
          <Button
            label="Continue"
            onPress={() => navigation.navigate(SCREENS.LOGIN)}
          />
        </View>
      </View>
    </BlurContainer>
  );
}
