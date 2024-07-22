import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Text, View} from '../components/atoms';
import useTheme from '../hooks/useTheme';
import SCREENS from '../constants/screens';
import {RatingBox} from '../components/molecules';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {logout} from '../redux/slices/auth/authSlice';
import {TouchableOpacity} from 'react-native';

export default function CustomDrawer({
  navigation,
  ...rest
}: DrawerContentComponentProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  return (
    <DrawerContentScrollView {...rest}>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.MY_PROFILE_DETAILS)}>
        <View justifyContent="center" alignItems="center" mb="md">
          <Avatar width={80} />
          <Text variant="bold" size="lg">
            Stellar Kane
          </Text>
          <RatingBox />
        </View>
      </TouchableOpacity>
      <DrawerItemList navigation={navigation} {...rest} />
      <View mt="xxl">
        <DrawerItem
          label="Privacy Policy"
          onPress={() => navigation.navigate(SCREENS.PRIVACY)}
          style={{paddingHorizontal: theme.spacing.md}}
        />
        <DrawerItem
          label="Terms & Conditions"
          onPress={() => navigation.navigate(SCREENS.TERMS)}
          style={{paddingHorizontal: theme.spacing.md}}
        />
        <DrawerItem
          label="Log out"
          onPress={() => dispatch(logout())}
          style={{paddingHorizontal: theme.spacing.md}}
        />
      </View>
    </DrawerContentScrollView>
  );
}
