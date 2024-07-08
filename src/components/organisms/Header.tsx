import React from 'react';
import {HeaderBackButton} from '../molecules';
import {Text, View} from '../atoms';

interface IProps {
  goBack?: boolean;
  title: string;
  transparent?: boolean;
}

export default function Header({
  goBack = true,
  title,
  transparent = false,
}: IProps) {
  return (
    <View
      style={{position: 'relative'}}
      backgroundColor={!transparent ? 'white' : undefined}
      alignItems="center"
      justifyContent="center"
      p="md">
      {goBack && <HeaderBackButton />}
      <Text textAlign="center" variant="semibold" size="sm">
        {title.toUpperCase()}
      </Text>
    </View>
  );
}
