"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="min-h-[60vh] grid place-items-center">Checking session…</div>;
    }

    if (session) {
        return (
            <div className="min-h-[60vh] grid place-items-center text-center">
                <div>
                    <h1 className="text-2xl font-semibold mb-2">Welcome, {session.user?.name}</h1>
                    {session.user?.image && (
                        <img src={session.user.image} alt="me" className="w-16 h-16 rounded-full mx-auto mb-4" />
                    )}
                    <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="px-4 py-2 rounded bg-red-600 text-white"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[60vh] grid place-items-center">
            <button
                onClick={() => signIn("google", { callbackUrl: "/products" })} // ✅ redirect to /products after login
                className="px-6 py-3 rounded bg-blue-600 text-white"
            >
                Sign in with Google
            </button>
        </div>
    );
}
