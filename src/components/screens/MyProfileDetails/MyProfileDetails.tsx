import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Button,
  ScreenContainer,
  ShadowContainer,
  Text,
  View,
} from '../../atoms';
import {Header} from '../../organisms';
import {Image, ScrollView, useWindowDimensions} from 'react-native';
import IMAGES from '../../../constants/images';
import {LabelWithIcon} from '../../molecules';
import useTheme from '../../../hooks/useTheme';
import {IHeaderOption} from '../../types';

export default function MyProfileDetails() {
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const theme = useTheme();

  const headerOptions: IHeaderOption[] = [
    {
      id: 1,
      icon: 'user-circle',
      iconVector: 'FontAwesome5',
      onPress: () => {},
    },
  ];
  return (
    <ScreenContainer backgroundColor="white">
      <View
        style={{
          position: 'absolute',
          paddingTop: insets.top,
          zIndex: 10,
          width: '100%',
        }}>
        <Header title="" goBack transparent options={headerOptions} />
      </View>

      <View
        alignItems="center"
        style={{
          height,
          position: 'relative',
        }}>
        <Image
          source={IMAGES.Avatar}
          style={{
            width: '100%',
            height: height / 2,
            alignItems: 'center',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: height / 1.55,
          }}
          rounded
          p="lg">
          <ScrollView
            style={{
              borderRadius: 10,
            }}
            contentContainerStyle={{
              paddingBottom: insets.bottom,
            }}
            showsVerticalScrollIndicator={false}>
            <ShadowContainer p="lg" gap={16} rounded>
              <View
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                <View>
                  <Text variant="bold" size="lg">
                    505050
                  </Text>
                  <LabelWithIcon
                    iconName="location"
                    label="Texas, United States"
                  />
                </View>
              </View>

              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <View style={{width: '50%'}}>
                  <Text size="sm">Phone Number</Text>
                  <Text size="sm" variant="bold">
                    +1 234 567 890
                  </Text>
                </View>

                <View style={{width: '50%'}}>
                  <Text size="sm">Email Address</Text>
                  <Text size="sm" variant="bold">
                    abc@example.com
                  </Text>
                </View>
              </View>

              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <View style={{width: '50%'}}>
                  <Text size="sm">License Number</Text>
                  <Text size="sm" variant="bold">
                    123 456 7890
                  </Text>
                </View>

                <View style={{width: '50%'}}>
                  <Text size="sm">Location</Text>
                  <Text size="sm" variant="bold">
                    ABC location
                  </Text>
                </View>
              </View>
              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <View style={{width: '50%'}}>
                  <Text size="sm">License Number</Text>
                  <Text size="sm" variant="bold">
                    123 456 7890
                  </Text>
                </View>

                <View style={{width: '50%'}}>
                  <Text size="sm">Years in service</Text>
                  <Text size="sm" variant="bold">
                    5 Years
                  </Text>
                </View>
              </View>
              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <View style={{width: '50%'}}>
                  <Text size="sm">Annual Sales Volume</Text>
                  <Text size="sm" variant="bold">
                    $ 15000
                  </Text>
                </View>

                <View style={{width: '50%'}}>
                  <Text size="sm">Most recent sale</Text>
                  <Text size="sm" variant="bold">
                    15-April-2023
                  </Text>
                </View>
              </View>

              <View>
                <Text variant="bold" size="sm">
                  Primary Service Areas & Neighborhoods
                </Text>
                <Text size="sm" color="gray4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum
                </Text>
              </View>
              <View>
                <Text variant="bold" size="sm">
                  Bio & Specialty
                </Text>
                <Text size="sm" color="gray4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum
                </Text>
              </View>
              <View>
                <Text variant="bold" size="sm">
                  Reviews
                </Text>
                <Text size="sm" color="gray4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum
                </Text>
              </View>

              <Button label="Edit Profile" />
            </ShadowContainer>
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
}
