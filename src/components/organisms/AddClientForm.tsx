import React from 'react';
import {ScrollView} from 'react-native';
import {
  LabeledDropdownInput,
  LabeledIconInput,
  UploadImagePlaceholder,
} from '../molecules';
import {Button, Text, View} from '../atoms';
import {Field} from '../types';
import Form from './Form';

export default function AddClientForm() {
  const addClientForm: Field[] = [
    {
      name: 'baths',
      label: 'Number of baths',
      placeholder: 'Number of baths',
    },
    {
      name: 'beds',
      label: 'Number of beds',
      placeholder: 'Enter Number of beds',
    },
    {
      name: 'location',
      label: 'Location*',
      placeholder: 'Enter location',
    },
    {
      name: 'zipcode',
      label: 'Zip Code',
      placeholder: 'Enter Zip Code',
    },
    {
      name: 'purpose',
      label: 'Purpose/Occasion',
      placeholder: 'Select Purpose',
      isDropdown: true,
      dropdownOptions: ['Buying', 'Selling'],
    },
    {
      name: 'why',
      label: 'Why(s)',
      placeholder: 'Description',
      multiline: true,
    },

    {
      name: 'nonNegotiables',
      label: 'Non Negotiable(s)',
      placeholder: 'Description',
      multiline: true,
    },
  ];

  return (
    <ScrollView>
      <UploadImagePlaceholder showBtn={false} />
      <View gap={16} p="md" mt="lg">
        <Text variant="bold">Property Requirements:</Text>
        <Form
          fields={addClientForm}
          submitButtonLabel="Add Client"
          labelColor="black"
          onSubmit={state => console.log({state})}
        />
      </View>
    </ScrollView>
  );
}
