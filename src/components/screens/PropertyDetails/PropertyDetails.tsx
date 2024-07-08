import React from 'react';
import {Button, Icon, ScreenContainer, Text, View} from '../../atoms';
import {Header} from '../../organisms';
import IMAGES from '../../../constants/images';
import {ScrollView, useWindowDimensions} from 'react-native';
import {
  HomeDetailsFeaturesContainer,
  ImagesSlideshow,
  LabelWithIcon,
  RatingBox,
} from '../../molecules';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useTheme from '../../../hooks/useTheme';
import {IHomeFeature} from '../../types';
import {MainStackScreensProp} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

export default function PropertyDetails({navigation}: MainStackScreensProp) {
  const images = [IMAGES.House1, IMAGES.House2, IMAGES.House3];
  const {height} = useWindowDimensions();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const interiorFeatures: IHomeFeature[] = [
    {
      id: 1,
      title: 'Kitchen',
      available: true,
      iconName: 'kitchen-set',
      iconVector: 'FontAwesome6',
    },
    {
      id: 2,
      title: 'Central Heat',
      available: true,
      iconName: 'flame',
      iconVector: 'Ionicons',
    },
    {
      id: 3,
      title: 'A/C',
      available: true,
      iconName: 'air-conditioner',
      iconVector: 'MaterialCommunityIcons',
    },
    {
      id: 4,
      title: 'Laundry',
      available: true,
      iconName: 'local-laundry-service',
      iconVector: 'MaterialIcons',
    },
    {
      id: 5,
      title: 'Roof',
      available: true,
      iconName: 'roofing',
      iconVector: 'MaterialIcons',
    },
  ];

  const onPress = () => navigation.navigate(SCREENS.MESSAGES, {messages: []});

  return (
    <ScreenContainer backgroundColor="white">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: insets.bottom,
        }}>
        <View
          style={{
            position: 'absolute',
            paddingTop: insets.top,
            zIndex: 10,
            width: '100%',
          }}>
          <Header title="Home Details" goBack transparent />
        </View>
        <ImagesSlideshow images={images} height={height * 0.5} />
        <View p="md" gap={12}>
          <View>
            <View flexDirection="row" justifyContent="space-between">
              <Text variant="bold">Florida Summer House</Text>
              <Text color="primary" variant="bold">
                $15000
              </Text>
            </View>
          </View>

          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: theme.colors.gray,
            }}
            pv="md">
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <LabelWithIcon iconName="bed" label="4 Bedrooms" />
              <LabelWithIcon
                iconName="toilet"
                vector="FontAwesome5"
                label="2 Bathrooms"
              />
              <LabelWithIcon
                iconName="arrows-alt"
                vector="FontAwesome5"
                label="1250 SQFT"
              />
            </View>
          </View>

          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <LabelWithIcon iconName="location" label="FL, 13300" />
            <RatingBox />
          </View>

          <View>
            <Text variant="bold">Description</Text>
            <Text size="sm" color="gray4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </Text>
          </View>
          <View>
            <Text variant="bold">Main Features</Text>
            <HomeDetailsFeaturesContainer
              items={interiorFeatures}
              title="Interior Features"
            />
          </View>
          <View>
            <Text variant="bold">Special Interior Features</Text>
            <Text size="sm" color="gray4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </Text>
          </View>
          <View mb="md">
            <HomeDetailsFeaturesContainer
              items={interiorFeatures}
              title="Exterior Features"
            />
          </View>
          <View>
            <Text variant="bold">Special Exterior Features</Text>
            <Text size="sm" color="gray4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </Text>
          </View>

          <View gap={12}>
            <Text variant="medium">ADU: Yes</Text>
            <Text variant="medium">Sale Type & Condition: FSBO, Auction</Text>
            <Text variant="medium">Third party confirmation required: No</Text>
            <Text variant="medium">Any death on the property: No</Text>
            <Text variant="medium">LOT Size: 1000</Text>
          </View>
          <View>
            <Text variant="bold">ANY SPECIAL TERMS ON FINANCING?</Text>
            <Text size="sm" color="gray4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </Text>
          </View>

          <Button label="Contact agent" onPress={onPress} />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
