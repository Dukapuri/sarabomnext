"use client";

import { memo } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Eye, EyeOff } from "lucide-react";

interface PasswordToggleButtonProps {
    showPassword: boolean;
    onToggle: () => void;
}

export const PasswordToggleButton = memo(function PasswordToggleButton({
    showPassword,
    onToggle,
}: PasswordToggleButtonProps) {
    return (
        <InputAdornment position="end">
            <IconButton
                onClick={onToggle}
                edge="end"
                sx={{
                    color: "#1976d2",
                }}
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </IconButton>
        </InputAdornment>
    );
});

