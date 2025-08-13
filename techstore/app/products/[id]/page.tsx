"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function ProductDetails() {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetch(`http://localhost:4000/products/${id}`).then((res) => res.json())
    });

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading product</p>

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-lg text-gray-600">R$ {data.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Adicionar ao carrinho
            </button>
        </div>
    )
}