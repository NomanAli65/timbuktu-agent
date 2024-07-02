import {View} from '../atoms';
import {MessageInputContainer, MessagesList} from '../organisms';
import {Message} from '../types';

interface IProps {
  messages: Message[];
}

export default function MessagesListTemp({messages}: IProps) {
  return (
    <View flex={1}>
      <MessagesList messages={messages} />
      <MessageInputContainer />
    </View>
  );
}
