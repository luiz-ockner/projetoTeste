"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Header from "@/components/Header";
import { ReactQueryProvider } from "@/lib/react-query";

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
        <Link key={prod.id} href={`/products/${prod.id}`}>
          <h2 className="text-lg font-bold hover:underline">{prod.name}</h2>
        </Link>
      ))}
    </div>
    
  );
}

