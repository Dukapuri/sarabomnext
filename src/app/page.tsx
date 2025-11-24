"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useSession } from "@/auth/provider";
import { signOutWithForm } from "@/auth/server-actions";

export default function Home() {
    const session = useSession();

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
            <main className="container mx-auto px-4 py-8 max-w-md">
                <div className="space-y-8">
                    {/* 헤더 */}
                    <div className="text-center space-y-2 pt-8">
                        <h1 className="text-4xl font-bold text-stone-900">
                            살아봄
                        </h1>
                        <p className="text-stone-600">
                            실제 살았던 집에 대한 커피챗을 신청하세요
                        </p>
                    </div>

                    {session?.user ? (
                        /* 로그인된 사용자 */
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    환영합니다! 👋
                                </CardTitle>
                                <CardDescription>
                                    {session.user.email}로 로그인되었습니다.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <p className="text-sm text-stone-600">
                                        {session.user.name || "사용자"}님,
                                        살아봄을 시작해보세요!
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Link href="/dashboard" className="flex-1">
                                        <Button className="w-full h-12 text-base">
                                            대시보드
                                        </Button>
                                    </Link>
                                    <form
                                        action={signOutWithForm}
                                        className="flex-1"
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full h-12 text-base"
                                            type="submit"
                                        >
                                            로그아웃
                                        </Button>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        /* 로그인되지 않은 사용자 */
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    환영합니다! 👋
                                </CardTitle>
                                <CardDescription>
                                    살아봄에 오신 것을 환영합니다. 로그인하여
                                    시작하세요.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Link href="/login" className="block">
                                    <Button className="w-full h-12 text-base">
                                        로그인
                                    </Button>
                                </Link>
                                <Link href="/register" className="block">
                                    <Button
                                        variant="outline"
                                        className="w-full h-12 text-base"
                                    >
                                        회원가입
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    )}

                    {/* 기능 소개 */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-stone-900">
                            주요 기능
                        </h2>
                        <div className="space-y-3">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-stone-900">
                                            🏠 실제 거주 경험 공유
                                        </h3>
                                        <p className="text-sm text-stone-600">
                                            실제로 살았던 집에 대한 솔직한
                                            경험을 공유하세요.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-stone-900">
                                            ☕ 커피챗 신청
                                        </h3>
                                        <p className="text-sm text-stone-600">
                                            관심 있는 집에 대해 커피챗을
                                            신청하고 정보를 얻어보세요.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
