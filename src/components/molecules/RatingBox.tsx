import React from 'react';
import useTheme from '../../hooks/useTheme';
import {Text, View} from '../atoms';
import {Rating} from '@kolking/react-native-rating';

export default function RatingBox() {
  const theme = useTheme();
  return (
    <View
      flexDirection="row"
      alignItems="center"
      gap={4}
      backgroundColor="gray6"
      p="xxs"
      rounded>
      <Rating
        size={14}
        rating={1}
        maxRating={1}
        fillColor={theme.colors.gray4}
      />
      <Text size="xs" color="gray4">
        5.00
      </Text>
    </View>
  );
}
