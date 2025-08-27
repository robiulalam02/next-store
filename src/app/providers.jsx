"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode } from "react";

function SessionLoader({ children }) {
  const { status } = useSession();

  if (status === "loading") {
    // Full-page fallback while session is loading
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <SessionLoader>{children}</SessionLoader>
    </SessionProvider>
  );
}
