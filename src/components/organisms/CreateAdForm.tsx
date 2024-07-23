import React, {PropsWithChildren, useState} from 'react';
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
  const [title, setTitle] = useState('My Ad 1');
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  );

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

      <UnderlinedLabeledInput
        label="Ad Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <UnderlinedLabeledInput
        label="Ad Description"
        multiline
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <UnderlinedLabeledInput
        label="Number of days to run Ad"
        placeholder="Please Select"
        placeholderTextColor={theme.colors.black}
        keyboardType="numeric"
      />

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

      <Button label="Create Ad" onPress={onPress} />
    </ScrollView>
  );
}
