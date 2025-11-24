"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useSession } from "@/auth/provider";
import { signOutWithForm } from "@/auth/server-actions";
import Link from "next/link";

export default function DashboardPage() {
    const session = useSession();

    if (!session?.user) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-stone-600">로딩 중...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
            <main className="container mx-auto px-4 py-8 max-w-md">
                <div className="space-y-8">
                    <div className="text-center space-y-2 pt-8">
                        <h1 className="text-4xl font-bold text-stone-900">
                            대시보드
                        </h1>
                        <p className="text-stone-600">
                            보호된 페이지입니다. 로그인한 사용자만 접근할 수
                            있습니다.
                        </p>
                    </div>

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
                                    <strong>이름:</strong>{" "}
                                    {session.user.name || "설정되지 않음"}
                                </p>
                                <p className="text-sm text-stone-600">
                                    <strong>이메일:</strong> {session.user.email}
                                </p>
                                <p className="text-sm text-stone-600">
                                    <strong>사용자 ID:</strong> {session.user.id}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Link href="/" className="flex-1">
                                    <Button
                                        variant="outline"
                                        className="w-full h-12 text-base"
                                    >
                                        홈으로
                                    </Button>
                                </Link>
                                <form action={signOutWithForm} className="flex-1">
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
                </div>
            </main>
        </div>
    );
}

