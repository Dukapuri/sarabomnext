import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface AuthHeaderProps {
    title?: string;
    description: string;
    logoSize?: number;
}

export function AuthHeader({
    title = "살아봄",
    description,
    logoSize = 96,
}: AuthHeaderProps) {
    return (
        <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 1,
                }}
            >
                <Image
                    alt="로고"
                    src="/logo.png"
                    width={logoSize}
                    height={logoSize}
                />
            </Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {description}
            </Typography>
        </Box>
    );
}
