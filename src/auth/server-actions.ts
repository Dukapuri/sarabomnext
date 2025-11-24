"use server";

import { signIn, signOut, auth, unstable_update } from "@/auth/config";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";

// 세션 가져오기
export async function getSession(): Promise<Session | null> {
    return await auth();
}

// 폼으로 로그인
export async function signInWithForm(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const callbackUrl = formData.get("callbackUrl") as string | null;

    if (!email || !password) {
        throw new Error("이메일과 비밀번호를 입력해주세요.");
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
    } catch (error) {
        throw error;
    }

    redirect(callbackUrl || "/");
}

// 폼으로 로그아웃
export async function signOutWithForm() {
    await signOut({ redirectTo: "/" });
}

// 프로그래밍 방식 로그인
export async function signInWithCredentials(email: string, password: string) {
    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: String(error) };
    }
}

// 프로그래밍 방식 로그아웃
export async function signOutProgrammatically() {
    await signOut({ redirectTo: "/" });
}

// 세션 업데이트
export async function updateSession(data: Partial<Session>) {
    await unstable_update(data);
}

