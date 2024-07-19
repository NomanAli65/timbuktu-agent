import {Field} from '../types';
import React, {useState} from 'react';
import {LabeledDropdownInput, LabeledIconInput} from '../molecules';
import {Button, Text, View} from '../atoms';
import {ScrollView, TouchableOpacity} from 'react-native';
import {IView} from '../atoms/View';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProp} from '../../navigation/types';
import SCREENS from '../../constants/screens';
import Apptheme from '../../styles/theme/theme';

interface IProps extends IView {
  fields: Field[];
  onSubmit: (state: any) => any;
  submitButtonLabel: string;
  labelColor?: keyof typeof Apptheme.colors;
  formType?: 'login' | 'signup';
  scrollEnabled?: boolean;
}

const Form = ({
  fields,
  onSubmit,
  submitButtonLabel,
  formType = undefined,
  scrollEnabled = false,
  labelColor = 'white',
  ...rest
}: IProps) => {
  const [formState, setFormState] = useState(
    fields.reduce((acc: any, field: Field) => {
      acc[field.name] = '';

      if (field.isDropdown) {
        acc[field.name + 'Open'] = false;
      }
      return acc;
    }, {}),
  );

  const navigation = useNavigation<AuthStackNavigationProp>();

  const handleChange = (name: string, value: string | boolean) => {
    if (name.endsWith('Open')) {
      setFormState({...formState, [name]: value});
    } else {
      setFormState({...formState, [name]: value, [name + 'Open']: false});
    }
  };
  const handleSubmit = () => {
    onSubmit(formState);
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{flex: 1}}
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}>
      <View flex={1} {...rest} gap={8}>
        <View gap={10}>
          {fields.map(field =>
            field.isDropdown ? (
              <TouchableOpacity
                onPressIn={() => {
                  handleChange(field.name + 'Open', true);
                }}
                key={field.name}>
                <LabeledDropdownInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formState[field.name]}
                  onPressIn={() => {
                    handleChange(field.name + 'Open', true);
                  }}
                  handleChange={(name, value) => handleChange(name, value)}
                  isVisible={formState[field.name + 'Open']}
                  close={() => handleChange(field.name + 'Open', false)}
                  editable={false}
                  labelColor={labelColor}
                  options={field.dropdownOptions}
                  vector={field.vector}
                  leftIconName={field.leftIconName}
                  rightIconName={field.rightIconName}
                />
              </TouchableOpacity>
            ) : (
              <LabeledIconInput
                key={field.name}
                label={field.label}
                value={formState[field.name]}
                onChangeText={value => handleChange(field.name, value)}
                placeholder={field.placeholder}
                vector={field.vector}
                leftIconName={field.leftIconName}
                rightIconName={field.rightIconName}
                labelColor={labelColor}
                multiline={field.multiline}
              />
            ),
          )}
        </View>
        {formType === 'login' && (
          <Text
            color="white"
            textAlign="center"
            onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}>
            Forgot password?
          </Text>
        )}
        <Button label={submitButtonLabel} onPress={handleSubmit} />

        {formType === 'signup' && (
          <View p="xs">
            <Text color="white" size="sm" textAlign="center">
              Already have an account?{' '}
              <Text
                size="sm"
                color="primary"
                onPress={() => navigation.navigate(SCREENS.LOGIN)}>
                Sign in
              </Text>
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Form;
