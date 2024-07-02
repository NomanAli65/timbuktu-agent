import {FlatList} from 'react-native';
import {NotificationCard} from '../molecules';
import {Notification} from '../types';

interface IProps {
  notifications: Notification[];
}

export default function NotificationsList({notifications}: IProps) {
  return (
    <FlatList
      data={notifications}
      renderItem={({item}) => <NotificationCard notification={item} />}
    />
  );
}
