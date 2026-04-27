'use client';
import { createContext, useContext, useState } from 'react';

const ColorContext = createContext({
    primary: '#2EE5C0',
    accent: '#C8A96E',
    updateColors: (primary: string, accent: string) => {}
});

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const [colors, setColors] = useState({ primary: '#2EE5C0', accent: '#C8A96E' });

    const updateColors = (primary: string, accent: string) => {
        setColors({ primary, accent });
        document.documentElement.style.setProperty('--primary-color', primary);
        document.documentElement.style.setProperty('--accent-color', accent);
    };

    return (
        <ColorContext.Provider value={{ ...colors, updateColors }}>
            {children}
        </ColorContext.Provider>
    );
};

export const useColors = () => useContext(ColorContext);
