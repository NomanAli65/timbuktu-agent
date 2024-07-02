import React from 'react';
import {Icon, Text, TextInput, View} from '../atoms';
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IMAGES from '../../constants/images';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';
import {TabHeaderHeight} from '../../constants/values';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../constants/screens';

export default function TabHeader() {
  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();
  const theme = useTheme();
  const radius = 40;
  const navigation = useNavigation();

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
            paddingTop: insets.top,
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
            Timbuktu
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
            <TouchableOpacity>
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

      <TextInput
        placeholder="Search..."
        editable={false}
        onPressIn={() => {
          //@ts-ignore
          navigation.navigate(SCREENS.SEARCH_FILTERS);
        }}
        style={{
          shadowColor: '#00000047',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 0.5,
          shadowRadius: 6,
          backgroundColor: theme.colors.white,
          elevation: 2,
          width: '80%',
          padding: theme.spacing.lg,
          zIndex: 999,
          borderRadius: 10,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
}
