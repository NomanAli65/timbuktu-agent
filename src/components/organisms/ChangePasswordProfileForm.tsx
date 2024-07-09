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
        label="Current Passowrd"
        placeholder="Enter Passowrd"
        leftIconName="lock"
        rightIconName="eye"
        labelColor="black"
        vector="FontAwesome"
        secureTextEntry
      />
      <LabeledIconInput
        label="New Passowrd"
        vector="FontAwesome"
        secureTextEntry
        placeholder="Enter Passowrd"
        leftIconName="lock"
        rightIconName="eye"
        labelColor="black"
      />

      <Button label="Continue" onPress={onSubmit} />
    </View>
  );
}
