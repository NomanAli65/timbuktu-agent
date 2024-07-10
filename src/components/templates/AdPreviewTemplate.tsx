import {ScrollView} from 'react-native';
import {Button, Icon, Text, View} from '../atoms';
import {Header} from '../organisms';
import {AdCard, ShadowIconButtonContainer} from '../molecules';
import IMAGES from '../../constants/images';
import useTheme from '../../hooks/useTheme';
import {moderateScale} from '../../helpers/metrics';
import SVGS from '../../constants/svgs';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';

export default function AdPreviewTemplate() {
  const theme = useTheme();

  const navigation = useNavigation<MainStackNavigation>();
  return (
    <View flex={1}>
      <Header title="Summary" />

      <ScrollView
        contentContainerStyle={{
          padding: theme.spacing.md,
        }}>
        <View>
          <Text variant="bold">Your Ad Preview</Text>
          <AdCard
            preview
            item={{
              id: 1,
              time: '',
              title: 'Ad 1',
              reached: 0,
              engaged: 0,
              image: IMAGES.House2,
              userImg: IMAGES.Avatar3,
              description: 'asidjasoidj',
              isRunning: false,
            }}
          />
        </View>

        <View mv="md" gap={10}>
          <Text variant="bold">Estimated Results</Text>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <ShadowIconButtonContainer>
              <Icon
                name="people-group"
                vector="FontAwesome6"
                size={moderateScale(24)}
                color={theme.colors.primary}
              />
              <Text variant="bold" size="sm">
                Post Reach
              </Text>
              <Text color="primary" variant="semibold">
                22K
              </Text>
            </ShadowIconButtonContainer>
            <ShadowIconButtonContainer>
              <Icon
                name="chain"
                vector="FontAwesome"
                size={moderateScale(24)}
                color={theme.colors.primary}
              />
              <Text variant="bold" size="sm" textAlign="center">
                Engagement
              </Text>
              <Text color="primary" variant="semibold">
                10K
              </Text>
            </ShadowIconButtonContainer>
          </View>
        </View>

        <View gap={12}>
          <Text variant="bold">Your payment info</Text>
          <SVGS.CreditCard style={{width: '100%'}} />
        </View>

        <View gap={12}>
          <Text variant="bold">Payment Summary</Text>
          <Text color="gray2" size="sm">
            Your Ad will run 5 days
          </Text>

          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text variant="medium">Total Budget</Text>
            <Text variant="bold" size="md" color="primary">
              100.USD
            </Text>
          </View>
        </View>
        <View mt="lg">
          <Button
            label="Post Ad"
            onPress={() => navigation.navigate(SCREENS.AD_POST_SUCCESS)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
