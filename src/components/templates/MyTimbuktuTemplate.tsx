import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  Header,
  TabbedMenu,
  TimbuktuPageListing,
  TimbuktuPageSavedList,
} from '../organisms';
import {View} from '../atoms';
import {ITabMenuItem} from '../types';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {getProperties} from '../../redux/slices/listings/listingThunks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function MyTimbuktuTemplate() {
  const [activeId, setActiveId] = useState(1);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const items: ITabMenuItem[] = [
    {
      id: 1,
      label: 'My Listings',
      onPress() {},
    },
    {
      id: 2,
      label: 'Saved',
      onPress() {},
    },
  ];

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  return (
    <View flex={1}>
      <Header title="My Timbuktu Page" goBack />

      <View flex={1} p="md">
        <View pv="xs">
          <TabbedMenu
            items={items}
            activeId={activeId}
            onSelect={item => setActiveId(item.id)}
          />
        </View>

        {activeId === 1 && (
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              paddingBottom: insets.bottom,
            }}
            showsVerticalScrollIndicator={false}>
            <TimbuktuPageListing />
          </ScrollView>
        )}

        {activeId === 2 && <TimbuktuPageSavedList />}
      </View>
    </View>
  );
}
