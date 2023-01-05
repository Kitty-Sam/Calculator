import { createContext } from 'react';

export const THEMES = {
    dark: 'dark',
    light: 'light',
};

export const ThemeContext = createContext<{
    theme: string;
    toggleTheme: () => void;
}>({
    theme: THEMES.light,
    toggleTheme: () => {},
});
