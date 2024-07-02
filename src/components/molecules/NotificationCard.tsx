import React from 'react';
import {Avatar, Text, View} from '../atoms';
import {Notification} from '../types';
import {horizontalScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';

interface IProps {
  notification: Notification;
}

export default function NotificationCard({notification}: IProps) {
  const theme = useTheme();
  return (
    <View
      flexDirection="row"
      alignItems="center"
      rounded
      mv="md"
      backgroundColor={notification.new ? 'primary' : 'gray7'}
      p="md">
      <View flex={1}>
        <Text size="xxs" color={notification.new ? 'white' : 'black'}>
          {notification.time}
        </Text>
        <Text size="sm" color={notification.new ? 'white' : 'black'}>
          {notification.title}
        </Text>
      </View>
      <Avatar width={horizontalScale(50)} source={notification.avatar} />
    </View>
  );
}
