import {useContext} from 'react';
import {ThemeContext} from '../styles/theme/ThemeProvider';

export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
