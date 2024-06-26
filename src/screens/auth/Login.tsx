import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, View} from '../../components';
import SVGS from '../../constants/svgs';
import LinearGradient from 'react-native-linear-gradient';
import useTheme from '../../hooks/useTheme';
import {Image, ImageBackground, useWindowDimensions} from 'react-native';
import IMAGES from '../../constants/images';

export default function Login() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const {width, height} = useWindowDimensions();
  return (
    <View
      flex={1}
      backgroundColor="black"
      alignItems="center"
      style={{
        paddingTop: insets.top,
      }}>
      <View>
        <SVGS.Logo />
      </View>

      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
        style={{width: 200, height: 200}}>
        <Image
          source={IMAGES.LoginBackground}
          style={{
            width: 200,
            height: 200,
            aspectRatio: 1,
          }}
        />
      </LinearGradient>
    </View>
  );
}
