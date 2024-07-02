import {FlatList} from 'react-native';
import {Message} from '../types';
import {MessageContainer} from '../molecules';
import useTheme from '../../hooks/useTheme';

interface IProps {
  messages: Message[];
}
export default function MessagesList({messages = []}: IProps) {
  const theme = useTheme();
  return (
    <FlatList
      data={messages}
      renderItem={({item}) => <MessageContainer message={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.xs,
      }}
    />
  );
}
