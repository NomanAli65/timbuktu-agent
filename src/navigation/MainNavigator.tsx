import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import SCREENS from '../constants/screens';
import {
  AdsCenter,
  Home,
  Listings,
  Messages,
  Messaging,
  MyClients,
  MyDocuments,
  MyProperties,
  MyTransactionsTab,
  Notifications,
  PostProperty,
  PrivacyPolicy,
  Profile,
  PropertyDetails,
  SearchFilters,
  TermsConditions,
  LeadDetails,
  ReferralAgentDetails,
  EditProfile,
  ChangePasswordProfile,
  MyTimbuktu,
  ClientDetails,
  AddClient,
  AddCard,
  CreateAd,
  AdPreview,
  AdPostedSuccess,
  Documents,
  MyAgent,
  PotentialAgents,
  MyProfileDetails,
  PotentialAgentProfile,
  PotentialAgentsFilter,
} from '../components/screens';
import {
  DrawerParmasList,
  MainStackParamsList,
  MainTabsParamsList,
} from './types';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {TabHeader} from '../components/organisms';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import theme from '../styles/theme/theme';
import {Icon, Text, View} from '../components/atoms';
import {moderateScale} from '../helpers/metrics';
import {RouteProp} from '@react-navigation/native';
import {BottomTabBarHeight, UserTypes} from '../constants/values';
import {useAppSelector} from '../hooks/useAppSelector';
import {Platform} from 'react-native';
import useKeyboard from '../hooks/useKeyboard';

const Stack = createStackNavigator<MainStackParamsList>();
const Tab = createBottomTabNavigator<MainTabsParamsList>();
const Drawer = createDrawerNavigator<DrawerParmasList>();

const getTabBarOptions = (
  route: RouteProp<MainTabsParamsList, keyof MainTabsParamsList>,
  isOpen: boolean,
): BottomTabNavigationOptions => ({
  tabBarStyle: {
    borderTopWidth: 0,
    shadowColor:
      Platform.OS === 'ios' ? theme.colors.shadow : theme.colors.black,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: BottomTabBarHeight,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    display: isOpen ? 'none' : 'flex',
  },
  tabBarShowLabel: false,
  tabBarIcon(props) {
    let iconName = '';

    switch (route.name) {
      case SCREENS.HOME: {
        iconName = 'home';
        break;
      }

      case SCREENS.LISTINGS: {
        iconName = 'file-document';
        break;
      }

      case SCREENS.POST_PROPERTY: {
        iconName = 'plus-circle';
        break;
      }

      case SCREENS.MY_TRANSACTIONS_TAB: {
        iconName = 'account-group';
        break;
      }

      case SCREENS.MY_AGENT: {
        iconName = 'account-group';
        break;
      }

      case SCREENS.PROFILE: {
        iconName = 'account';
        break;
      }
    }

    return (
      <Icon
        name={iconName}
        size={moderateScale(route.name === SCREENS.POST_PROPERTY ? 40 : 28)}
        vector="MaterialCommunityIcons"
        color={
          props.focused
            ? route.name === SCREENS.POST_PROPERTY
              ? theme.colors.primary
              : theme.colors.black
            : route.name === SCREENS.POST_PROPERTY
            ? theme.colors.primary
            : theme.colors.gray2
        }
      />
    );
  },
  header: () => {
    return <TabHeader />;
  },
});

