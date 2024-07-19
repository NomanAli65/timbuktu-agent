import React from 'react';
import {Avatar, ShadowContainer, Text, View} from '../atoms';
import {IMyReferral} from '../types';
import useTheme from '../../hooks/useTheme';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../constants/screens';
import {MainStackNavigation} from '../../navigation/types';

interface IProps {
  item: IMyReferral;
}

export default function MyReferralsCard({item}: IProps) {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
  const onPress = () => navigation.navigate(SCREENS.MESSAGES, {messages: []});
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        flexDirection="row"
        alignItems="center"
        p="md"
        m="md"
        style={{
          borderWidth: 1,
          borderColor: theme.colors.gray,
          borderRadius: 20,
        }}>
        <Image
          source={item.image}
          style={{
            width: '20%',
            height: undefined,
            aspectRatio: 1,
            borderRadius: 20,
          }}
        />
        <View ml="xs" flex={1}>
          <Text size="xs" variant="bold">
            {item.id}
          </Text>
          <Text size="xs" color="gray8">
            {item.name}
          </Text>
          <Text size="xxs" color="gray8">
            Referred To:{' '}
            <Text color="primary" size="xxs">
              {item.referredTo}
            </Text>
          </Text>
        </View>

        <View alignItems="center">
          <Text size="sm" color="gray8">
            11:21
          </Text>
          <Avatar source={item.image2} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
