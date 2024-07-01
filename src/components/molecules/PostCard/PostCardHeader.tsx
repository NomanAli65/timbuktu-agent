import {moderateScale} from '../../../helpers/metrics';
import useTheme from '../../../hooks/useTheme';
import {Avatar, Icon, Text, View} from '../../atoms';
import PostTimeLabel from './PostTimeLabel';

export default function PostCardHeader() {
  const theme = useTheme();
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <View flexDirection="row" alignItems="center">
        <Avatar />
        <View ml="xs">
          <Text size="sm" variant="medium">
            Salon Loft
          </Text>
          <PostTimeLabel />
        </View>
      </View>

      <Icon
        vector="Entypo"
        name="dots-three-vertical"
        size={moderateScale(20)}
        color={theme.colors.gray2}
      />
    </View>
  );
}
