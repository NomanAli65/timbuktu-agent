import React from 'react';
import {View} from '../atoms';
import {CreateAdForm, Header} from '../organisms';

export default function CreateAdTemplate() {
  return (
    <View flex={1}>
      <Header title="Create Ad" />
      <CreateAdForm />
    </View>
  );
}
