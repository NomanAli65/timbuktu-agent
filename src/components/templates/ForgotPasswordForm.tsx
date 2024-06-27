import {BlurContainer, Button, Text, View} from '../atoms';
import {ActiveLineText, LabeledIconInput} from '../molecules';
import {Form} from '../organisms';

export default function ForgotPasswordForm() {
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
          <Button label="Continue" />
        </View>
      </View>
    </BlurContainer>
  );
}
