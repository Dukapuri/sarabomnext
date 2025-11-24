import { auth } from "@/auth/config";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
    const session = await auth();
    const { pathname } = request.nextUrl;
    const isLoggedIn = !!session;

    // 공개 라우트 (로그인 없이 접근 가능)
    const publicRoutes = ["/", "/login", "/register"];
    const isPublicRoute = publicRoutes.includes(pathname);

    // 로그인 페이지나 회원가입 페이지에 이미 로그인한 사용자가 접근하면 메인으로 리다이렉트
    if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // 보호된 라우트 (로그인 필요)
    // 공개 라우트가 아니고 로그인하지 않은 경우 로그인 페이지로 리다이렉트
    if (!isPublicRoute && !isLoggedIn) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

// proxy가 실행될 경로 설정
export const config = {
    matcher: [
        /*
         * 다음을 제외한 모든 요청 경로와 일치:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public 폴더의 파일들
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};

