import {
  ImageSourcePropType,
  SwitchProps,
  TouchableOpacityProps,
} from 'react-native';

export type IconVector =
  | 'Feather'
  | 'Ionicons'
  | 'EvilIcons'
  | 'Entypo'
  | 'FontAwesome'
  | 'FontAwesome6'
  | 'FontAwesome5'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Fontisto'
  | 'Foundation'
  | 'FontAwesome5Pro'
  | 'FontAwesome6Pro'
  | 'Octicons'
  | 'AntDesign';

export type Field = {
  name: string;
  label: string;
  placeholder: string;
  leftIconName?: string;
  rightIconName?: string;
  vector?: IconVector;
  isDropdown?: boolean;
  dropdownOptions?: string[];
  multiline?: boolean;
};

export type TFormTabHeader = {
  title: string;
  id: number;
  onPress: () => any;
};

export interface IHeaderOption {
  id: number;
  icon: string;
  iconVector: IconVector;
  onPress: () => any;
}

export type TPost = {
  id: number;
  name: string;
  time: string;
  description: string;
  tags: string[];
  imageUrl: ImageSourcePropType | string;
};

export interface IFilterOption {
  id: number;
  label: string;
  minRange?: number;
  maxRange?: number;
}

export interface IFilter {
  title: string;
  options?: IFilterOption[];
  type?: 'slider' | 'default' | 'input';
  values?: number[];
  min?: number;
  max?: number;
}

export type Message = {
  userId: number;
  message: string;
};

export interface IMessages {
  id: number;
  avatar: any;
  time: string;
  messages: Message[];
  unreadCount: number;
}

export type Notification = {
  id: number;
  time: string;
  title: string;
  avatar: ImageSourcePropType | string;
  new: boolean;
};

export interface ITabMenuItem {
  id: number;
  label: string;
  onPress: () => any;
}

export interface IPropertyDetails {
  id: number;
  title: string;
  price: number;
  beds: number;
  image: ImageSourcePropType | string;
  baths: number;
  sqft: number;
}

export interface IAgentDetails {
  id: number;
  address: string;
  rating: number;
  image: ImageSourcePropType | string;
}
export interface IMyLead {
  id: number;
  type: 'buyer' | 'seller';
  address: string;
  image: ImageSourcePropType | string;
}

export interface IPotentialAgent {
  id: number;
  type: 'buyer' | 'seller';
  address: string;
  image: ImageSourcePropType | string;
}

export interface IMyClient {
  id: number;
  address: string;
  image: ImageSourcePropType | string;
}

export interface IHomeFeature {
  id: number;
  title: string;
  iconName: string;
  iconVector: IconVector;
  available: boolean;
}

export interface IMyReferral {
  id: number;
  name: string;
  referredTo: string;
  image: ImageSourcePropType | string;
  image2: ImageSourcePropType | string;
}

export interface ISetting extends TouchableOpacityProps {
  title: string;
  iconName: string;
  iconVector: IconVector;
}

export interface ISettingSwitch extends SwitchProps {
  title: string;
  iconName: string;
  iconVector: IconVector;
}

export interface ITimbuktuSavedCard {
  id: number;
  time: string;
  status: 'Connected' | 'Active';
}

export interface IAdDetails {
  id: number;
  reached: number;
  engaged: number;
  image: ImageSourcePropType | string;
  description: string;
  userImg: ImageSourcePropType | string;
  title: string;
  time: string;
  isRunning: boolean;
}
