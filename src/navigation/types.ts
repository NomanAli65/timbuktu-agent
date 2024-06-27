import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type AuthStackParamsList = {
  Login: undefined;
  Onboarding: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OtpVerification: undefined;
  ChangePassword: undefined;
};

export type AuthScreenProp = StackScreenProps<AuthStackParamsList>;
export type AuthStackNavigationProp = StackNavigationProp<AuthStackParamsList>;
