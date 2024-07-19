import React, {useState} from 'react';
import {ScreenContainer, ShadowContainer, Text, View} from '../../atoms';
import {Header} from '../../organisms';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image, ScrollView, useWindowDimensions} from 'react-native';
import IMAGES from '../../../constants/images';
import {Dropdown, LabelWithIcon} from '../../molecules';
import useTheme from '../../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../../constants/screens';

export default function LeadDetails() {
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const theme = useTheme();
  const [purpose, setPurpose] = useState<string>('');
  const navigation = useNavigation();

  const onBack = () => navigation.navigate(SCREENS.MY_TRANSACTIONS_TAB);
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
          <Header title="" goBack transparent onBack={onBack} />
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
            justifyContent="space-between"
            backgroundColor="white"
            rounded
            p="lg"
            style={{
              position: 'absolute',
              bottom: 0,
              width: '80%',
            }}>
            <View>
              <Text variant="bold" size="xl">
                505050
              </Text>
              <LabelWithIcon label="Texas, United States" iconName="location" />
            </View>
            <View backgroundColor="primary" p="md" rounded>
              <Text color="white">Sold</Text>
            </View>
          </ShadowContainer>
        </View>

        <View p="md" gap={16}>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <View>
              <Text size="sm">Phone Number</Text>
              <Text size="sm" variant="bold">
                +1 234 567 890
              </Text>
            </View>

            <View>
              <Text size="sm">Email address</Text>
              <Text size="sm" variant="bold">
                abc@gmail.com
              </Text>
            </View>
          </View>
          <View>
            <Text variant="bold" size="sm">
              Property Requirements
            </Text>

            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              p="md"
              style={{
                borderBottomWidth: 1,
                borderColor: theme.colors.gray,
              }}>
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

            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              p="md">
              <LabelWithIcon iconName="location" label="14600" />
              <Text variant="medium" size="sm">
                Non-Negotiable
              </Text>
              <Text variant="bold" color="primary">
                Connect
              </Text>
            </View>

            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mt="lg">
              <Text variant="semibold" size="sm">
                Purpose/Occasion
              </Text>
              <Dropdown
                label="Purpose"
                options={['Buying', 'Selling']}
                onSelect={opt => setPurpose(opt)}
                selectedValue={purpose}
                width={'40%'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
