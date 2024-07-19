import React from 'react';
import {ShadowContainer, Text, View} from '../atoms';
import {Image, Pressable, PressableProps} from 'react-native';
import {IPropertyDetails} from '../types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';

interface IProps {
  item: IPropertyDetails;
}

export default function PropertyListingCard({item}: IProps) {
  const navigation = useNavigation<MainStackNavigation>();

  const onPress = () => navigation.navigate(SCREENS.PROPERTY_DETAILS);
  return (
    <Pressable onPress={onPress}>
      <ShadowContainer p="lg" m="md" rounded>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 250,
            borderRadius: 30,
          }}
        />
        <View mt="md">
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text variant="bold">{item.title}</Text>
            <Text color="info" variant="bold">
              ${item.price}
            </Text>
          </View>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mt="xs"
            style={{width: '70%'}}>
            <Text color="gray2" size="sm">
              {item.beds} Bed
            </Text>
            <Text color="gray2" size="sm">
              {item.baths} Baths
            </Text>
            <Text color="gray2" size="sm">
              {item.sqft} sqft
            </Text>
          </View>
        </View>
      </ShadowContainer>
    </Pressable>
  );
}
