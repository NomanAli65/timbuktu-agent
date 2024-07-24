import React, {useEffect, useState} from 'react';
import {BlurContainer, Button, Text, View} from '../atoms';
import {
  FormTabsHeader,
  LabeledDropdownInput,
  LabeledIconInput,
} from '../molecules';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProp} from '../../navigation/types';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {
  signupAsAgentOrMemberAync,
  signupAsNonMemberOrGuestAync,
} from '../../redux/slices/auth/authThunks';
import {ScrollView, TouchableOpacity} from 'react-native';
import SCREENS from '../../constants/screens';

export default function SignupForm() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const navigation = useNavigation<AuthStackNavigationProp>();
  const dispatch = useAppDispatch();

  const userTypeOptions = ['Member/Agent', 'Non Member/Non Agent'];
  const [selectedUserType, setSelectedUserType] = useState(userTypeOptions[0]);

  const onSubmit = () => {
    if (selectedUserType === userTypeOptions[0]) {
      dispatch(signupAsAgentOrMemberAync());
    } else {
      dispatch(signupAsNonMemberOrGuestAync());
    }
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
              title: 'Sign Up',
              onPress: () => {},
            },
          ]}
          activeId={2}
        />

        <ScrollView
          contentContainerStyle={{
            gap: 12,
          }}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="always">
          <TouchableOpacity onPress={() => setToggleDropdown(true)}>
            <View pointerEvents="none">
              <LabeledDropdownInput
                label="Select as a"
                options={userTypeOptions}
                handleChange={(_, value) => {
                  setSelectedUserType(value as string);
                  setToggleDropdown(false);
                }}
                close={() => setToggleDropdown(!toggleDropdown)}
                isVisible={toggleDropdown}
                name="usertype"
                value={selectedUserType}
                rightIconName="keyboard-arrow-down"
                vector="MaterialIcons"
              />
            </View>
          </TouchableOpacity>

          <LabeledIconInput
            label="Full Name"
            placeholder="Enter full name"
            leftIconName="user"
            vector="FontAwesome"
          />

          {selectedUserType === userTypeOptions[0] ? (
            <LabeledIconInput
              label="License Number(s)"
              placeholder="Enter License Number(s)"
              leftIconName="drivers-license"
              vector="FontAwesome"
            />
          ) : (
            <LabeledIconInput
              label="Referral Code"
              placeholder="Enter referral code"
              leftIconName="drivers-license"
              vector="FontAwesome"
            />
          )}

          <LabeledIconInput
            label="State(s)"
            placeholder="Enter state(s)"
            leftIconName="location-arrow"
            vector="FontAwesome"
          />

          {selectedUserType === userTypeOptions[0] ? (
            <LabeledIconInput
              label="Enter City(ies)"
              placeholder="Enter city(ies)"
              leftIconName="location-arrow"
              vector="FontAwesome"
            />
          ) : (
            <LabeledIconInput
              label="Location"
              placeholder="Enter location"
              leftIconName="location-arrow"
              vector="FontAwesome"
            />
          )}

          <LabeledIconInput
            label="Mobile Phone Number"
            placeholder="Enter Phone Number"
            leftIconName="phone"
            vector="FontAwesome"
          />
          <LabeledIconInput
            label="Email Address"
            placeholder="Enter Email Address"
            leftIconName="mail-bulk"
            vector="FontAwesome5"
          />
          <LabeledIconInput
            label="Password"
            placeholder="Enter Password"
            leftIconName="lock"
            vector="FontAwesome5"
            secureTextEntry
          />
          <LabeledIconInput
            label="Confirm Password"
            placeholder="Enter confirm password"
            leftIconName="lock"
            vector="FontAwesome5"
            secureTextEntry
          />

          <Button label="Sign Up" onPress={onSubmit} />
          <Text color="white" size="sm" textAlign="center">
            Already have an account?{' '}
            <Text
              color="primary"
              size="sm"
              style={{
                textDecorationLine: 'underline',
              }}
              onPress={() => navigation.navigate(SCREENS.LOGIN)}>
              Sign in
            </Text>
          </Text>
        </ScrollView>
      </View>
    </BlurContainer>
  );
}
