import {moderateScale} from '../../helpers/metrics';

export const FontFamily = {
  black: 'Poppins-Black',
  bold: 'Poppins-Bold',
  extrabold: 'Poppins-ExtraBold',
  extralight: 'Poppins-ExtraLight',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  semibold: 'Poppins-SemiBold',
  thin: 'Poppins-Thin',
};

const colors = {
  primary: '#C1371D',
  white: '#fff',
  black: '#000000',
  shadow: '#00000029',
  gray: '#C5C5C5',
  gray2: '#999B9F',
  gray3: '#F9F9FC',
  gray4: '#323131',
  gray5: '#F6F5F5',
  gray6: '#F4F4F4',
  gray7: '#F2F3F8',
  gray8: '#9692A5',
  tags: '#3DB9FB',
  info: '#3658FF',
};

const theme = {
  colors,
  fontSizes: {
    xxl: moderateScale(32),
    xl: moderateScale(28),
    lg: moderateScale(24),
    md: moderateScale(20),
    body: moderateScale(17),
    sm: moderateScale(14),
    xs: moderateScale(12),
    xxs: moderateScale(10),
    xxxs: moderateScale(8),
  },
  spacing: {
    none: 0,
    xxs: moderateScale(4),
    xs: moderateScale(8),
    md: moderateScale(12),
    lg: moderateScale(16),
    xl: moderateScale(20),
    xxl: moderateScale(24),
    xxxl: moderateScale(28),
  },
};

export default theme;
