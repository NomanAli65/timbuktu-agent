import React from 'react';
import {
  Avatar,
  SafeAreaContainer,
  ScreenContainer,
  Text,
  View,
} from '../../atoms';
import {Header, ProfileSettingsList} from '../../organisms';
import {horizontalScale} from '../../../helpers/metrics';

export default function Profile() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="Account" goBack={false} />
        <View flex={1} justifyContent="space-evenly">
          <View alignItems="center" gap={4}>
            <Avatar width={horizontalScale(150)} />
            <Text variant="bold" size="md">
              Stellar Kane
            </Text>
          </View>

          <ProfileSettingsList />
          <View />
        </View>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
