import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
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

export type MainTabsParamsList = {
  Home: undefined;
};

export type MainStackParamsList = {
  Tabs: undefined;
};

export type TabScreensProp = BottomTabScreenProps<MainTabsParamsList>;
export type TabStackNavigation = BottomTabNavigationProp<MainTabsParamsList>;
