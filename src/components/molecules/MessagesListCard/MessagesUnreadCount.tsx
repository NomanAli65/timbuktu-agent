import React from 'react';
import {Text, View} from '../../atoms';
import {horizontalScale} from '../../../helpers/metrics';

interface IProps {
  count: number;
}

export default function ChatboxUnreadCount({count}: IProps) {
  return (
    <View
      backgroundColor="primary"
      style={{
        width: horizontalScale(30),
        height: undefined,
        aspectRatio: 1,
        borderRadius: horizontalScale(30) / 2,
      }}
      justifyContent="center"
      alignItems="center">
      <Text color="white" variant="medium" size="sm">
        {count}
      </Text>
    </View>
  );
}
