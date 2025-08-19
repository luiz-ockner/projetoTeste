"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useCartStore } from "@/store/cartStore";


export default function ProfilePage() {
    const { data: session, status } = useSession();
    const { items, clearCart } = useCartStore();

    if (status === "loading") {
        return <p className="p-4">Carregando...</p>;
    }

    if (!session)
        redirect("/login");

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
            <div className="bg-white shadow p-4 rounded mb-6">
                <p><strong>Nome:</strong>{session?.user?.name}</p>
                <p><strong>Email:</strong>{session?.user?.email}</p>
            </div>

            <h2 className="text-xl font-semibold mb-2">Carrinho atual</h2>
            {
                items.length === 0 ? (
                    <p className="text-gray-500">Carrinho vazio</p>
                ) :
                    (
                        <ul className="space-y-2">
                            {
                                items.map((item) => (
                                    <li key={item.id} className="border p-2 rounded flex justify-between">
                                        <span>{item.name}</span>
                                        <span className="font-bold">R$ {item.price}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    )}

            {items.length > 0 && (
                <button onClick={clearCart} className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Finalizar Pedido
                </button>
            )}

        </div>
    );

}
