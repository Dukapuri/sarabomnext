"use client";

import {
    Button,
    Card,
    CardContent,
    Box,
    Divider,
    Link as MuiLink,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRegister } from "./_lib/use-register";
import { registerSchema, type RegisterFormData } from "./_lib/validations";
import { AuthHeader } from "@/components/auth/auth-header";
import { Mail, Phone, User } from "lucide-react";
import { PasswordField } from "./_components/password-field";
import { TextFieldComponent } from "./_components/text-field";

export default function RegisterPage() {
    const { register: registerUser, isLoading } = useRegister();

    const { control, handleSubmit } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        await registerUser(data);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                backgroundColor: "#f3f7ff", // 배경색 연한 블루톤으로 변경
            }}
        >
            <Card
                sx={{
                    maxWidth: 448,
                    width: "100%",
                    boxShadow: 3,
                    borderRadius: 3,
                    background:
                        "linear-gradient(135deg, #ffffff 80%, #e8f0fc 100%)", // 카드에 부드러운 그라데이션
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <AuthHeader
                        title="환영합니다!"
                        description="살아봄과 함께 내 집 마련을 시작하세요"
                    />

                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        <Controller
                            name="name"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextFieldComponent
                                    field={field}
                                    fieldState={fieldState}
                                    label="이름"
                                    placeholder="이름을 입력하세요"
                                    icon={User}
                                />
                            )}
                        />

                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextFieldComponent
                                    field={field}
                                    fieldState={fieldState}
                                    label="이메일"
                                    placeholder="이메일을 입력하세요"
                                    type="email"
                                    icon={Mail}
                                />
                            )}
                        />

                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextFieldComponent
                                    field={field}
                                    fieldState={fieldState}
                                    label="전화번호"
                                    placeholder="전화번호를 입력하세요"
                                    type="tel"
                                    icon={Phone}
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            render={({ field, fieldState }) => (
                                <PasswordField
                                    field={field}
                                    fieldState={fieldState}
                                    label="비밀번호"
                                    placeholder="비밀번호를 입력하세요"
                                />
                            )}
                        />

                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field, fieldState }) => (
                                <PasswordField
                                    field={field}
                                    fieldState={fieldState}
                                    label="비밀번호 확인"
                                    placeholder="비밀번호를 다시 입력하세요"
                                    hintText="8자 이상, 영문/숫자/특수문자 포함"
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={isLoading}
                            sx={{
                                py: 1.5,
                                background:
                                    "linear-gradient(90deg, #1976d2 40%, #42a5f5 100%)",
                                color: "#fff",
                                fontWeight: 600,
                                letterSpacing: 1,
                                boxShadow: "0px 2px 10px 0px #a7c5eb44",
                                "&:hover": {
                                    background:
                                        "linear-gradient(90deg, #1565c0 40%, #1976d2 100%)",
                                },
                            }}
                        >
                            {isLoading ? "회원가입 중..." : "회원가입"}
                        </Button>
                    </Box>

                    <Divider sx={{ my: 3 }}>
                        <Typography variant="caption" color="text.secondary">
                            또는
                        </Typography>
                    </Divider>

                    <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        onClick={() => {
                            toast.info("카카오 회원가입은 준비 중입니다.");
                        }}
                        sx={{
                            mb: 2,
                            py: 1.5,
                            borderColor: "#fee500",
                            color: "#391b1b",
                            fontWeight: 500,
                            backgroundColor: "#fffde7",
                            "&:hover": {
                                backgroundColor: "#fff8c8",
                                borderColor: "#ffea00",
                            },
                        }}
                    >
                        카카오로 회원가입
                    </Button>

                    <Typography
                        variant="body2"
                        textAlign="center"
                        color="text.secondary"
                    >
                        이미 계정이 있으신가요?{" "}
                        <MuiLink
                            component={Link}
                            href="/login"
                            sx={{
                                fontWeight: 500,
                                textDecoration: "underline",
                                color: "#1976d2",
                                "&:hover": {
                                    textDecoration: "underline",
                                    color: "#1565c0",
                                },
                            }}
                        >
                            로그인
                        </MuiLink>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
