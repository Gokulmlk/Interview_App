import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold text-white">
            Interview Platform
        </h1>

        <div className="flex items-center gap-4">
            <Link
                href="/pages/signup"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Sign Up
            </Link>
        </div>
    </nav>
  );
}   