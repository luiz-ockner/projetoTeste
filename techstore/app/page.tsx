"use client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:4000/products").then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {data.map((prod: any) => (
        <div key={prod.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{prod.name}</h2>
          <p className="text-gray-600">R$ {prod.price}</p>
        </div>
      ))}
    </div>
  );
}
