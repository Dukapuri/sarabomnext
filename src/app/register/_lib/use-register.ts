import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { registerUser } from "@/lib/api/auth";
import type { RegisterFormData } from "./validations";

export function useRegister() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const register = async (data: RegisterFormData) => {
        const { confirmPassword, ...registerData } = data;
        setIsLoading(true);

        try {
            await registerUser(registerData);

            toast.success("회원가입이 완료되었습니다!", {
                description: "로그인 페이지로 이동합니다.",
            });

            setTimeout(() => {
                router.push("/login?registered=true");
            }, 1500);
        } catch (error) {
            const errorMessage =
                (error as { error?: string; message?: string })?.error ||
                (error as { error?: string; message?: string })?.message ||
                "회원가입 중 오류가 발생했습니다.";
            toast.error("회원가입 실패", {
                description: errorMessage,
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        register,
        isLoading,
    };
}
