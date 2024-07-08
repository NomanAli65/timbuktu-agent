import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {IMessages, Message} from '../components/types';

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
  Listings: undefined;
  PostProperty: undefined;
  MyTransactionsTab: undefined;
  Profile: undefined;
};
export type TabScreensProp = BottomTabScreenProps<MainTabsParamsList>;
export type TabStackNavigation = BottomTabNavigationProp<MainTabsParamsList>;

// STACK NAVIGATION - AUTHENTICATED
export type MainStackParamsList = {
  MainTabs: undefined;
  SearchFilters: undefined;
  Messaging: undefined;
  Messages: {
    messages: Message[];
  };
  Notifications: undefined;
  PropertyDetails: undefined;
  ReferralAgentDetails: undefined;
  LeadDetails: undefined;
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

export type DrawerNavigation = DrawerNavigationProp<DrawerParmasList>;
