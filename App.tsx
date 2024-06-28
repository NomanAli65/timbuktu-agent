import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import ThemeProvider from './src/styles/theme/ThemeProvider';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar hidden />
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
}
