import {Image, useWindowDimensions} from 'react-native';
import {View, ScreenContainer, SafeAreaContainer, Button} from '../../atoms';
import SVGS from '../../../constants/svgs';
import IMAGES from '../../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import useTheme from '../../../hooks/useTheme';
import {AuthScreenProp} from '../../../navigation/types';
import {useIsFocused} from '@react-navigation/native';

export default function Onboarding({navigation}: AuthScreenProp) {
  const {width, height} = useWindowDimensions();
  const theme = useTheme();
  const focused = useIsFocused();

  const onPress = () => navigation.navigate('Login');

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
        <Image
          source={IMAGES.LoginBackground}
          style={{
            width: focused ? width * 2 : undefined,
            height,
            resizeMode: 'contain',
            aspectRatio: 1,
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
