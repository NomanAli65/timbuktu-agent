import React, {useEffect, useState} from 'react';
import {BottomTabBarPadding, ScreenContainer} from '../../atoms';
import {IReferralAgent, ITabMenuItem} from '../../types';
import {
  PropertyListingTemplate,
  ReferralAgentsListTemplate,
  TabbedListingMenuTemplate,
} from '../../templates';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {getProperties} from '../../../redux/slices/listings/listingThunks';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getAgentsAsync} from '../../../redux/slices/referralAgents/referralAgentsThunks';

export default function Listings() {
  const [activeId, setActiveId] = useState(2);
  const dispatch = useAppDispatch();
  const {properties} = useAppSelector(state => state.listings);
  const {referralAgents} = useAppSelector(state => state.referralAgents);
  const onSelect = (item: ITabMenuItem) => setActiveId(item.id);
  const menuItems: ITabMenuItem[] = [
    {
      id: 1,
      label: 'Referral Agents',
      onPress: () => dispatch(getAgentsAsync()),
    },
    {
      id: 2,
      label: 'Exclusive Listings',
      onPress: () => dispatch(getProperties()),
    },
  ];

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  return (
    <ScreenContainer backgroundColor="white">
      <TabbedListingMenuTemplate
        items={menuItems}
        activeId={activeId}
        onSelect={onSelect}
      />
      {activeId === 1 && <ReferralAgentsListTemplate items={referralAgents} />}
      {activeId === 2 && <PropertyListingTemplate listings={properties} />}
      <BottomTabBarPadding />
    </ScreenContainer>
  );
}
