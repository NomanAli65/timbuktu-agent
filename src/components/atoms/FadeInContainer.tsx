import {useFocusEffect} from '@react-navigation/native';
import {PropsWithChildren} from 'react';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

export default function FadeInContainer({children}: PropsWithChildren) {
  const opacity = useSharedValue(0);

  useFocusEffect(() => {
    opacity.value = withTiming(1, {duration: 800});

    return () => {
      opacity.value = 0;
    };
  });
  return <Animated.View style={{opacity}}>{children}</Animated.View>;
}
