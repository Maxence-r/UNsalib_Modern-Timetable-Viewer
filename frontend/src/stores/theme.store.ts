import { create } from "zustand";
import type { ColorScheme, Theme } from "../utils/types/theme.type";
import { lightTheme, darkTheme } from "../utils/theme";

interface ThemeStore {
    theme: Theme;
    scheme: ColorScheme;
    useSystemScheme: boolean;
    setUseSystemScheme: (use: boolean) => void;
    setScheme: (scheme: ColorScheme) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? darkTheme
        : lightTheme,
    scheme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    useSystemScheme: true,
    setUseSystemScheme: (use): void => set({ useSystemScheme: use }),
    setScheme: (scheme): void =>
        set({ scheme, theme: scheme === "light" ? lightTheme : darkTheme }),
}));

export { useThemeStore };
