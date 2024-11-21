'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a Context
const ThemeContext = createContext();

// Create a Provider Component
export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [logo, setLogo] = useState('/assets/ammn_logo_black.svg');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'lara-light-teal';
        const isDark = savedTheme === 'lara-dark-teal';
        setIsDarkMode(isDark);
        setLogo(isDark ? '/assets/ammn_logo_white.svg' : '/assets/ammn_logo_black.svg');

        const themeLink = document.getElementById('theme-css');
        themeLink.setAttribute(
            'href',
            `https://unpkg.com/primereact/resources/themes/${savedTheme}/theme.css`
        );
        document.body.className = isDark ? 'dark-mode' : 'light-mode';
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'lara-light-teal' : 'lara-dark-teal';
        setIsDarkMode(!isDarkMode);
        setLogo(!isDarkMode ? '/assets/ammn_logo_white.svg' : '/assets/ammn_logo_black.svg');
        localStorage.setItem('theme', newTheme);

        const themeLink = document.getElementById('theme-css');
        themeLink.setAttribute(
            'href',
            `https://unpkg.com/primereact/resources/themes/${newTheme}/theme.css`
        );
        document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, logo, toggleTheme }}>
            {children}
            <link
                id="theme-css"
                rel="stylesheet"
                href={`https://unpkg.com/primereact/resources/themes/lara-light-teal/theme.css`}
            />
        </ThemeContext.Provider>
    );
}

// Custom Hook to Use Theme Context
export const useTheme = () => useContext(ThemeContext);
