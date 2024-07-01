import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import SCREENS from '../constants/screens';
import {
  AdsCenter,
  Home,
  MyClients,
  MyDocuments,
  MyProperties,
  MyTransactions,
  PrivacyPolicy,
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
import SearchFilters from '../components/screens/home/SearchFilters';
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

const tabOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    borderTopWidth: 0,
  },
  header: () => {
    return <TabHeader />;
  },
};

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={SCREENS.HOME} component={Home} />
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
