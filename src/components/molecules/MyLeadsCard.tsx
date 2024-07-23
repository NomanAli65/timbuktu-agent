import {useNavigation} from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';
import {Image, TouchableOpacity} from 'react-native';
import {Icon, ShadowContainer, Text, View} from '../atoms';
import {IMyLead} from '../types';

interface IProps {
  details: IMyLead;
}

export default function MyLeadsCard({details}: IProps) {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
  const onPress = () => navigation.navigate(SCREENS.LEAD_DETAILS);
  return (
    <TouchableOpacity onPress={onPress}>
      <ShadowContainer flexDirection="row" m="md" rounded>
        <View
          backgroundColor="gray3"
          style={{
            width: '35%',
          }}>
          <Image
            source={details.image}
            style={{
              width: '100%',
              height: undefined,
              aspectRatio: 1,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
        </View>
        <View gap={6} justifyContent="center" ml="md">
          <Text variant="medium">
            {details.type === 'buyer'
              ? 'Buyer'
              : details.type === 'seller'
              ? 'Seller'
              : details.type}
          </Text>
          <View flexDirection="row" alignItems="center">
            <Icon name="location" size={14} color={theme.colors.gray8} />
            <Text size="sm" color="gray8">
              {details.address}
            </Text>
          </View>
        </View>
      </ShadowContainer>
    </TouchableOpacity>
  );
}
