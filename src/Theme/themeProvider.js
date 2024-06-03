// ThemeProvider.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './index';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme === 'dark' ? darkTheme : lightTheme);

  const toggleTheme = () => {
    console.log('Toggle theme function called');
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      console.log('New theme:', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    });
    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
