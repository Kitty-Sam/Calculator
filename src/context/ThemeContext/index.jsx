import { createContext } from 'react';

export const THEMES = {
    dark: 'dark',
    light: 'light',
};

export const ThemeContext = createContext({
    theme: THEMES.light,
    toggleTheme: () => {},
});
