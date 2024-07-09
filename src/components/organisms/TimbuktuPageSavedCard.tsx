import React from 'react';
import {ITimbuktuSavedCard} from '../types';
import {Avatar, Text, View} from '../atoms';
import {horizontalScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';

interface IProps {
  details: ITimbuktuSavedCard;
}

export default function TimbuktuPageSavedCard({details}: IProps) {
  const theme = useTheme();
  return (
    <View
      flexDirection="row"
      alignItems="center"
      p="md"
      mv="xs"
      style={{
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: 20,
      }}>
      <View flexDirection="row" alignItems="center" flex={1}>
        <Avatar width={horizontalScale(60)} />
        <View ml="xs">
          <Text variant="bold" size="sm">
            {details.id}
          </Text>
          <Text
            size="sm"
            color={details.status === 'Active' ? 'success' : 'primary'}>
            {details.status}
          </Text>
        </View>
      </View>

      <Text size="xs" color="gray2">
        {details.time}
      </Text>
    </View>
  );
}
