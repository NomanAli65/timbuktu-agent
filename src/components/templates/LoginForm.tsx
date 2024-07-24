import {BlurContainer, Text, View} from '../atoms';
import {Form} from '../organisms';
import {FormTabsHeader} from '../molecules';
import {Field} from '../types';
import {AuthStackNavigationProp} from '../../navigation/types';
import SCREENS from '../../constants/screens';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {loginAsync} from '../../redux/slices/auth/authThunks';

export default function LoginForm() {
  const signInFields: Field[] = [
    {
      name: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      leftIconName: 'mail',
      vector: 'Feather',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      leftIconName: 'lock',
      vector: 'Feather',
      secure: true,
    },
  ];

  const dispatch = useAppDispatch();

  const navigation = useNavigation<AuthStackNavigationProp>();
  const onSignIn = async () => {
    dispatch(loginAsync());
  };
  const onRegister = () => navigation.navigate(SCREENS.REGISTER);

  return (
    <BlurContainer>
      <View p="lg" justifyContent="space-evenly" flex={1}>
        <FormTabsHeader
          items={[
            {
              id: 1,
              title: 'Sign In',
              onPress: onSignIn,
            },
            {
              id: 2,
              title: 'Sign Up',
              onPress: onRegister,
            },
          ]}
          activeId={1}
        />
        <Form
          fields={signInFields}
          onSubmit={onSignIn}
          submitButtonLabel="Sign in"
          formType="login"
          justifyContent="space-evenly"
        />
      </View>
    </BlurContainer>
  );
}
