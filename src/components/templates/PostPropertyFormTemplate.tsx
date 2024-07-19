import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Header} from '../organisms';
import PostPropertyForm from '../organisms/PostPropertyForm';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';
import {BottomTabBarHeight} from '../../constants/values';
import {KeyboardAvoidingContainer} from '../atoms';

export default function PostPropertyFormTemplate() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <KeyboardAvoidingContainer>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: insets.bottom + theme.spacing.md + BottomTabBarHeight,
        }}>
        <Header title="Post property" goBack={true} />
        <PostPropertyForm />
      </ScrollView>
    </KeyboardAvoidingContainer>
  );
}
