import React from 'react';
import {View} from '../../atoms';
import {Image} from 'react-native';
import IMAGES from '../../../constants/images';

export default function ChatboxAvatar() {
  return (
    <View rounded>
      <Image
        source={IMAGES.Avatar}
        style={{
          width: 60,
          height: undefined,
          aspectRatio: 1,
          borderRadius: 15,
        }}
      />
    </View>
  );
}
