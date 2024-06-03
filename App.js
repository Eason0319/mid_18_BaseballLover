import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ThemeProvider } from './src/Theme/themeProvider';

const App = () => {
  return (
    <ThemeProvider>
    <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <GluestackUIProvider config={config}>
            <Navigation />
          </GluestackUIProvider>
        </SafeAreaView>
    </Provider></ThemeProvider>

  );
}

export default App;