import React from 'react';
import {
  SafeAreaContainer,
  ScreenContainer,
  ShadowContainer,
  Text,
  View,
} from '../../atoms';
import {Header} from '../../organisms';
import {Image} from 'react-native';
import IMAGES from '../../../constants/images';
import {ScrollView} from 'react-native';
import useTheme from '../../../hooks/useTheme';

export default function Documents() {
  const theme = useTheme();
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="Document" />

        <ScrollView
          contentContainerStyle={{
            padding: theme.spacing.md,
          }}>
          <ShadowContainer p="md" gap={12} rounded>
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Text color="gray2" size="sm">
                Name
              </Text>
              <Text variant="bold">Johnathan Charles</Text>
            </View>
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Text color="gray2" size="sm">
                Amount
              </Text>
              <Text variant="bold" size="md">
                $32000
              </Text>
            </View>
          </ShadowContainer>

          <ShadowContainer mt="lg">
            <Image
              source={IMAGES.Statement}
              style={{
                width: '100%',
                height: undefined,
                aspectRatio: 1,
              }}
            />
          </ShadowContainer>
        </ScrollView>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
