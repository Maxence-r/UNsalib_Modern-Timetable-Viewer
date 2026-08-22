import { type ReactNode, useInsertionEffect } from "react";

import type { Theme, ThemeKey } from "./types/theme.type";
import { useThemeStore } from "../stores/theme.store";

type CSSVariable = `--${string}`;

function getKebabProperty(category: string, property: string): CSSVariable {
    const kebabCategory = category.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`,
    );
    const kebabProperty = property.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`,
    );

    return `--${kebabCategory}-${kebabProperty}`;
}

function getCssTheme(theme: Theme): string {
    const cssStyle: `--${string}: ${string}`[] = [];

    for (const colorName of Object.keys(theme)) {
        cssStyle.push(
            `${getKebabProperty("color", colorName)}: ${theme[colorName as ThemeKey]}`,
        );
    }

    return cssStyle.join("; ");
}

function ThemeProvider({
    children,
}: {
    children: ReactNode | ReactNode[];
}): ReactNode | ReactNode[] {
    const theme = useThemeStore((s) => s.theme);

    useInsertionEffect(() => {
        document.documentElement.style.cssText = getCssTheme(theme);
    }, [theme]);

    return children;
}

export { ThemeProvider };
