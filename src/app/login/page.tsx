"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInWithForm } from "@/auth/server-actions";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [error, setError] = useState("");
    const callbackUrl = searchParams.get("callbackUrl");

    const handleSubmit = async (formData: FormData) => {
        setError("");

        // callbackUrl을 formData에 추가
        if (callbackUrl) {
            formData.append("callbackUrl", callbackUrl);
        }

        try {
            await signInWithForm(formData);
            // redirect는 서버 액션에서 처리됨
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "로그인 중 오류가 발생했습니다."
            );
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold">살아봄</CardTitle>
                    <CardDescription className="text-base">
                        로그인하여 시작하세요
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form action={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-stone-700"
                            >
                                이메일
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="이메일을 입력하세요"
                                className="h-12"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-stone-700"
                            >
                                비밀번호
                            </label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                className="h-12"
                                required
                            />
                        </div>
                        <Button className="w-full h-12 text-base" type="submit">
                            로그인
                        </Button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-stone-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-stone-500">
                                또는
                            </span>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full h-12 text-base"
                        type="button"
                        onClick={() => {
                            // TODO: 카카오 로그인 구현
                            alert("카카오 로그인은 준비 중입니다.");
                        }}
                    >
                        카카오로 로그인
                    </Button>
                    <div className="text-center text-sm text-stone-600">
                        계정이 없으신가요?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-700"
                        >
                            회원가입
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
