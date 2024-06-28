import {BlurView} from '@react-native-community/blur';
import {Platform, StyleSheet} from 'react-native';

import View from './View';
import {PropsWithChildren} from 'react';
import useTheme from '../../hooks/useTheme';

export default function BlurContainer({children}: PropsWithChildren) {
  const theme = useTheme();
  return Platform.OS === 'ios' ? (
    <BlurView
      blurType="extraDark"
      blurAmount={20}
      style={[styles.containerIOS, {borderColor: theme.colors.primary}]}>
      {children}
    </BlurView>
  ) : (
    <View
      style={[styles.containerAndroid, {borderColor: theme.colors.primary}]}>
      <View
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundColor: theme.colors.black,
          opacity: 0.9,
          borderRadius: 20,
        }}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  containerIOS: {
    borderWidth: 1,
    borderRadius: 20,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  containerAndroid: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 20,
  },
});
