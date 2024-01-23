import { createContext } from "react";
import { Dispatch, SetStateAction } from 'react';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'