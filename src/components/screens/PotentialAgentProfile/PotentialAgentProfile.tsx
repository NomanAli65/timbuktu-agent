import React, {useRef, useState} from 'react';
import {
  Button,
  ScreenContainer,
  ShadowContainer,
  Text,
  View,
} from '../../atoms';
import {Header} from '../../organisms';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import IMAGES from '../../../constants/images';
import {LabelWithIcon} from '../../molecules';
import useTheme from '../../../hooks/useTheme';
import Video, {VideoRef} from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

export default function PotentialAgentProfile() {
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const theme = useTheme();
  const videoRef = useRef<VideoRef>(null);
  const background = require('../../../assets/sample.mp4');

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
                BUYER
              </Text>
              <LabelWithIcon label="Texas, United States" iconName="location" />
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(SCREENS.MESSAGES, {
                  messages: [],
                })
              }>
              <View
                backgroundColor="white"
                p="md"
                rounded
                style={{
                  borderWidth: 1,
                  borderColor: theme.colors.gray,
                }}>
                <Text color="primary" size="xs">
                  Message
                </Text>
              </View>
            </TouchableOpacity>
          </ShadowContainer>
        </View>

        <View p="md" gap={8}>
          <Text size="sm">Agents Intro Video</Text>

          <Video
            source={background}
            ref={videoRef}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 10,
            }}
            controls
            // playInBackground
          />
        </View>

        <View p="md">
          <Button label="I want to work with this agent" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
