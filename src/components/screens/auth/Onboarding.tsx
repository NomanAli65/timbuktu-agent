import {Image, useWindowDimensions} from 'react-native';
import {View, ScreenContainer, SafeAreaContainer, Button} from '../../atoms';
import SVGS from '../../../constants/svgs';
import IMAGES from '../../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import useTheme from '../../../hooks/useTheme';
import {AuthScreenProp} from '../../../navigation/types';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

export default function Onboarding({navigation}: AuthScreenProp) {
  const {width, height} = useWindowDimensions();
  const translate = useSharedValue(0);
  const theme = useTheme();
  const focused = useIsFocused();

  const onPress = () => navigation.navigate('Login');

  useFocusEffect(() => {
    return () => {
      translate.value = withTiming(-width * 1.2, {duration: 1000});
    };
  });

  return (
    <SafeAreaContainer backgroundColor="black">
      <ScreenContainer>
        <View
          style={{
            position: 'absolute',
            width: '100%',
          }}
          justifyContent="center"
          alignItems="center"
          pt="md">
          <SVGS.Logo />
        </View>
        <Animated.Image
          source={IMAGES.LoginBackground}
          style={{
            width,
            height,
            resizeMode: 'contain',
            aspectRatio: 1,
            transform: [{translateX: translate}],
          }}
        />

        {focused && (
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              zIndex: 99,
              width: '100%',
            }}
            alignItems="center"
            justifyContent="center">
            <Button
              label="Get Connected"
              style={{width: '90%', zIndex: 99}}
              onPress={onPress}
            />
          </View>
        )}
        <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)', theme.colors.black]}
            style={{height: 200}}
          />
        </View>
      </ScreenContainer>
    </SafeAreaContainer>
  );
}
