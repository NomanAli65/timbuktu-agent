import {verticalScale} from '../helpers/metrics';

export const TabHeaderHeight = verticalScale(140);
export const BottomTabBarHeight = 80;

export const UserTypes = {
  AgentOrMember: 'AgentOrMember',
  NonMemberOrGuest: 'NonMemberOrGuest',
} as const;
