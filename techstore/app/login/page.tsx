"use client";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        alert(`Login com ${email} (fictício)`)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded shadow-md w-80"
            >
                <h1 className="text-xl font-bold mb-4">Login</h1>
                <input
                    className="border border-gray-300 p-2 mb-4 w-full"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <input
                    className="border border-gray-300 p-2 mb-4 w-full"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 w-full rounded"
                >
                    Entrar
                </button>
            </form>
        </div>
    )

}
