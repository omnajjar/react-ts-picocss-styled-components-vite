import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light';

type ThemeContextType = {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    setTheme: () => {
        /* noop */
    },
});

type ThemeProviderProps = { defaultTheme: ThemeMode } & PropsWithChildren;

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeMode>(defaultTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children} </ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
