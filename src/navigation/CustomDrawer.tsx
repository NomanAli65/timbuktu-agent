import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Text, View} from '../components/atoms';
import useTheme from '../hooks/useTheme';
import SCREENS from '../constants/screens';

export default function CustomDrawer({
  navigation,
  ...rest
}: DrawerContentComponentProps) {
  const theme = useTheme();
  return (
    <DrawerContentScrollView {...rest}>
      <View justifyContent="center" alignItems="center" mb="md">
        <Avatar width={80} />
        <Text variant="bold" size="lg">
          Stellar Kane
        </Text>
      </View>
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
          onPress={() => {}}
          style={{paddingHorizontal: theme.spacing.md}}
        />
      </View>
    </DrawerContentScrollView>
  );
}
