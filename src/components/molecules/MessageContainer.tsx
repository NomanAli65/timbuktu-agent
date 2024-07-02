import useTheme from '../../hooks/useTheme';
import theme from '../../styles/theme/theme';
import {Text, View} from '../atoms';
import {Message} from '../types';

interface IProps {
  message: Message;
}

export default function MessageContainer({message}: IProps) {
  const userId = 22;
  const theme = useTheme();
  return (
    <View
      backgroundColor={message.userId === userId ? 'primary' : 'white'}
      p="md"
      mv="xs"
      style={{
        borderWidth: message.userId !== userId ? 1 : 0,
        borderColor: theme.colors.gray,
        alignSelf: message.userId === userId ? 'flex-end' : 'flex-start',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: message.userId !== userId ? 0 : 20,
        borderBottomRightRadius: message.userId !== userId ? 20 : 0,
      }}>
      <Text size="sm" color={message.userId === userId ? 'white' : 'gray4'}>
        {message.message}
      </Text>
      <Text
        size="xs"
        textAlign="right"
        color={message.userId === userId ? 'white' : 'gray4'}>
        11:21
      </Text>
    </View>
  );
}
