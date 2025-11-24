"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Session } from "next-auth";
import { getSession } from "@/auth/server-actions";

const SessionContext = createContext<Session | null>(null);

export const SessionProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        getSession().then((res) => {
            setSession(res);
        });
    }, [pathname]); // 페이지를 이동할 때마다 세션을 갱신

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
};

// 클라이언트 컴포넌트용 커스텀 훅
export const useSession = () => {
    return useContext(SessionContext);
};

