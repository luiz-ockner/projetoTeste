"use client";



import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function ProductDetails() {
    const { id } = useParams();
    const addToCart = useCartStore((state) => state.addToCart);

        const [added, setAdded] = useState(false);

        const { data, isLoading, error } = useQuery({
            queryKey: ['product', id],
            queryFn: () => fetch(`http://localhost:4000/products/${id}`).then((res) => res.json())
        });

        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error loading product</p>;

    const handleAddToCart = () => {
        addToCart({
            id: data.id,
            name: data.name,
            price: data.price
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-lg text-gray-600">R$ {data.price}</p>
            <button
                className={`px-4 py-2 rounded mt-4 transition-colors duration-200 ${added ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                onClick={handleAddToCart}
                disabled={added}
            >
                {added ? 'Adicionado!' : 'Adicionar ao carrinho'}
            </button>
        </div>
    )
}