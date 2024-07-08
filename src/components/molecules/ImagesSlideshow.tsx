import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  useWindowDimensions,
} from 'react-native';
import {View} from '../atoms';

interface IProps {
  images: ImageSourcePropType[];
  height: number;
}

export default function ImagesSlideshow({images, height}: IProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<FlatList>(null);
  const {width} = useWindowDimensions();
  const radius = 20;

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View style={{position: 'relative', alignItems: 'center'}}>
      <FlatList
        ref={ref}
        data={images}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Image
            source={item}
            style={{
              width,
              height: height,
              borderBottomLeftRadius: radius,
              borderBottomRightRadius: radius,
            }}
          />
        )}
        pagingEnabled
        horizontal
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
      />
      <View
        style={{position: 'absolute', zIndex: 10, bottom: 10}}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={5}
        backgroundColor="white"
        p="xs"
        rounded>
        {images.map((_, idx) => (
          <View
            style={{width: 20, height: 4}}
            key={idx}
            backgroundColor={currentSlideIndex === idx ? 'primary' : 'gray'}
            rounded
          />
        ))}
      </View>
    </View>
  );
}
