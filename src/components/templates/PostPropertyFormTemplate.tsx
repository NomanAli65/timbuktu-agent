import React from 'react';
import {ScrollView} from 'react-native';
import {Header} from '../organisms';
import PostPropertyForm from '../organisms/PostPropertyForm';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';

export default function PostPropertyFormTemplate() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom + theme.spacing.md,
      }}>
      <Header title="Post property" goBack={false} />
      <PostPropertyForm />
    </ScrollView>
  );
}
