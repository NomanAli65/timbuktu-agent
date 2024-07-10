import React from 'react';
import {View} from '../atoms';
import {AddCardForm, Header} from '../organisms';

export default function AddCardTemplate() {
  return (
    <View flex={1}>
      <Header title="Add card" />
      <AddCardForm />
    </View>
  );
}
