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
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (password.length < 6) {
            setError("비밀번호는 최소 6자 이상이어야 합니다.");
            return;
        }

        setIsLoading(true);

        try {
            // TODO: 실제 회원가입 API 호출
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                router.push("/login?registered=true");
            } else {
                const data = await response.json();
                setError(data.error || "회원가입 중 오류가 발생했습니다.");
            }
        } catch (error) {
            setError("회원가입 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold">살아봄</CardTitle>
                    <CardDescription className="text-base">
                        새 계정을 만들어보세요
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-stone-700"
                            >
                                이름
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="이름을 입력하세요"
                                className="h-12"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-stone-700"
                            >
                                이메일
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="이메일을 입력하세요"
                                className="h-12"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                className="h-12"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="confirmPassword"
                                className="text-sm font-medium text-stone-700"
                            >
                                비밀번호 확인
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="비밀번호를 다시 입력하세요"
                                className="h-12"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />
                        </div>
                        <Button
                            className="w-full h-12 text-base"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "회원가입 중..." : "회원가입"}
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
                            // TODO: 카카오 회원가입 구현
                            alert("카카오 회원가입은 준비 중입니다.");
                        }}
                    >
                        카카오로 회원가입
                    </Button>
                    <div className="text-center text-sm text-stone-600">
                        이미 계정이 있으신가요?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-700"
                        >
                            로그인
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
