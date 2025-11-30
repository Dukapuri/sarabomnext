import { notFound } from "next/navigation";
import { ComponentsPreview } from "./_components/components-preview";

export default function ComponentsPage() {
    // 개발 환경이 아니면 404 페이지로 리다이렉트
    if (process.env.NODE_ENV !== "development") {
        notFound();
    }

    return <ComponentsPreview />;
}
