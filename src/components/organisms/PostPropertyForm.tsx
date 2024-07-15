import React, {useState} from 'react';
import {Button, Text, View} from '../atoms';
import UploadImagePlaceholder from '../molecules/UploadImagePlaceholder';
import {CustomRadioInput, CustomSlider, LabeledIconInput} from '../molecules';
import {CheckboxGroup} from '../molecules';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';

export default function PostPropertyForm() {
  const [selectedKitchenItems, setSelectedKitchenItems] = useState<string[]>(
    [],
  );

  const [selectedLaundryItems, setSelectedLaundryItems] = useState<string[]>(
    [],
  );

  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedLotType, setSelectedLotType] = useState<string[]>([]);
  const [selectedPoolType, setSelectedPoolType] = useState<string[]>([]);
  const [selectedSaleType, setSelectedSaleType] = useState<string[]>([]);

  const navigation = useNavigation<MainStackNavigation>();

  const onSubmit = () => {
    navigation.navigate(SCREENS.PROPERTY_DETAILS);
  };

  return (
    <View p="md" gap={20}>
      <UploadImagePlaceholder />
      <View gap={12}>
        <Text variant="semibold">Property Details</Text>
        <LabeledIconInput
          label="Add title"
          placeholder="Enter title"
          labelColor="black"
        />

        <LabeledIconInput
          label="Description*"
          placeholder="Enter description here"
          labelColor="black"
        />

        <LabeledIconInput
          label="Location"
          placeholder="Enter location"
          labelColor="black"
        />

        <View alignItems="center">
          <Text style={{width: '100%'}} size="sm" variant="semibold">
            Rating
          </Text>
          <CustomSlider values={[0, 5]} min={0} max={5} />
        </View>
        <LabeledIconInput
          label="Zip Code"
          placeholder="Enter Zip code"
          labelColor="black"
        />
      </View>

      <View gap={12}>
        <Text variant="semibold">Main Features</Text>

        <LabeledIconInput
          label="Number of Baths"
          placeholder="Enter Number of Baths"
          labelColor="black"
        />
        <LabeledIconInput
          label="Number of beds"
          placeholder="Enter Number of beds"
          labelColor="black"
        />

        <View>
          <View flexDirection="row" alignItems="center" gap={12}>
            <Text color="black" size="sm" variant="semibold">
              *Level
            </Text>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
          <LabeledIconInput
            label="Level"
            showLabel={false}
            placeholder="Enter level"
            labelColor="black"
          />
        </View>
        <View>
          <View flexDirection="row" alignItems="center" gap={12}>
            <Text color="black" size="sm" variant="semibold">
              *Central Air
            </Text>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
          <LabeledIconInput
            label="Central Air"
            showLabel={false}
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            multiline
            labelColor="black"
          />
        </View>
        <View>
          <View flexDirection="row" alignItems="center" gap={12}>
            <Text color="black" size="sm" variant="semibold">
              *Central Heat
            </Text>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
          <LabeledIconInput
            label="Central Air"
            showLabel={false}
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            multiline
            labelColor="black"
          />
        </View>

        <CheckboxGroup
          title="Kitchen (check all that applies)"
          options={['Island', 'Stone Counters', 'Walk in pantry', 'Gas Stove']}
          selectedOptions={selectedKitchenItems}
          onSelect={val => setSelectedKitchenItems(val)}
        />
        <CheckboxGroup
          title="Laundry (check all that applies)"
          options={[
            'Gas',
            'Electric',
            'In Garage',
            'In Kitchen',
            'Upper level',
            'Common Area',
          ]}
          selectedOptions={selectedLaundryItems}
          onSelect={val => setSelectedLaundryItems(val)}
        />

        <LabeledIconInput
          label="* Special Interior Features(s):"
          labelColor="black"
          placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          multiline
        />
      </View>

      <View gap={12}>
        <Text variant="semibold">Exterior Features</Text>

        <View flexDirection="row" alignItems="center" style={{width: '100%'}}>
          <Text
            color="black"
            size="sm"
            variant="semibold"
            style={{marginRight: 10}}>
            Parking:
          </Text>
          <View flexDirection="row" gap={10}>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
        </View>

        <LabeledIconInput
          label="Number"
          labelColor="black"
          placeholder="Enter number"
        />

        <CheckboxGroup
          title="Type (check all that applies)"
          options={['Garage', 'Carport', 'Driveway', 'Assinged', 'Street']}
          selectedOptions={selectedType}
          onSelect={val => setSelectedType(val)}
        />

        <CheckboxGroup
          title="LOT type (check all that applies)"
          options={[
            'Corner',
            'Key',
            'T Intersection',
            'Flag',
            'Cul de sac',
            'Hillside',
            'By a major road/railway',
          ]}
          selectedOptions={selectedLotType}
          onSelect={val => setSelectedLotType(val)}
        />

        <View>
          <View flexDirection="row" alignItems="center" gap={12}>
            <Text color="black" size="sm" variant="semibold">
              *EASEMENT
            </Text>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
          <LabeledIconInput
            label="Central Air"
            showLabel={false}
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            multiline
            labelColor="black"
          />
        </View>

        <View flexDirection="row" alignItems="center" style={{width: '100%'}}>
          <Text
            color="black"
            size="sm"
            variant="semibold"
            style={{marginRight: 10}}>
            Pool:
          </Text>
          <View flexDirection="row" gap={10}>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
        </View>
        <CheckboxGroup
          options={[
            'Community',
            'Private',
            'In Ground',
            'Above Ground',
            'Salt water',
            'Heated',
          ]}
          selectedOptions={selectedPoolType}
          onSelect={val => setSelectedPoolType(val)}
        />

        <View>
          <View flexDirection="row" alignItems="center" gap={12}>
            <Text color="black" size="sm" variant="semibold">
              *ABU
            </Text>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
          <LabeledIconInput
            label="Central Air"
            showLabel={false}
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            multiline
            labelColor="black"
          />
        </View>

        <LabeledIconInput
          label="* Special Exterior Features(s)"
          placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          multiline
          labelColor="black"
        />

        <CheckboxGroup
          title="Sale type & condition"
          options={[
            'Standard',
            'FSBO',
            'Notice of default',
            'Short sale',
            'Foreclosure',
            'Bankruptcy',
            'HUD Owned',
            'Auction',
            'Probate',
            'Trust',
          ]}
          selectedOptions={selectedSaleType}
          onSelect={val => setSelectedSaleType(val)}
        />

        <View style={{width: '100%'}}>
          <Text
            color="black"
            size="sm"
            variant="semibold"
            style={{marginRight: 10}}>
            Third-party confirmation required:
          </Text>
          <View flexDirection="row" gap={10} mt="xs">
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
        </View>

        <View>
          <View flexDirection="row" alignItems="center" gap={12}>
            <Text color="black" size="sm" variant="semibold">
              *Any death on property {'\n'} (within last 3 years):
            </Text>
            <CustomRadioInput label="Yes" selected onSelect={() => {}} />
            <CustomRadioInput label="No" selected={false} onSelect={() => {}} />
          </View>
          <LabeledIconInput
            label="Central Air"
            showLabel={false}
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            multiline
            labelColor="black"
          />
        </View>

        <LabeledIconInput
          label="*Any Special terms on financing? (100 word limit)"
          placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
          multiline
          labelColor="black"
        />
        <LabeledIconInput
          label="Area"
          placeholder="Number of sq. ft"
          labelColor="black"
        />

        <Button label="Post Now" onPress={onSubmit} />
      </View>
    </View>
  );
}
