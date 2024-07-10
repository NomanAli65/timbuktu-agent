import {ImageSourcePropType, Switch} from 'react-native';
import {Avatar, Text, View} from '../../atoms';
import AdCardTimeLabel from './AdCardTimeLabel';

interface IProps {
  name: string;
  image: ImageSourcePropType | string;
  running: boolean;
  preview: boolean;
}

export default function AdCardHeader({name, image, running, preview}: IProps) {
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <View flexDirection="row" alignItems="center">
        <Avatar source={image} />
        <View ml="xs">
          <Text size="sm" variant="medium">
            {name}
          </Text>
          {!preview && <AdCardTimeLabel />}
        </View>
      </View>
      {!preview && <Switch value={running} />}
    </View>
  );
}
