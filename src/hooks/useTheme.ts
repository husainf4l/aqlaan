"use client";
import { useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return { theme, toggleTheme };
}