import React from 'react';
import {HeaderBackButton} from '../molecules';
import {Icon, ShadowContainer, Text, View} from '../atoms';
import {IHeaderOption} from '../types';
import {TouchableOpacity} from 'react-native';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';

interface IProps {
  goBack?: boolean;
  title: string;
  transparent?: boolean;
  options?: IHeaderOption[];
}

export default function Header({
  goBack = true,

  title,
  transparent = false,
  options = [],
}: IProps) {
  const theme = useTheme();
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

      {options &&
        options.map(item => (
          <TouchableOpacity
            onPress={item.onPress}
            key={item.id}
            style={{
              position: 'absolute',
              right: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ShadowContainer
              justifyContent="center"
              alignItems="center"
              rounded
              p="xs">
              <Icon
                name={item.icon}
                vector={item.iconVector}
                size={moderateScale(24)}
                color={theme.colors.black}
              />
            </ShadowContainer>
          </TouchableOpacity>
        ))}
    </View>
  );
}
