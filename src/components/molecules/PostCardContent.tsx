import React from 'react';
import {Text, View} from '../atoms';
import {Image} from 'react-native';
import IMAGES from '../../constants/images';

export default function PostCardContent() {
  return (
    <View gap={10} mv="md">
      <Text size="sm">
        Lorem Ipsum is simply dummy text of the printing and industry{' '}
        <Text color="tags" size="sm">
          #Services #Office
        </Text>
      </Text>
      <Image
        source={IMAGES.House1}
        style={{
          width: '100%',
          height: 250,
          borderRadius: 30,
        }}
      />
    </View>
  );
}
