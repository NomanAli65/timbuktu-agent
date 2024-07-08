import React from 'react';
import {BlurContainer, View} from '../atoms';
import {FormTabsHeader} from '../molecules';
import {Form} from '../organisms';
import {Field} from '../types';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProp} from '../../navigation/types';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {signupAsync} from '../../redux/slices/auth/authThunks';

export default function SignupForm() {
  const registerFields: Field[] = [
    {
      name: 'type',
      label: 'Select as a ',
      placeholder: 'Member / Agent',
      rightIconName: 'keyboard-arrow-down',
      vector: 'MaterialIcons',
    },
    {
      name: 'name',
      label: 'Full Name',
      placeholder: 'Enter full name',
      leftIconName: 'person',
    },
    {
      name: 'license',
      label: 'License Number(s)',
      placeholder: 'Enter license number(s)',
      leftIconName: 'drivers-license',
      vector: 'FontAwesome',
    },
    {
      name: 'state',
      label: 'State(s)',
      placeholder: 'Enter state(s)',
      leftIconName: 'location-arrow',
      vector: 'FontAwesome5',
    },
    {
      name: 'city',
      label: 'City(s)',
      placeholder: 'Enter city(ies)',
      leftIconName: 'location-arrow',
      vector: 'FontAwesome5',
    },
    {
      name: 'phone',
      label: 'Mobile phone number',
      placeholder: 'Mobile phone number',
      leftIconName: 'call',
      vector: 'Ionicons',
    },
    {
      name: 'email',
      label: 'Email address',
      placeholder: 'Enter email address',
      leftIconName: 'mail',
      vector: 'Ionicons',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter password',
      leftIconName: 'lock-closed',
      vector: 'Ionicons',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm password',
      placeholder: 'Enter confirm password',
      leftIconName: 'lock-closed',
      vector: 'Ionicons',
    },
  ];

  const navigation = useNavigation<AuthStackNavigationProp>();
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(signupAsync());
  };

  return (
    <BlurContainer>
      <View p="lg" justifyContent="space-evenly" flex={1}>
        <FormTabsHeader
          items={[
            {
              id: 1,
              title: 'Sign In',
              onPress: () => navigation.goBack(),
            },
            {
              id: 2,
              title: 'Register',
              onPress: () => {},
            },
          ]}
          activeId={2}
        />
        <Form
          fields={registerFields}
          onSubmit={onSubmit}
          submitButtonLabel="Sign up"
          justifyContent="space-evenly"
          scrollEnabled
          gap={10}
        />
      </View>
    </BlurContainer>
  );
}
