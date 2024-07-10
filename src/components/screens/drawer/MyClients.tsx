import React from 'react';
import {SafeAreaContainer, ScreenContainer, Text} from '../../atoms';
import {Header} from '../../organisms';
import {IHeaderOption, IMyClient} from '../../types';
import {MyClientsList} from '../../molecules';
import IMAGES from '../../../constants/images';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

export default function MyClients() {
  const navigation = useNavigation<MainStackNavigation>();
  const headerOptions: IHeaderOption[] = [
    {
      id: 1,
      icon: 'add',
      iconVector: 'Ionicons',
      onPress: () => navigation.navigate(SCREENS.ADD_CLIENT),
    },
  ];

  const clients: IMyClient[] = [
    {
      id: 123213,
      address: 'Miami, Florida',
      image: IMAGES.Avatar2,
    },
    {
      id: 123212,
      address: 'Venice, Italy',
      image: IMAGES.Avatar,
    },
    {
      id: 123214,
      address: 'Berlin, Germany',
      image: IMAGES.Avatar4,
    },
    {
      id: 123219,
      address: 'California, USA',
      image: IMAGES.Avatar3,
    },
    {
      id: 123218,
      address: 'Miami, Florida',
      image: IMAGES.Avatar5,
    },
  ];

  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="My Clients" options={headerOptions} />
        <MyClientsList items={clients} />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
