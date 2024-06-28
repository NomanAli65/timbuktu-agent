import React from 'react';
import {Image} from 'react-native';
import IMAGES from '../../constants/images';
import {horizontalScale} from '../../helpers/metrics';

interface IProps {
  width?: number;
}

export default function Avatar({width = horizontalScale(40)}: IProps) {
  return (
    <Image
      source={IMAGES.Avatar}
      style={{
        width,
        height: undefined,
        aspectRatio: 1,
        borderRadius: width / 2,
      }}
    />
  );
}
