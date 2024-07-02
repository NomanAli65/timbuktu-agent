import React from 'react';
import {SafeAreaContainer, ScreenContainer, Text, View} from '../../atoms';
import {Header} from '../../organisms';
import {MainStackScreensProp} from '../../../navigation/types';
import {MessagesListTemp} from '../../templates';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useKeyboard from '../../../hooks/useKeyboard';

export default function Messages({route}: MainStackScreensProp) {
  const insets = useSafeAreaInsets();
  const {isOpen} = useKeyboard();
  return (
    <ScreenContainer
      backgroundColor="white"
      style={{
        paddingTop: insets.top,
        paddingBottom: isOpen ? 0 : insets.bottom,
      }}>
      <Header title="505050" goBack />
      <MessagesListTemp messages={route.params?.messages || []} />
    </ScreenContainer>
  );
}
