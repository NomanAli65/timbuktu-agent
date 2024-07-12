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
      name: 'type',
      label: 'Select as a ',
      placeholder: 'Member / Agent',
      isDropdown: true,
      dropdownOptions: ['Member', 'Agent'],
    },
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
      label: 'Location',
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
      <UploadImagePlaceholder />
      <View gap={16} p="md" mt="lg">
        <Text variant="bold">Property Requirements</Text>
        <Form
          fields={addClientForm}
          submitButtonLabel="Add Client"
          labelColor="black"
          onSubmit={state => console.log({state})}
        />
        {/* <LabeledIconInput
          label="Number of baths"
          labelColor="black"
          placeholder="Number of baths"
        />

        <LabeledIconInput
          label="Number of beds"
          labelColor="black"
          placeholder="Number of beds"
        />

        <LabeledIconInput
          label="Location"
          labelColor="black"
          placeholder="Enter location"
        />

        <LabeledIconInput
          label="Zip Code"
          labelColor="black"
          placeholder="Enter Zip Code"
        />

        <LabeledDropdownInput
          label="* Purpose/Occasion:"
          labelColor="black"
          placeholder="Enter Zip Code"
          name=""
          handleChange={(name, value) => {}}
        />

        <LabeledIconInput
          label="Why(s):"
          labelColor="black"
          placeholder="Description"
          multiline
        />
        <LabeledIconInput
          label="Non Negotiables(s)"
          labelColor="black"
          placeholder="Description"
          multiline
        />

        <Button label="Add Client" /> */}
      </View>
    </ScrollView>
  );
}
