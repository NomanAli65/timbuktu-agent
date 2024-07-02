import IMAGES from '../../../constants/images';
import {SafeAreaContainer, ScreenContainer, Text, View} from '../../atoms';
import {Header} from '../../organisms';
import NotificationsTemplate from '../../templates/NotificationsTemplate';
import {Notification} from '../../types';

const notifications: Notification[] = [
  {
    time: '15 minutes ago',
    title: 'You have a new property agent',
    avatar: IMAGES.Avatar,
    new: true,
  },
  {
    time: '15 minutes ago',
    title: '1112 Posted a new property',
    avatar: IMAGES.House2,
    new: false,
  },
  {
    time: '15 minutes ago',
    title: 'You have a new property listing',
    avatar: IMAGES.House4,
    new: false,
  },
  {
    time: '15 minutes ago',
    title: 'You have a new property agent',
    avatar: IMAGES.Avatar,
    new: false,
  },
];

export default function Notifications() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="Notifications" goBack />
        <NotificationsTemplate notifications={notifications} />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
