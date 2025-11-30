"use client";

import { memo } from "react";
import { TextField, Typography, Box, InputAdornment } from "@mui/material";
import { FieldError } from "react-hook-form";
import { LucideIcon } from "lucide-react";

interface TextFieldComponentProps {
    field: {
        name: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: () => void;
    };
    fieldState: { error?: FieldError };
    label: string;
    placeholder: string;
    type?: string;
    icon: LucideIcon;
}

export const TextFieldComponent = memo(function TextFieldComponent({
    field,
    fieldState,
    label,
    placeholder,
    type = "text",
    icon: Icon,
}: TextFieldComponentProps) {
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
                type={type}
                placeholder={placeholder}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon color="#1976d2" />
                            </InputAdornment>
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
        </Box>
    );
});
