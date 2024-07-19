import {ImageSourcePropType, Switch} from 'react-native';
import {Avatar, Text, View} from '../../atoms';
import AdCardTimeLabel from './AdCardTimeLabel';
import useTheme from '../../../hooks/useTheme';
import {useState} from 'react';

interface IProps {
  name: string;
  image: ImageSourcePropType | string;
  running: boolean;
  preview: boolean;
}

export default function AdCardHeader({name, image, running, preview}: IProps) {
  const theme = useTheme();
  const [active, setActive] = useState(false);
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      pb="md"
      style={{borderBottomWidth: 1, borderBottomColor: theme.colors.gray5}}>
      <View flexDirection="row" alignItems="center">
        <Avatar source={image} />
        <View ml="xs">
          <Text size="sm" variant="medium">
            {name}
          </Text>
          {!preview && <AdCardTimeLabel />}
        </View>
      </View>
      {!preview && (
        <Switch
          value={active}
          trackColor={{
            true: theme.colors.primary,
          }}
          onValueChange={val => setActive(val)}
        />
      )}
    </View>
  );
}
