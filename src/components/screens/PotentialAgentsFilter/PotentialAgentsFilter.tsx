import {useNavigation} from '@react-navigation/native';
import {Button, SafeAreaContainer, ScreenContainer, View} from '../../atoms';
import {CustomRadioInput, LabeledIconInput} from '../../molecules';
import {Header} from '../../organisms';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

export default function PotentialAgentsFilter() {
  const navigation = useNavigation<MainStackNavigation>();

  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="Filter" />
        <View flex={1} p="md" justifyContent="space-between">
          <View gap={12}>
            <CustomRadioInput label="All" selected onSelect={() => {}} />
            <CustomRadioInput
              label="Buyer's agent"
              selected={false}
              onSelect={() => {}}
            />
            <CustomRadioInput
              label="Seller's agent"
              selected={false}
              onSelect={() => {}}
            />

            <LabeledIconInput
              label="City"
              placeholder="Enter your city"
              labelColor="black"
            />
            <LabeledIconInput
              label="State"
              placeholder="Enter your State"
              labelColor="black"
            />
          </View>
          <Button label="Submit" onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
