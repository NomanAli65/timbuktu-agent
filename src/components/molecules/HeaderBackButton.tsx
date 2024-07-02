import React from 'react';
import {Icon, ShadowContainer} from '../atoms';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HeaderBackButton() {
  const theme = useTheme();
  const navigation = useNavigation();
  const onPress = () => navigation.goBack();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'absolute',
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ShadowContainer justifyContent="center" alignItems="center" rounded>
        <Icon
          name="keyboard-arrow-left"
          vector="MaterialIcons"
          size={moderateScale(30)}
          color={theme.colors.black}
        />
      </ShadowContainer>
    </TouchableOpacity>
  );
}
