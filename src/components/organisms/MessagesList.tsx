import {FlatList} from 'react-native';
import {Message} from '../types';
import {MessageContainer} from '../molecules';

interface IProps {
  messages: Message[];
}
export default function MessagesList({messages = []}: IProps) {
  return (
    <FlatList
      data={messages}
      renderItem={({item}) => <MessageContainer message={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
