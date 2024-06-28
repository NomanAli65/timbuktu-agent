import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import SCREENS from '../constants/screens';
import {Home} from '../components/screens';
import {MainStackParamsList, MainTabsParamsList} from './types';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {TabHeader} from '../components/organisms';

const Stack = createStackNavigator<MainStackParamsList>();
const Tab = createBottomTabNavigator<MainTabsParamsList>();

const mainOptions: StackNavigationOptions = {
  headerShown: false,
};

const tabOptions: BottomTabNavigationOptions = {
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

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={mainOptions}>
      <Stack.Screen name={SCREENS.TABS} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
