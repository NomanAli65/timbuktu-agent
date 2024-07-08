import React from 'react';
import {Text, View} from '../atoms';
import {ViewStyle} from 'react-native';

interface IProps {
  styles?: ViewStyle;
  statValue: number;
  text1: string;
  text2: string;
}

export default function ReferralAgentStatsCard({
  styles,
  statValue,
  text1,
  text2,
}: IProps) {
  return (
    <View
      alignItems="center"
      justifyContent="center"
      p="md"
      flex={1}
      style={[styles]}>
      <Text variant="bold" size="xl">
        {statValue}
      </Text>
      <Text size="sm">{text1}</Text>
      <Text size="sm">{text2}</Text>
    </View>
  );
}
