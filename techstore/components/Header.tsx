"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
    const { data: session } = useSession();

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between">

            <Link href="/" className="font-bold text-lg">TechStore</Link>
            <nav className="flex gap-4 items-center">
                <Link href="/cart">Carrinho</Link>
                {session ? (
                    <>
                        <span>{session.user?.name}</span>
                        <button onClick={() => signOut()} className="text-red-300">Sair</button>
                    </>
                ) : (
                    <Link href="/login">Login</Link>
                )}
            </nav>
        </header>
    );
}
