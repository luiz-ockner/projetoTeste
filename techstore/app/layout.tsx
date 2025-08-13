import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/react-query";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechStore",
  description: "Loja fictícia de tecnologia para estudos em React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Header />
          <main className="min-h-screen bg-gray-50">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
