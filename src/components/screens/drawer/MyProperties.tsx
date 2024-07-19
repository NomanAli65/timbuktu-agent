import React, {useEffect} from 'react';
import {SafeAreaContainer, ScreenContainer, Text} from '../../atoms';
import {Header} from '../../organisms';
import {PropertyListingTemplate} from '../../templates';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {getProperties} from '../../../redux/slices/listings/listingThunks';
import {useFocusEffect} from '@react-navigation/native';
import {setSavable} from '../../../redux/slices/listings/listingSlice';

export default function MyProperties() {
  const {properties} = useAppSelector(state => state.listings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  useFocusEffect(() => {
    dispatch(setSavable(true));
  });
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="My Properties" goBack />
        <PropertyListingTemplate listings={properties} />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
