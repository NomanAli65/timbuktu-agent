import React from 'react';
import {ScrollView} from 'react-native';
import {LabeledIconInput, UploadImagePlaceholder} from '../molecules';
import {Button, Text, View} from '../atoms';

export default function AddClientForm() {
  return (
    <ScrollView>
      <UploadImagePlaceholder />
      <View gap={16} p="md" mt="lg">
        <Text variant="bold">Property Requirements</Text>
        <LabeledIconInput
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

        <LabeledIconInput
          label="* Purpose/Occasion:"
          labelColor="black"
          placeholder="Enter Zip Code"
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

        <Button label="Add Client" />
      </View>
    </ScrollView>
  );
}
