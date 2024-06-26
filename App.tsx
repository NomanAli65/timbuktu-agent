import AppNavigation from './src/navigation/AppNavigation';
import ThemeProvider from './src/styles/theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
}
