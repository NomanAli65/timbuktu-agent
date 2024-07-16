import React from 'react';
import {MessageInput} from '../molecules';
import {Icon, View} from '../atoms';
import {moderateScale} from '../../helpers/metrics';
import useKeyboard from '../../hooks/useKeyboard';
import useTheme from '../../hooks/useTheme';
import { Platform } from 'react-native';

export default function MessageInputContainer() {
  const {isOpen, keyboardHeight} = useKeyboard();
  const theme = useTheme();
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      style={{
        position: isOpen ? 'absolute' : 'relative',
        bottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      }}
      p={isOpen ? 'none' : 'md'}>
      <View flex={1}>
        <MessageInput />
      </View>
      {!isOpen && (
        <View flexDirection="row" alignItems="center" gap={20} ml="lg">
          <Icon name="attachment" vector="Entypo" size={moderateScale(26)} color={theme.colors.gray4} />
          <Icon name="filetext1" vector="AntDesign" size={moderateScale(26)} color={theme.colors.gray4}/>
          <Icon
            name="account-group-outline"
            vector="MaterialCommunityIcons"
            size={moderateScale(26)}
            color={theme.colors.gray4}
          />
        </View>
      )}
    </View>
  );
}
