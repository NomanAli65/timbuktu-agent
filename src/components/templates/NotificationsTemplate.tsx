import React from 'react';
import {View} from '../atoms';
import {NotificationsList} from '../organisms';
import {Notification} from '../types';

interface IProps {
  notifications: Notification[];
}

export default function NotificationsTemplate({notifications}: IProps) {
  return (
    <View flex={1} p="md">
      <NotificationsList notifications={notifications} />
    </View>
  );
}
