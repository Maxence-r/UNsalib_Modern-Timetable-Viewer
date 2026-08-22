type ColorScheme = "light" | "dark";

type ThemeKey =
    | "accent"
    | "accentDark"
    | "onAccent"
    | "neutral"
    | "neutralLight"
    | "neutralDark"
    | "background"
    | "backgroundDark"
    | "onSurface"
    | "success"
    | "onSuccess"
    | "error"
    | "onError";

type Theme = {
    [key in ThemeKey]: `#${string}`;
};

export type { ColorScheme, Theme, ThemeKey };
