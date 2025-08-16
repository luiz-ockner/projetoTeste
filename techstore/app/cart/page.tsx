"use client";
import { useCartStore } from "@/store/cartStore";


export default function CartPage() {
    const items = useCartStore((state) => state.items);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const user = useCartStore((state) => state.user);

    if (user === null) {
        return <div className="p-6">Carregando carrinho...</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Carrinho</h1>
            {items.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id} className="flex justify-between border-b py-2">
                            <span>{item.name}</span>
                            <span>R$ {item.price}</span>
                            <button
                                className="text-red-500"
                                onClick={() => removeFromCart(item.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
