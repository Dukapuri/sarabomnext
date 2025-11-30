"use client";

import { useState, memo, useCallback } from "react";
import { TextField, Typography, Box, InputAdornment } from "@mui/material";
import { LockIcon } from "lucide-react";
import { FieldError } from "react-hook-form";
import { PasswordToggleButton } from "./password-toggle-button";

interface PasswordFieldProps {
    field: {
        name: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: () => void;
    };
    fieldState: { error?: FieldError };
    label: string;
    placeholder: string;
    hintText?: string;
}

export const PasswordField = memo(function PasswordField({
    field,
    fieldState,
    label,
    placeholder,
    hintText,
}: PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = useCallback(() => {
        setShowPassword((prev) => !prev);
    }, []);

    return (
        <Box>
            <Typography
                variant="body2"
                sx={{
                    mb: 1,
                    fontWeight: 500,
                    color: "#2a4787",
                }}
            >
                {label}
            </Typography>
            <TextField
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon color="#1976d2" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <PasswordToggleButton
                                showPassword={showPassword}
                                onToggle={handleToggle}
                            />
                        ),
                    },
                }}
                size="medium"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#a7c5eb",
                        },
                    },
                    "&:hover fieldset": {
                        borderColor: "#1976d2",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                    },
                }}
            />
            {hintText && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                >
                    {hintText}
                </Typography>
            )}
        </Box>
    );
});
