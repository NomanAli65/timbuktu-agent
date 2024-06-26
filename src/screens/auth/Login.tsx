import {Image, useWindowDimensions} from 'react-native';
import {
  View,
  ScreenContainer,
  SafeAreaContainer,
  Button,
} from '../../components';
import SVGS from '../../constants/svgs';
import IMAGES from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import useTheme from '../../hooks/useTheme';

export default function Login() {
  const {width, height} = useWindowDimensions();
  const theme = useTheme();
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
            width,
            height,
            aspectRatio: 1,
            resizeMode: 'contain',
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: 20,
            zIndex: 10,
            width: '100%',
          }}
          alignItems="center"
          justifyContent="center">
          <Button label="Get Connected" style={{width: '90%'}} />
        </View>

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
