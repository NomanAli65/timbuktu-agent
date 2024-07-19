import React from 'react';
import {Button, ScreenContainer, Text, View} from '../../atoms';
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
import {useAppSelector} from '../../../hooks/useAppSelector';

export default function PropertyDetails({navigation}: MainStackScreensProp) {
  const images = [IMAGES.House1, IMAGES.House2, IMAGES.House3];
  const {height} = useWindowDimensions();
  const {savable} = useAppSelector(state => state.listings);
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
  const exteriorFeatures: IHomeFeature[] = [
    {
      id: 1,
      title: 'Garage',
      available: true,
      iconName: 'garage',
      iconVector: 'MaterialCommunityIcons',
    },
    {
      id: 2,
      title: 'LOT Hillside',
      available: true,
      iconName: 'slope-uphill',
      iconVector: 'MaterialCommunityIcons',
    },
    {
      id: 3,
      title: 'Basement',
      available: true,
      iconName: 'home-floor-b',
      iconVector: 'MaterialCommunityIcons',
    },
    {
      id: 4,
      title: 'Swimming Pool',
      available: true,
      iconName: 'swimming-pool',
      iconVector: 'FontAwesome5',
    },
    {
      id: 5,
      title: 'Parking',
      available: true,
      iconName: 'car-tunnel',
      iconVector: 'FontAwesome6',
    },
  ];

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
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Text variant="bold">Main Features</Text>
              {savable && (
                <Text variant="bold" color="primary" size="sm">
                  Save
                </Text>
              )}
            </View>
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
              items={exteriorFeatures}
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
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
