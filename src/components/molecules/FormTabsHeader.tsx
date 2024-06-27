import {ActiveLineText} from '.';
import {View} from '../atoms';
import {TFormTabHeader} from '../types';

interface IProps {
  items: TFormTabHeader[];
  activeId: number;
}

export default function FormTabsHeader({items, activeId}: IProps) {
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      p="md">
      {items.map(item => (
        <ActiveLineText
          color="white"
          onPress={item.onPress}
          key={item.id}
          active={item.id === activeId}>
          {item.title}
        </ActiveLineText>
      ))}
    </View>
  );
}
