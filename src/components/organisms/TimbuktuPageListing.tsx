import React from 'react';
import {Text, View} from '../atoms';
import {Switch} from 'react-native';
import {NotificationCard, PropertyListingCard, AgentCard} from '../molecules';
import {useAppSelector} from '../../hooks/useAppSelector';
import IMAGES from '../../constants/images';
import {IAgentDetails, Notification} from '../types';

export default function TimbuktuPageListing() {
  const {properties} = useAppSelector(state => state.listings);
  const notifications: Notification[] = [
    {
      id: 1,
      time: '2 hours ago',
      title: 'Thomas Stock Posted a Propery',
      avatar: IMAGES.House2,
      new: false,
    },
    {
      id: 2,
      time: '2 hours ago',
      title: 'Thomas Stock Posted a Propery',
      avatar: IMAGES.House3,
      new: false,
    },
    {
      id: 3,
      time: '2 hours ago',
      title: 'Thomas Stock Posted a Propery',
      avatar: IMAGES.House4,
      new: false,
    },
  ];

  const agents: IAgentDetails[] = [
    {
      id: 210321,
      address: 'Texas, USA',
      rating: 2.34,
      image: IMAGES.Avatar,
    },
    {
      id: 210323,
      address: 'Texas, USA',
      rating: 2.34,
      image: IMAGES.Avatar2,
    },
    {
      id: 210324,
      address: 'Texas, USA',
      rating: 2.34,
      image: IMAGES.Avatar3,
    },
  ];
  return (
    <>
      <View>
        {properties.map(property => (
          <PropertyListingCard item={property} key={property.id} />
        ))}
      </View>

      <View mt="md">
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text variant="bold">Notifications</Text>
          <Switch />
        </View>

        {notifications.map(notification => (
          <NotificationCard notification={notification} key={notification.id} />
        ))}
      </View>

      <View>
        <Text variant="bold">Agents</Text>

        {agents.map(details => (
          <AgentCard details={details} key={details.id} />
        ))}
      </View>
    </>
  );
}
