import IMAGES from '../../constants/images';
import {View} from '../atoms';
import {AdCard} from '../molecules';
import {IAdDetails} from '../types';

interface IProps {
  items: IAdDetails[];
}

export default function MyAdsList({items = []}: IProps) {
  return (
    <View>
      {items.map(item => (
        <AdCard item={item} key={item.id} />
      ))}
    </View>
  );
}
