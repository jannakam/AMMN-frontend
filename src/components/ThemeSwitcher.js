// allows us to switch between light and dark mode

'use client';

import React, { useState, useEffect } from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false); 

    useEffect(() => {
        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'saga-blue';
        const isDark = savedTheme === 'vela-blue';
        setIsDarkMode(isDark);

        const themeLink = document.getElementById('theme-css');
        themeLink.setAttribute(
            'href',
            `https://unpkg.com/primereact/resources/themes/${savedTheme}/theme.css`
        );
        document.body.className = isDark ? 'dark-mode' : 'light-mode';
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'saga-blue' : 'vela-blue';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);

        const themeLink = document.getElementById('theme-css');
        themeLink.setAttribute(
            'href',
            `https://unpkg.com/primereact/resources/themes/${newTheme}/theme.css`
        );
        document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    };

    return (
        <div className="fixed top-5 left-5 flex align-items-center gap-3">
            <ToggleButton
                onLabel="Light"
                offLabel="Dark"
                onIcon="pi pi-sun"
                offIcon="pi pi-moon"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="p-button-rounded"
            />
            <link
                id="theme-css"
                rel="stylesheet"
                href={`https://unpkg.com/primereact/resources/themes/saga-blue/theme.css`}
            />
        </div>
    );
}
