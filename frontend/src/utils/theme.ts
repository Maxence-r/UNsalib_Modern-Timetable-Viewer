import type { Theme } from "./types/theme.type";

const lightTheme: Theme = {
    accent: "#3452FF",
    accentDark: "#1F2DFF",
    onAccent: "#FFFFFF",
    neutralLight: "#F1F2F5",
    neutral: "#DEDEE2",
    neutralDark: "#6F7073",
    background: "#FFFFFF",
    backgroundDark: "#F9F9FC",
    onSurface: "#010205",
    success: "#44C235",
    onSuccess: "#FFFFFF",
    error: "#E64242",
    onError: "#FFFFFF",
};

const darkTheme: Theme = {
    accent: "#3452FF",
    accentDark: "#1F2DFF",
    onAccent: "#FFFFFF",
    neutralLight: "#242528",
    neutral: "#404044",
    neutralDark: "#7E7F83",
    background: "#121216",
    backgroundDark: "#16161A",
    onSurface: "#F6F7FA",
    success: "#44C235",
    onSuccess: "#FFFFFF",
    error: "#E64242",
    onError: "#FFFFFF",
};

export { lightTheme, darkTheme };
