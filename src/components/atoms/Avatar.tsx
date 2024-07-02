import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import IMAGES from '../../constants/images';
import {horizontalScale} from '../../helpers/metrics';

interface IProps {
  width?: number;
  source?: ImageSourcePropType;
}

export default function Avatar({
  width = horizontalScale(40),
  source = IMAGES.Avatar,
}: IProps) {
  return (
    <Image
      source={source}
      style={{
        width,
        height: undefined,
        aspectRatio: 1,
        borderRadius: width / 2,
      }}
    />
  );
}
