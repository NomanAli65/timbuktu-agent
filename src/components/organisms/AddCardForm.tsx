import React, {useState} from 'react';
import {Button, View} from '../atoms';
import SVGS from '../../constants/svgs';
import {CheckboxGroup, UnderlinedLabeledInput} from '../molecules';

export default function AddCardForm() {
  const [savedCardCheckbox, setSavedCardCheckbox] = useState<string[]>([]);
  return (
    <View alignItems="center" flex={0.9} justifyContent="space-evenly" p="md">
      <SVGS.CreditCard
        style={{
          width: '100%',
          height: undefined,
        }}
      />

      <View gap={20}>
        <UnderlinedLabeledInput label="Name on card" />
        <UnderlinedLabeledInput label="Card Number" />
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <UnderlinedLabeledInput label="Expiry Date" width={'40%'} />
          <UnderlinedLabeledInput label="CVV" width={'40%'} />
        </View>
      </View>

      <View style={{width: '100%'}} gap={10}>
        <CheckboxGroup
          options={['Save this account for future payments.']}
          selectedOptions={savedCardCheckbox}
          onSelect={option => setSavedCardCheckbox(option)}
        />
        <Button label="Continue" />
      </View>
    </View>
  );
}
