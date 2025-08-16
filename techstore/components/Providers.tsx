"use client";
import { SessionProvider } from "next-auth/react";
import { ReactQueryProvider } from "@/lib/react-query";
import Header from "@/components/Header";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <Header />
        {children}
      </ReactQueryProvider>
    </SessionProvider>
  );
}
