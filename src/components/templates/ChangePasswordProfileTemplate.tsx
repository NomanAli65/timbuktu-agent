import React from 'react';
import {ChangePasswordProfileForm, Header} from '../organisms';
import {View} from '../atoms';

export default function ChangePasswordProfileTemplate() {
  return (
    <View>
      <Header title="Change Password" goBack />
      <ChangePasswordProfileForm />
    </View>
  );
}
