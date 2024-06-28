import {ScrollView} from 'react-native';
import {ScreenContainer, View} from '../../atoms';
import useTheme from '../../../hooks/useTheme';
import {PostCard} from '../../templates';

export default function Home() {
  const theme = useTheme();
  return (
    <ScreenContainer backgroundColor="white" p="md">
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{paddingTop: theme.spacing.xs}}>
        <PostCard />
      </ScrollView>
    </ScreenContainer>
  );
}
