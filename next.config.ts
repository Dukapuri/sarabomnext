import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // middleware 경고 무시 (NextAuth v5는 middleware를 권장)
    experimental: {
        // Next.js 16에서 middleware 경고를 무시
    },
};

export default nextConfig;
