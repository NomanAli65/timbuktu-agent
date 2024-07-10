import React, {PropsWithChildren} from 'react';
import {Button, Icon, Text, View} from '../atoms';
import {ScrollView} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {moderateScale} from '../../helpers/metrics';
import {UnderlinedLabeledInput} from '../molecules';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';

const DashedBorderContainer = ({children}: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <View
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray7"
      rounded
      style={{
        height: 150,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: theme.colors.gray2,
      }}>
      {children}
    </View>
  );
};

export default function CreateAdForm() {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
  const onPress = () => navigation.navigate(SCREENS.AD_PREVIEW);
  return (
    <ScrollView
      contentContainerStyle={{
        padding: theme.spacing.md,
        gap: 30,
      }}>
      <DashedBorderContainer>
        <Icon
          name="cloud-upload"
          vector="FontAwesome"
          color={theme.colors.primary}
          size={moderateScale(30)}
        />
        <Text size="sm">Upload Ad Image / Video</Text>
      </DashedBorderContainer>

      <UnderlinedLabeledInput label="Ad Title" />
      <UnderlinedLabeledInput label="Ad Description" multiline />
      <UnderlinedLabeledInput label="Number of days to run Ad" />

      <DashedBorderContainer>
        <Text color="primary" variant="bold" size="lg">
          100 USD
        </Text>
        <Text>Your total budget</Text>
      </DashedBorderContainer>

      <View mt="xs">
        <Text size="xs" variant="bold">
          Info:{' '}
          <Text size="xs" color="gray4">
            Your ad will cost $3 per day.
          </Text>
        </Text>
      </View>

      <Button label="Continue" onPress={onPress} />
    </ScrollView>
  );
}
