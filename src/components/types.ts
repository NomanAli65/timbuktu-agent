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
};

export type TFormTabHeader = {
  title: string;
  id: number;
  onPress: () => any;
};

export type TPost = {
  id: number;
  name: string;
  time: string;
  description: string;
  tags: string[];
  imageUrl: any;
};

export interface IFilterOption {
  id: number;
  label: string;
  minRange?: number;
  maxRange?: number;
}

export interface IFilter {
  title: string;
  options: IFilterOption[];
  type?: 'slider' | 'default';
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
  time: string;
  title: string;
  avatar: any;
  new: boolean;
};
