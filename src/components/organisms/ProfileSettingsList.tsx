import React, {useState} from 'react';
import {View} from '../atoms';
import {ProfileSettingItem, ProfileSettingSwitchItem} from '../molecules';
import {ISetting} from '../types';
import useTheme from '../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import SCREENS from '../../constants/screens';
import {useAppSelector} from '../../hooks/useAppSelector';
import {UserTypes} from '../../constants/values';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {logout} from '../../redux/slices/auth/authSlice';

export default function ProfileSettingsList() {
  const [notificationsOn, setNotificationsOn] = useState(false);
  const navigation = useNavigation<MainStackNavigation>();
  const {type} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const items: ISetting[] = [
    {
      title: 'Edit Profile',
      iconName: 'supervised-user-circle',
      iconVector: 'MaterialIcons',
      onPress: () => navigation.navigate(SCREENS.EDIT_PROFILE),
    },
    {
      title: 'My Timbuktu Page',
      iconName: 'home-roof',
      iconVector: 'MaterialCommunityIcons',
      onPress: () => navigation.navigate(SCREENS.MY_TIMBUKTU_PAGE),
    },

    {
      title: 'Change Password',
      iconName: 'lock',
      iconVector: 'MaterialCommunityIcons',
      onPress: () => navigation.navigate(SCREENS.CHANGE_PASSWORD_PROFILE),
    },

    {
      title: 'Logout',
      iconName: 'logout',
      iconVector: 'MaterialCommunityIcons',
      onPress: () => dispatch(logout()),
    },
  ];

  const theme = useTheme();
  return (
    <View ph="xs">
      <ProfileSettingSwitchItem
        title="Notifications"
        iconName="bell"
        iconVector="MaterialCommunityIcons"
        style={{
          borderBottomWidth: 1,
          borderColor: theme.colors.gray,
        }}
        value={notificationsOn}
        onValueChange={val => setNotificationsOn(val)}
      />

      {items.map((item, idx) => (
        <ProfileSettingItem
          iconName={item.iconName}
          iconVector={item.iconVector}
          title={item.title}
          key={item.title}
          style={{
            borderBottomWidth: idx === items.length - 1 ? 0 : 1,
            borderColor: theme.colors.gray,
            display:
              idx === 1
                ? type === UserTypes.NonMemberOrGuest
                  ? 'none'
                  : 'flex'
                : 'flex',
          }}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
}
