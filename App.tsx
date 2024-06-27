import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import ThemeProvider from './src/styles/theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar hidden />
      <AppNavigation />
    </ThemeProvider>
  );
}
