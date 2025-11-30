"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "@/auth/provider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

interface ProvidersProps {
    children: ReactNode;
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // MUI 기본 파란색
        },
        secondary: {
            main: "#42a5f5",
        },
        background: {
            default: "#f2f8fe", // RGB(242, 248, 254)
            paper: "#ffffff",
        },
    },
    typography: {
        fontFamily: "var(--font-geist-sans), sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "8px",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                },
            },
        },
    },
});

export function Providers({ children }: ProvidersProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1분
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: "100vh",
                    background:
                        "linear-gradient(to bottom right, #f2f8fe, #e8f4fd)",
                }}
            >
                <QueryClientProvider client={queryClient}>
                    <SessionProvider>{children}</SessionProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </Box>
        </ThemeProvider>
    );
}
