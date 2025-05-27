import { ThemeProvider } from "styled-components";
import { theme } from "@app/styles";
import type { ReactNode } from "react";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
