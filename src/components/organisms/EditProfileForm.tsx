import {useNavigation} from '@react-navigation/native';
import {Button, ShadowContainer, Text, View} from '../atoms';
import {LabelWithIcon, LabeledIconInput} from '../molecules';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';

export default function EditProfileForm() {
  const navigation = useNavigation<MainStackNavigation>();

  const onSubmit = () => navigation.navigate(SCREENS.MY_PROFILE_DETAILS);
  return (
    <ShadowContainer p="md" mt="md" rounded style={{width: '90%'}}>
      <View>
        <Text variant="bold" size="md">
          505050
        </Text>
        <LabelWithIcon label="Texas, US" iconName="location" />
      </View>
      <View gap={20} mv="md">
        <LabeledIconInput
          label="Phone Number"
          placeholder="Phone Number"
          showLabel={false}
        />
        <LabeledIconInput
          label="License Number"
          placeholder="License Number"
          showLabel={false}
        />
        <LabeledIconInput
          label="Location"
          placeholder="Location"
          showLabel={false}
        />
        <LabeledIconInput label="Email" placeholder="Email" showLabel={false} />
        <LabeledIconInput
          label="Years in service"
          placeholder="Years in service"
          showLabel={false}
        />
        <LabeledIconInput
          label="Annual Sales Volume"
          placeholder="Annual Sales Volume"
          showLabel={false}
        />
        <LabeledIconInput
          label="Primary Service Areas & Neighborhoods"
          placeholder="Primary Service Areas & Neighborhoods"
          showLabel={false}
          multiline={true}
        />
        <LabeledIconInput
          label="Bio & Specialty"
          placeholder="Bio & Specialty"
          showLabel={false}
          multiline={true}
        />

        <Button label="Update profile" onPress={onSubmit} />
      </View>
    </ShadowContainer>
  );
}
