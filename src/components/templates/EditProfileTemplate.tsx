import React from 'react';
import {EditProfileForm, Header} from '../organisms';
import {Image, ScrollView, useWindowDimensions} from 'react-native';
import IMAGES from '../../constants/images';
import {View} from '../atoms';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IHeaderOption} from '../types';

export default function EditProfileTemplate() {
  const {height} = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const headerOptions: IHeaderOption[] = [
    {
      id: 1,
      icon: 'user-circle',
      iconVector: 'FontAwesome6',
      onPress() {},
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: insets.bottom,
      }}
      bounces={false}>
      <View
        style={{
          position: 'absolute',
          paddingTop: insets.top,
          zIndex: 10,
          width: '100%',
        }}>
        <Header title="" goBack transparent options={headerOptions} />
      </View>
      <Image
        source={IMAGES.Avatar2}
        style={{
          width: '100%',
          height: height / 2.5,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
      <EditProfileForm />
    </ScrollView>
  );
}
