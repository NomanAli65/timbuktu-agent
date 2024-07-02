import IMAGES from '../../../constants/images';
import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {Header} from '../../organisms';
import {MessagingList} from '../../templates';
import {IMessages} from '../../types';

const messages: IMessages[] = [
  {
    id: 2331,
    time: '05:23',
    avatar: IMAGES.Avatar,
    unreadCount: 4,
    messages: [
      {
        userId: 22,
        message: 'Aliquam lectus enim, condimentum vel',
      },
    ],
  },
  {
    id: 2332,
    time: '05:23',
    avatar: IMAGES.Avatar,
    unreadCount: 4,
    messages: [
      {
        userId: 22,
        message: 'aksdjsaidja',
      },
      {
        userId: 42,
        message: 'aksdjsaidja',
      },
      {
        userId: 42,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae.',
      },
      {
        userId: 22,
        message:
          'Aliquam lectus enim, condimentum vel mollis vitae.Aliquam lectus enim, condimentum vel mollis vitae. LAAAAST',
      },
    ],
  },
  {
    id: 23221,
    time: '05:23',
    avatar: IMAGES.Avatar,
    unreadCount: 4,
    messages: [
      {
        userId: 22,
        message: 'Aliquam lectus enim, condimentum vel mollis vitae.',
      },
    ],
  },
  {
    id: 2321,
    time: '05:23',
    avatar: IMAGES.Avatar,
    unreadCount: 4,
    messages: [
      {
        userId: 42,
        message: 'Aliquam lectus enim, condimentum vel mollis vitae.',
      },
    ],
  },
];

export default function Messaging() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="Messaging" />

        <MessagingList items={messages} />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
