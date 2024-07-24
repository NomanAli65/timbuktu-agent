import React from 'react';
import {Button, View} from '../atoms';
import {LabeledIconInput} from '../molecules';
import {useNavigation} from '@react-navigation/native';

export default function ChangePasswordProfileForm() {
  const navigation = useNavigation();
  const onSubmit = () => navigation.goBack();
  return (
    <View p="md" gap={16}>
      <LabeledIconInput
        label="Current Password"
        placeholder="Enter Password"
        leftIconName="lock"
        labelColor="black"
        vector="FontAwesome"
        secureTextEntry
      />
      <LabeledIconInput
        label="New Password"
        vector="FontAwesome"
        secureTextEntry
        placeholder="Enter Password"
        leftIconName="lock"
        labelColor="black"
      />
      <LabeledIconInput
        label="Confirm Password"
        vector="FontAwesome"
        secureTextEntry
        placeholder="Enter Confirm Password"
        leftIconName="lock"
        labelColor="black"
      />

      <Button label="Continue" onPress={onSubmit} />
    </View>
  );
}
