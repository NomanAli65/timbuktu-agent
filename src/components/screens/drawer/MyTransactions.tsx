import React, {useState} from 'react';
import {SafeAreaContainer, ScreenContainer, View} from '../../atoms';
import {Header} from '../../organisms';
import {
  MyLeadsListTemplate,
  MyReferralsListTemplate,
  TabbedListingMenuTemplate,
} from '../../templates';
import {IMyLead, IMyReferral, ITabMenuItem} from '../../types';
import {useAppSelector} from '../../../hooks/useAppSelector';
import IMAGES from '../../../constants/images';

export default function MyTransactions() {
  const [activeId, setActiveId] = useState(2);
  const [menu2ActiveId, setMenu2ActiveId] = useState(1);
  const {myLeads} = useAppSelector(state => state.myLeads);
  const items: ITabMenuItem[] = [
    {
      id: 1,
      label: 'My Referrals',
      onPress() {},
    },

    {
      id: 2,
      label: 'My Leads',
      onPress() {},
    },
  ];

  const leads: IMyLead[] = [
    {
      id: 1,
      type: '505050',
      image: IMAGES.Avatar2,
      address: 'Miami, FL',
    },
    {
      id: 2,
      type: '505051',
      image: IMAGES.Avatar,
      address: 'Miami, FL',
    },
    {
      id: 3,
      type: '505052',
      image: IMAGES.Avatar4,
      address: 'Miami, FL',
    },
    {
      id: 4,
      type: '505053',
      image: IMAGES.Avatar5,
      address: 'Miami, FL',
    },
  ];

  const myReferralsItems: IMyReferral[] = [
    {
      id: 505051,
      name: 'Lisa',
      referredTo: 'Johnathan Charles',
      image: IMAGES.Avatar2,
      image2: IMAGES.Avatar,
    },

    {
      id: 505052,
      name: 'Lisa',
      referredTo: 'Johnathan Charles',
      image: IMAGES.Avatar3,
      image2: IMAGES.Avatar,
    },

    {
      id: 505053,
      name: 'Lisa',
      referredTo: 'Johnathan Charles',
      image: IMAGES.Avatar4,
      image2: IMAGES.Avatar,
    },

    {
      id: 505055,
      name: 'Lisa',
      referredTo: 'Johnathan Charles',
      image: IMAGES.Avatar5,
      image2: IMAGES.Avatar,
    },
  ];

  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="My Transactions" goBack />
        <TabbedListingMenuTemplate
          items={items}
          activeId={activeId}
          onSelect={item => setActiveId(item.id)}
        />

        {activeId === 2 && <MyLeadsListTemplate items={leads} />}
        {activeId === 1 && <MyReferralsListTemplate items={myReferralsItems} />}
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
