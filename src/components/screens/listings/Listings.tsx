import React, {useEffect, useState} from 'react';
import {
  BottomTabBarPadding,
  Button,
  ScreenContainer,
  Text,
  View,
} from '../../atoms';
import {ITabMenuItem} from '../../types';
import {
  AgentsListTemplate,
  PropertyListingTemplate,
  TabbedListingMenuTemplate,
} from '../../templates';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {getProperties} from '../../../redux/slices/listings/listingThunks';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {getAgentsAsync} from '../../../redux/slices/referralAgents/referralAgentsThunks';
import {BlurView} from '@react-native-community/blur';
import SVGS from '../../../constants/svgs';
import {useNavigation} from '@react-navigation/native';
import {TabStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';
import {UserTypes} from '../../../constants/values';
import {changeFilter} from '../../../redux/slices/searchFilter/searchFilterSlice';

export default function Listings() {
  const [activeId, setActiveId] = useState(2);
  const dispatch = useAppDispatch();
  const {properties} = useAppSelector(state => state.listings);
  const {referralAgents} = useAppSelector(state => state.referralAgents);
  const {type} = useAppSelector(state => state.auth);
  const onSelect = (item: ITabMenuItem) => setActiveId(item.id);

  const navigation = useNavigation<TabStackNavigation>();
  const menuItems: ITabMenuItem[] = [
    {
      id: 1,
      label: 'Referral Agents',
      onPress: () => {
        dispatch(changeFilter('agent'));
        dispatch(getAgentsAsync());
      },
    },
    {
      id: 2,
      label: 'Exclusive Listings',
      onPress: () => {
        dispatch(changeFilter('property'));
        dispatch(getProperties());
      },
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
      {activeId === 1 && <AgentsListTemplate items={referralAgents} />}
      {activeId === 2 && <PropertyListingTemplate listings={properties} />}
      <BottomTabBarPadding />

      {type === UserTypes.Member && (
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 9999999999999,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          blurType="thinMaterial"
          blurAmount={10}
          reducedTransparencyFallbackColor="white">
          <View
            backgroundColor="white"
            p="lg"
            rounded
            style={{width: '95%'}}
            alignItems="center"
            gap={12}>
            <Text variant="medium" size="lg" color="primary">
              System Message
            </Text>
            <SVGS.VerifyDocumentsIcon width={100} height={100} />
            <Text variant="medium" size="md" style={{width: '100%'}}>
              Please Verify your Documents
            </Text>

            <Button
              label="Continue"
              onPress={() => navigation.navigate(SCREENS.HOME)}
            />
          </View>
        </BlurView>
      )}
    </ScreenContainer>
  );
}
