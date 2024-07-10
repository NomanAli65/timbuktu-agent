import React from 'react';
import {Button, Icon, ScreenContainer, Text, View} from '../../atoms';
import SVGS from '../../../constants/svgs';
import {moderateScale} from '../../../helpers/metrics';
import useTheme from '../../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

export default function AdPostedSuccess() {
  const theme = useTheme();

  const navigation = useNavigation<DrawerNavigation>();
  const onPress = () => navigation.navigate(SCREENS.ADS_CENTER);
  return (
    <ScreenContainer>
      <View
        flex={0.5}
        backgroundColor="black"
        justifyContent="center"
        alignItems="center">
        <SVGS.Logo />
      </View>
      <View
        flex={0.5}
        backgroundColor="white"
        justifyContent="space-evenly"
        alignItems="center"
        ph="lg">
        <View alignItems="center" gap={6}>
          <Icon
            name="check-circle"
            vector="FontAwesome"
            size={moderateScale(50)}
            color={theme.colors.primary}
          />
          <Text variant="bold" size="xl">
            Thank You!
          </Text>
          <Text textAlign="center" color="gray2" size="sm">
            Your Ad Payment is Successful, your ad will be posted on 21 May,
            2024
          </Text>
        </View>

        <Button label="View Ad" onPress={onPress} />
      </View>
    </ScreenContainer>
  );
}
