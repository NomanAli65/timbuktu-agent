import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Button,
  ScreenContainer,
  ShadowContainer,
  Text,
  View,
} from '../../atoms';
import {Header} from '../../organisms';
import {
  Image,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import IMAGES from '../../../constants/images';
import {
  LabelWithIcon,
  RatingBox,
  ReferralAgentStatsCard,
} from '../../molecules';
import useTheme from '../../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

export default function ReferralAgentDetails() {
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
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
          <Header title="" goBack transparent />
        </View>

        <View
          alignItems="center"
          style={{
            height: height / 1.8,
          }}>
          <Image
            source={IMAGES.Avatar}
            style={{
              width: '100%',
              height: height / 2,
              position: 'relative',
              alignItems: 'center',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          />
          <ShadowContainer
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            backgroundColor="white"
            rounded
            style={{
              position: 'absolute',
              bottom: 0,
              width: '80%',
            }}>
            <ReferralAgentStatsCard
              statValue={500}
              text1="Successful"
              text2="Transactions"
            />
            <View
              style={{
                borderWidth: 1,
                height: '70%',
                borderColor: theme.colors.gray,
              }}
            />
            <ReferralAgentStatsCard
              statValue={450}
              text1="Total"
              text2="Clients"
            />
          </ShadowContainer>
        </View>

        <View p="md" gap={16}>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <View>
              <Text variant="bold" size="lg">
                505050
              </Text>
              <LabelWithIcon iconName="location" label="Texas, United States" />
            </View>
            <RatingBox />
          </View>

          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <View>
              <Text size="sm">Annual Sales Volume</Text>
              <Text size="sm" variant="bold">
                $ 15000
              </Text>
            </View>

            <View>
              <Text size="sm">Years in service</Text>
              <Text size="sm" variant="bold">
                5 years
              </Text>
            </View>
          </View>

          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <View>
              <Text size="sm">Most recent sale</Text>
              <Text size="sm" variant="bold">
                15-April-2023
              </Text>
            </View>

            <View>
              <Text size="sm" variant="bold" color="primary">
                Save
              </Text>
            </View>
          </View>

          <ShadowContainer p="md" rounded>
            <Text variant="bold" size="sm">
              Primary Service Areas & Neighborhoods
            </Text>
            <Text size="sm" color="gray4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </Text>
          </ShadowContainer>
          <ShadowContainer p="md" rounded>
            <Text variant="bold" size="sm">
              Bio & Specialty
            </Text>
            <Text size="sm" color="gray4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </Text>
          </ShadowContainer>
          <ShadowContainer p="md" rounded>
            <Text variant="bold" size="sm">
              Reviews
            </Text>
            <Text size="sm" color="gray4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </Text>
          </ShadowContainer>

          <Button
            label="Message"
            onPress={() => navigation.navigate(SCREENS.MESSAGES)}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
