import React, {PropsWithChildren} from 'react';
import {
  Icon,
  SafeAreaContainer,
  ScreenContainer,
  ShadowContainer,
  Text,
  View,
} from '../../atoms';
import {Header} from '../../organisms';
import {Pressable, ScrollView, TouchableOpacityProps} from 'react-native';
import useTheme from '../../../hooks/useTheme';
import {moderateScale} from '../../../helpers/metrics';
import AdCard from '../../molecules/AdCard/AdCard';
import MyAdsList from '../../organisms/MyAdsList';
import {IAdDetails} from '../../types';
import IMAGES from '../../../constants/images';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';
import {ShadowIconButtonContainer} from '../../molecules';

export default function AdsCenter() {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
  const ads: IAdDetails[] = [
    {
      id: 1,
      title: 'Ad Title 1',
      time: 'Published 2 hours ago',
      image: IMAGES.House1,
      reached: 20,
      engaged: 200,
      description: '',
      userImg: IMAGES.Avatar,
      isRunning: true,
    },
    {
      id: 2,
      title: 'Ad Title 2',
      time: 'Published 2 days ago',
      image: IMAGES.House2,
      reached: 20,
      engaged: 200,
      description: '',
      userImg: IMAGES.Avatar,
      isRunning: false,
    },
  ];
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="My ads" />

        <ScrollView style={{padding: theme.spacing.md}}>
          <View>
            <Text size="xs">Welcome</Text>
            <Text variant="semibold" color="primary" size="lg">
              Mark Carson
            </Text>
            <Text size="sm" color="gray2">
              Running your Ad on Body Count will increase your outcomes and grow
              your business.
            </Text>
          </View>

          <View
            mt="lg"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly">
            <ShadowIconButtonContainer
              onPress={() => navigation.navigate(SCREENS.CREATE_AD)}>
              <Icon
                name="ad"
                vector="FontAwesome5"
                size={moderateScale(30)}
                color={theme.colors.primary}
              />
              <Text variant="medium" size="sm">
                Create Ad
              </Text>
            </ShadowIconButtonContainer>
            <ShadowIconButtonContainer
              onPress={() => navigation.navigate(SCREENS.ADD_CARD)}>
              <Icon
                name="credit-card"
                vector="FontAwesome5"
                size={moderateScale(30)}
                color={theme.colors.primary}
              />
              <Text variant="medium" size="sm">
                Add Card
              </Text>
            </ShadowIconButtonContainer>
          </View>

          <View mv="lg">
            <Text variant="semibold">Your Ad History</Text>
            <MyAdsList items={ads} />
          </View>
        </ScrollView>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
