import React, { useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom hook for color mode
export function useColorMode() {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('themeMode');
        return savedMode ? JSON.parse(savedMode) : 'light';
    });

    useEffect(() => {
        localStorage.setItem('themeMode', JSON.stringify(mode));
    }, [mode]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return { mode, toggleColorMode };
}

function ToggleColorMode({ children }) {
    const { mode, toggleColorMode } = useColorMode();

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ThemeProvider theme={theme}>
            {children({ toggleColorMode, mode })}
        </ThemeProvider>
    );
}

export default ToggleColorMode;
