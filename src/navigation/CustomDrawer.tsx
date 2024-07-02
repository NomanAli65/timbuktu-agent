import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Text, View} from '../components/atoms';
import useTheme from '../hooks/useTheme';
import SCREENS from '../constants/screens';
import {Rating} from '@kolking/react-native-rating';

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
        <View
          flexDirection="row"
          alignItems="center"
          gap={4}
          backgroundColor="gray6"
          p="xxs"
          rounded>
          <Rating
            size={14}
            rating={1}
            maxRating={1}
            fillColor={theme.colors.gray4}
          />
          <Text size="xs" color="gray4">
            5.00
          </Text>
        </View>
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
