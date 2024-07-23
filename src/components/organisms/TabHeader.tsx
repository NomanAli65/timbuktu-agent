import React from 'react';
import {Icon, Text, TextInput, View} from '../atoms';
import {
  ImageBackground,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IMAGES from '../../constants/images';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';
import {TabHeaderHeight, UserTypes} from '../../constants/values';
import {useNavigation, useRoute} from '@react-navigation/native';
import SCREENS from '../../constants/screens';
import {useAppSelector} from '../../hooks/useAppSelector';

export default function TabHeader() {
  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();
  const theme = useTheme();
  const radius = 40;
  const navigation = useNavigation();
  const {type} = useAppSelector(state => state.auth);

  const route = useRoute();

  return (
    <View
      style={{
        height: TabHeaderHeight + 30,
        position: 'relative',
      }}
      backgroundColor="white"
      alignItems="center">
      <ImageBackground
        source={IMAGES.LoginBackground}
        style={{
          width,
          height: TabHeaderHeight,
          backgroundColor: theme.colors.white,
        }}
        imageStyle={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.8,
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius,
          }}
          backgroundColor="primary"
        />

        <View
          style={{
            zIndex: 99,
            paddingTop: insets.top === 0 ? theme.spacing.lg : insets.top,
          }}
          p="lg"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <TouchableOpacity
            //@ts-ignore
            onPress={() => navigation.toggleDrawer()}
            style={{flex: 0.2}}>
            <Icon
              name="menu"
              size={moderateScale(30)}
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <Text
            color="white"
            variant="bold"
            style={{flex: 0.6}}
            textAlign="center">
            TIMBUKTU
          </Text>
          <View flexDirection="row" alignItems="center" gap={10} flex={0.2}>
            <TouchableOpacity
              //@ts-ignore
              onPress={() => navigation.navigate(SCREENS.MESSAGING)}>
              <Icon
                vector="MaterialCommunityIcons"
                name="message-text"
                size={moderateScale(30)}
                color={theme.colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              //@ts-ignore
              onPress={() => navigation.navigate(SCREENS.NOTIFICATIONS)}>
              <Icon
                vector="MaterialCommunityIcons"
                name="bell"
                size={moderateScale(30)}
                color={theme.colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <Pressable
        style={{
          position: 'absolute',
          bottom: 0,
          zIndex: 999,
          shadowColor: '#00000047',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 0.5,
          shadowRadius: 6,
          backgroundColor: theme.colors.white,
          elevation: 20,

          width: '80%',
          borderRadius: 10,
        }}
        onPress={
          type === UserTypes.AgentOrMember
            ? () => navigation.navigate(SCREENS.SEARCH_FILTERS)
            : null
        }>
        <View
          pointerEvents={type === UserTypes.NonMemberOrGuest ? 'auto' : 'none'}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p="lg">
          <TextInput
            placeholder={
              route.name === 'Listings' ? 'Search & Filters' : 'Search...'
            }
            placeholderTextColor={theme.colors.primary}
            editable={type === UserTypes.NonMemberOrGuest}
          />
          {route.name === 'Listings' && (
            <Icon
              name="filter"
              vector="AntDesign"
              color={theme.colors.primary}
              size={moderateScale(24)}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
}
