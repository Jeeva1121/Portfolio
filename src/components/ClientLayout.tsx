"use client";

import { useEffect, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return <div style={{ opacity: 0 }}>{children}</div>;
    }

    return (
        <>
            {children}
        </>
    );
}

