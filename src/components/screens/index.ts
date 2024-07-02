import Onboarding from './auth/Onboarding';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import ChangePassword from './auth/ChangePassword';

import {Home, SearchFilters} from './home';
import Listings from './listings';
import MyTransactionsTab from './MyTransactionsTab';
import Profile from './Profile';
import PostProperty from './PostProperty';
import Messaging from './Messaging';
import Messages from './Messages';

import MyTransactions from './drawer/MyTransactions';
import MyProperties from './drawer/MyProperties';
import MyClients from './drawer/MyClients';
import MyDocuments from './drawer/MyDocuments';
import AdsCenter from './drawer/AdsCenter';
import PrivacyPolicy from './drawer/PrivacyPolicy';
import TermsConditions from './drawer/TermsCondition';

export {
  // AUTH
  Onboarding,
  Login,
  Register,
  ForgotPassword,
  ChangePassword,

  // TABS
  Home,
  Listings,
  PostProperty,
  MyTransactionsTab,
  Profile,

  // DRAWER
  MyTransactions,
  MyProperties,
  MyClients,
  MyDocuments,
  AdsCenter,
  PrivacyPolicy,
  TermsConditions,

  // MAIN STACK
  Messaging,
  Messages,
  SearchFilters,
};
