import {TouchableOpacity} from 'react-native';
import shortenString from '../../../helpers/shortenString';
import useTheme from '../../../hooks/useTheme';
import {Text, View} from '../../atoms';
import {MessageAvatar, MessagesUnreadCount} from '.';
import {IMessages} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

interface IProps {
  item: IMessages;
}
export default function MessagesListItem({item}: IProps) {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
  const onPress = () =>
    navigation.navigate(SCREENS.MESSAGES, {
      messages: item.messages,
    });
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p="md"
        rounded
        style={{
          borderWidth: 1,
          borderColor: theme.colors.gray,
        }}
        mv="xs">
        <View flexDirection="row" alignItems="center" gap={4} flex={1}>
          <MessageAvatar />
          <View ml="xs" flex={1}>
            <Text variant="bold" size="sm">
              ID: {item.id}
            </Text>
            <Text color="gray2" size="sm">
              {shortenString(
                item.messages[item.messages.length - 1].message,
                40,
              )}
            </Text>
          </View>
        </View>
        <View gap={4}>
          <Text color="gray2" size="sm">
            {item.time}
          </Text>
          {item.unreadCount > 0 && (
            <MessagesUnreadCount count={item.unreadCount} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
