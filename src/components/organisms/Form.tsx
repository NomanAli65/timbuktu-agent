import {Field} from '../types';
import React, {useState} from 'react';
import {LabeledIconInput} from '../molecules';
import {Button, Text, View} from '../atoms';
import {ScrollView} from 'react-native';
import {IView} from '../atoms/View';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProp} from '../../navigation/types';
import SCREENS from '../../constants/screens';

interface IProps extends IView {
  fields: Field[];
  onSubmit: (state: any) => any;
  submitButtonLabel: string;
  formType?: 'login';
  scrollEnabled?: boolean;
}

const Form = ({
  fields,
  onSubmit,
  submitButtonLabel,
  formType = undefined,
  scrollEnabled = false,
  ...rest
}: IProps) => {
  const [formState, setFormState] = useState(
    fields.reduce((acc: any, field: Field) => {
      acc[field.name] = '';
      return acc;
    }, {}),
  );

  const navigation = useNavigation<AuthStackNavigationProp>();

  const handleChange = (name: string, value: string) => {
    setFormState({...formState, [name]: value});
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
      <View flex={1} {...rest}>
        <View gap={10}>
          {fields.map(field => (
            <LabeledIconInput
              key={field.name}
              label={field.label}
              value={formState[field.name]}
              onChangeText={value => handleChange(field.name, value)}
              placeholder={field.placeholder}
              vector={field.vector}
              leftIconName={field.leftIconName}
              rightIconName={field.rightIconName}
            />
          ))}
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
      </View>
    </ScrollView>
  );
};

export default Form;