function TabNavigator() {
  const {type} = useAppSelector(state => state.auth);
  const {isOpen} = useKeyboard();
  return (
    <Tab.Navigator screenOptions={({route}) => getTabBarOptions(route, isOpen)}>
      <Tab.Screen name={SCREENS.HOME} component={Home} />
      <Tab.Screen
        name={SCREENS.LISTINGS}
        component={Listings}
        options={{
          headerShown: type === UserTypes.Agent,
        }}
      />

      {type === UserTypes.Agent && (
        <>
          <Tab.Screen
            name={SCREENS.POST_PROPERTY}
            component={PostProperty}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name={SCREENS.MY_TRANSACTIONS_TAB}
            component={MyTransactionsTab}
            options={{headerShown: false}}
          />
        </>
      )}

      {type === UserTypes.Member && (
        <Tab.Screen
          name={SCREENS.MY_AGENT}
          component={MyAgent}
          options={{headerShown: false}}
        />
      )}

      <Tab.Screen
        name={SCREENS.PROFILE}
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const mainOptions: StackNavigationOptions = {
  headerShown: false,
};
export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={mainOptions}>
      <Stack.Screen name={SCREENS.DRAWER} component={MainNavigator} />

      <Stack.Screen
        name={SCREENS.SEARCH_FILTERS}
        component={SearchFilters}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen name={SCREENS.MESSAGING} component={Messaging} />
      <Stack.Screen name={SCREENS.MESSAGES} component={Messages} />
      <Stack.Screen name={SCREENS.NOTIFICATIONS} component={Notifications} />
      <Stack.Screen
        name={SCREENS.PROPERTY_DETAILS}
        component={PropertyDetails}
      />
      <Stack.Screen
        name={SCREENS.REFERRAL_AGENT_DETAILS}
        component={ReferralAgentDetails}
      />
      <Stack.Screen name={SCREENS.LEAD_DETAILS} component={LeadDetails} />
      <Stack.Screen name={SCREENS.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen
        name={SCREENS.CHANGE_PASSWORD_PROFILE}
        component={ChangePasswordProfile}
      />
      <Stack.Screen name={SCREENS.MY_TIMBUKTU_PAGE} component={MyTimbuktu} />
      <Stack.Screen name={SCREENS.CLIENT_DETAILS} component={ClientDetails} />
      <Stack.Screen name={SCREENS.ADD_CLIENT} component={AddClient} />
      <Stack.Screen name={SCREENS.ADD_CARD} component={AddCard} />
      <Stack.Screen name={SCREENS.CREATE_AD} component={CreateAd} />
      <Stack.Screen name={SCREENS.AD_PREVIEW} component={AdPreview} />
      <Stack.Screen
        name={SCREENS.AD_POST_SUCCESS}
        component={AdPostedSuccess}
      />
      <Stack.Screen name={SCREENS.DOCUMENTS} component={Documents} />
      <Stack.Screen
        name={SCREENS.POTENTIAL_AGENT_PROFILE}
        component={PotentialAgentProfile}
      />
      <Stack.Screen
        name={SCREENS.POTENTIAL_AGENTS_FILTER}
        component={PotentialAgentsFilter}
      />
      <Stack.Screen
        name={SCREENS.MY_PROFILE_DETAILS}
        component={MyProfileDetails}
      />
    </Stack.Navigator>
  );
};

const getDrawerOptions = (
  route: RouteProp<DrawerParmasList, keyof DrawerParmasList>,
): DrawerNavigationOptions => ({
  headerShown: false,
  drawerActiveBackgroundColor: theme.colors.primary,
  drawerStyle: {
    paddingVertical: 12,
  },
  drawerLabel(props) {
    let result = route.name.replace(/([a-z])([A-Z])/g, '$1 $2');
    return (
      <View flexDirection="row" alignItems="center" ph="md">
        <Text
          variant="semibold"
          size="sm"
          color={props.focused ? 'white' : 'black'}>
          {result}
        </Text>
        <Icon
          name="keyboard-arrow-right"
          vector="MaterialIcons"
          size={moderateScale(24)}
          color={props.focused ? theme.colors.white : theme.colors.black}
        />
      </View>
    );
  },
});
function MainNavigator() {
  const {type} = useAppSelector(state => state.auth);
  return (
    <Drawer.Navigator
      screenOptions={({route}) => getDrawerOptions(route)}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={SCREENS.MAIN_TABS}
        component={TabNavigator}
        options={{drawerItemStyle: {display: 'none'}}}
      />

      {type === UserTypes.Agent && (
        <>
          <Drawer.Screen
            name={SCREENS.MY_TRANSACTIONS}
            component={MyTransactionsTab}
            initialParams={{
              goBack: true,
            }}
          />
          <Drawer.Screen
            name={SCREENS.MY_PROPERTIES}
            component={MyProperties}
          />
          <Drawer.Screen name={SCREENS.MY_CLIENTS} component={MyClients} />
        </>
      )}

      <Drawer.Screen name={SCREENS.MY_DOCUMENTS} component={MyDocuments} />

      {type === UserTypes.Member && (
        <Drawer.Screen name={SCREENS.MY_AGENTS} component={PotentialAgents} />
      )}

      {type === UserTypes.Agent && (
        <Drawer.Screen name={SCREENS.ADS_CENTER} component={AdsCenter} />
      )}

      <Drawer.Screen
        name={SCREENS.PRIVACY}
        component={PrivacyPolicy}
        options={{drawerItemStyle: {display: 'none'}}}
      />
      <Drawer.Screen
        name={SCREENS.TERMS}
        component={TermsConditions}
        options={{drawerItemStyle: {display: 'none'}}}
      />
    </Drawer.Navigator>
  );
}

export default MainNavigator;
