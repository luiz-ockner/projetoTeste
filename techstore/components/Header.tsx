import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between">

            <Link href="/" className="font-bold text-lg">TechStore</Link>
            <nav className="flex space-x-4">
                <div>
                    <Link href="/login" className="mr-4">
                        Login
                    </Link>
                    <Link href="/cart">
                        Cart
                    </Link>
                </div>
            </nav>
        </header>
    );
}
