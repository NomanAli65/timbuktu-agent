import React, {useState} from 'react';
import {Button, View} from '../atoms';
import SVGS from '../../constants/svgs';
import {CheckboxGroup, UnderlinedLabeledInput} from '../molecules';
import useKeyboard from '../../hooks/useKeyboard';

export default function AddCardForm() {
  const [savedCardCheckbox, setSavedCardCheckbox] = useState<string[]>([]);
  const [name, setName] = useState('Mark Carson');
  const [cardNumber, setCardNumber] = useState('**** **** 8344 987');
  const [expiryDate, setExpiryDate] = useState('03/24');
  const [CVV, setCVV] = useState('999');
  const {isOpen} = useKeyboard();
  return (
    <View alignItems="center" flex={1} justifyContent="space-evenly" p="md">
      {!isOpen && (
        <SVGS.CreditCard
          style={{
            width: '100%',
            height: undefined,
          }}
        />
      )}

      <View gap={20}>
        <UnderlinedLabeledInput
          label="Name on card"
          value={name}
          onChangeText={text => setName(text)}
        />
        <UnderlinedLabeledInput
          label="Card Number "
          value={cardNumber}
          onChangeText={text => setCardNumber(text)}
        />
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <UnderlinedLabeledInput
            label="Expiry Date"
            width={'40%'}
            value={expiryDate}
            onChangeText={text => setExpiryDate(text)}
          />
          <UnderlinedLabeledInput
            label="CVV"
            width={'40%'}
            secureTextEntry
            value={CVV}
            onChangeText={text => setCVV(text)}
          />
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
