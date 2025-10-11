"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession(); // <-- get logged in user info

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-services", label: "Services" },
    { href: "/aboutus", label: "About Us" },
    { href: "/add-services", label: "Add Service" },
    { href: "/my-services", label: "My Services" },
    { href: "/my-reviews", label: "My Reviews" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md group-hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2a9 9 0 00-9 9c0 1.98.65 3.8 1.74 5.27L3 21l4.73-1.74A9 9 0 1012 2zm0 3.5l1.18 2.39 2.64.38-1.91 1.86.45 2.63L12 11.75 9.64 12.8l.45-2.63-1.91-1.86 2.64-.38L12 5.5z" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text tracking-tight">
            Opinix
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 rounded-lg transition ${
                pathname === link.href
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Auth Buttons or User Info */}
          {session ? (
            <div className="flex items-center gap-4">
              {/* User Image */}
              <img
                src={session.user.image || "/default-avatar.png"}
                alt={session.user.name}
                className="w-10 h-10 rounded-full border-2 border-cyan-500"
              />
              {/* Logout Button */}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white shadow-sm transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md hover:opacity-90 transition"
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6 animate-slide-left">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className={`px-3 py-2 rounded-lg transition ${
                  pathname === link.href
                    ? "bg-cyan-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {session ? (
              <div className="flex items-center gap-4">
                <img
                  src={session.user.image || "/default-avatar.png"}
                  alt={session.user.name}
                  className="w-10 h-10 rounded-full border-2 border-cyan-500"
                />
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={toggleMenu}
                  className="px-4 py-2 rounded-lg border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={toggleMenu}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md hover:opacity-90 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
