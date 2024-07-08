import React from 'react';
import {Avatar, Icon, ShadowContainer, Text, View} from '../atoms';
import {horizontalScale} from '../../helpers/metrics';
import {IReferralAgent} from '../types';
import useTheme from '../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import {TouchableOpacity} from 'react-native';
import SCREENS from '../../constants/screens';

interface IProps {
  details: IReferralAgent;
}

export default function ReferralAgentCard({details}: IProps) {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
  const onPress = () => navigation.navigate(SCREENS.REFERRAL_AGENT_DETAILS);
  return (
    <TouchableOpacity onPress={onPress}>
      <ShadowContainer flexDirection="row" m="md" rounded>
        <View
          p="lg"
          backgroundColor="gray3"
          justifyContent="center"
          alignItems="center"
          style={{borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}>
          <Avatar width={horizontalScale(100)} source={details.image} />
        </View>
        <View gap={6} justifyContent="center" ml="md">
          <Text variant="medium">{details.id}</Text>
          <View flexDirection="row" alignItems="center">
            <Icon name="location" size={14} color={theme.colors.gray8} />
            <Text size="sm" color="gray8">
              {details.address}
            </Text>
          </View>
          <View flexDirection="row" alignItems="center">
            <Icon name="star" size={14} color={theme.colors.gray8} />
            <Text size="sm" color="gray8">
              {details.rating}
            </Text>
          </View>
        </View>
      </ShadowContainer>
    </TouchableOpacity>
  );
}
