import React, {useEffect} from 'react';
import {SafeAreaContainer, ScreenContainer, Text} from '../../atoms';
import {Header} from '../../organisms';
import {PropertyListingTemplate} from '../../templates';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {getProperties} from '../../../redux/slices/listings/listingThunks';

export default function MyProperties() {
  const {properties} = useAppSelector(state => state.listings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProperties());
  }, []);
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="My Properties" goBack />
        <PropertyListingTemplate listings={properties} />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
