import React from 'react';
import {View} from '../atoms';
import {AddClientForm, Header} from '../organisms';

export default function AddClientTemplate() {
  return (
    <View flex={1}>
      <Header title="Setup Property" />
      <AddClientForm />
    </View>
  );
}
