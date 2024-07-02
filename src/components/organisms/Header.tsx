import React from 'react';
import {HeaderBackButton} from '../molecules';
import {Text, View} from '../atoms';

interface IProps {
  goBack?: boolean;
  title: string;
}

export default function Header({goBack = true, title}: IProps) {
  return (
    <View
      style={{position: 'relative'}}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center"
      p="md">
      {goBack && <HeaderBackButton />}
      <Text textAlign="center" variant="semibold">
        {title.toUpperCase()}
      </Text>
    </View>
  );
}
