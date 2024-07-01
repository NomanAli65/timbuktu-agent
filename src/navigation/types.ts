import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

// STACK NAVIGATION - AUTH
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

// TABS
export type MainTabsParamsList = {
  Home: undefined;
};
export type TabScreensProp = BottomTabScreenProps<MainTabsParamsList>;
export type TabStackNavigation = BottomTabNavigationProp<MainTabsParamsList>;

// STACK NAVIGATION - AUTHENTICATED
export type MainStackParamsList = {
  SearchFilters: undefined;
  MainTabs: undefined;
};

export type MainStackScreensProp = StackScreenProps<MainStackParamsList>;
export type MainStackNavigation = StackNavigationProp<MainStackParamsList>;

// DRAWER
export type DrawerParmasList = {
  MainStack: undefined;
  MyTransactions: undefined;
  MyProperties: undefined;
  MyClients: undefined;
  MyDocuments: undefined;
  AdsCenter: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;
};
