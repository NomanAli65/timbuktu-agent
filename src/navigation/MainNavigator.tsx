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
  MyTransactions,
  MyTransactionsTab,
  PostProperty,
  PrivacyPolicy,
  Profile,
  SearchFilters,
  TermsConditions,
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

const Stack = createStackNavigator<MainStackParamsList>();
const Tab = createBottomTabNavigator<MainTabsParamsList>();
const Drawer = createDrawerNavigator<DrawerParmasList>();

const getTabBarOptions = (
  route: RouteProp<MainTabsParamsList, keyof MainTabsParamsList>,
): BottomTabNavigationOptions => ({
  tabBarStyle: {
    borderTopWidth: 0,
    shadowColor: theme.colors.shadow,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 80,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
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

      case SCREENS.PROFILE: {
        iconName = 'account';
        break;
      }
    }

    return (
      <Icon
        name={iconName}
        size={moderateScale(28)}
        vector="MaterialCommunityIcons"
        color={props.focused ? theme.colors.black : theme.colors.gray2}
      />
    );
  },
  header: () => {
    return <TabHeader />;
  },
});

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({route}) => getTabBarOptions(route)}>
      <Tab.Screen name={SCREENS.HOME} component={Home} />
      <Tab.Screen name={SCREENS.LISTINGS} component={Listings} />
      <Tab.Screen name={SCREENS.POST_PROPERTY} component={PostProperty} />
      <Tab.Screen
        name={SCREENS.MY_TRANSACTIONS_TAB}
        component={MyTransactionsTab}
      />
      <Tab.Screen name={SCREENS.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

const mainOptions: StackNavigationOptions = {
  headerShown: false,
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={mainOptions}>
      <Stack.Screen name={SCREENS.MAIN_TABS} component={TabNavigator} />
      <Stack.Screen
        name={SCREENS.SEARCH_FILTERS}
        component={SearchFilters}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen name={SCREENS.MESSAGING} component={Messaging} />
      <Stack.Screen name={SCREENS.MESSAGES} component={Messages} />
    </Stack.Navigator>
  );
};

const getDrawerOptions = (
  route: RouteProp<DrawerParmasList, keyof DrawerParmasList>,
): DrawerNavigationOptions => ({
  headerShown: false,
  drawerActiveBackgroundColor: theme.colors.primary,
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
  return (
    <Drawer.Navigator
      screenOptions={({route}) => getDrawerOptions(route)}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={SCREENS.MAIN_STACK}
        component={MainStackNavigator}
        options={{drawerItemStyle: {display: 'none'}}}
      />

      <Drawer.Screen
        name={SCREENS.MY_TRANSACTIONS}
        component={MyTransactions}
      />

      <Drawer.Screen name={SCREENS.MY_CLIENTS} component={MyClients} />
      <Drawer.Screen name={SCREENS.MY_DOCUMENTS} component={MyDocuments} />
      <Drawer.Screen name={SCREENS.MY_PROPERTIES} component={MyProperties} />
      <Drawer.Screen name={SCREENS.ADS_CENTER} component={AdsCenter} />

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
