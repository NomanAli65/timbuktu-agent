import React, {useState} from 'react';
import {SafeAreaContainer, ScreenContainer, View} from '../../atoms';
import {Header} from '../../organisms';
import {
  MyLeadsListTemplate,
  MyReferralsListTemplate,
  TabbedListingMenuTemplate,
} from '../../templates';
import {IMyReferral, ITabMenuItem} from '../../types';
import {useAppSelector} from '../../../hooks/useAppSelector';
import IMAGES from '../../../constants/images';
import {useRoute} from '@react-navigation/native';

export default function MyTransactionsTab() {
  const [activeId, setActiveId] = useState(2);
  const [menu2ActiveId, setMenu2ActiveId] = useState(1);
  const {params} = useRoute();
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

  const MyLeadsFilters: ITabMenuItem[] = [
    {
      id: 1,
      label: 'Buyer',
      onPress: () => {},
    },
    {
      id: 2,
      label: 'Seller',
      onPress: () => {},
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
        <Header
          title="My Transactions"
          goBack={params ? (params.goBack ? true : false) : false}
        />
        <TabbedListingMenuTemplate
          items={items}
          activeId={activeId}
          onSelect={item => setActiveId(item.id)}
        />

        {activeId === 2 && (
          <View alignItems="center">
            <View style={{width: '75%'}}>
              <TabbedListingMenuTemplate
                items={MyLeadsFilters}
                activeId={menu2ActiveId}
                onSelect={item => setMenu2ActiveId(item.id)}
              />
            </View>
          </View>
        )}

        {activeId === 2 && <MyLeadsListTemplate items={myLeads} />}
        {activeId === 1 && <MyReferralsListTemplate items={myReferralsItems} />}
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
