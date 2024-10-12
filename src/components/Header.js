"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`text-sm font-medium transition-colors ${
          isActive ? "text-[#f49a25]" : "hover:text-[#f49a25]"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="border-b border-[#f4eee7] px-4 py-3 md:px-10 sticky top-0 bg-[#fcfaf8] z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight">
            Kiprich Safaris
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/destinations">Destinations</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#f49a25] text-[#1c150d] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#e38d1e] transition-colors">
            Book a Safari
          </button>
          <button
            className="md:hidden text-[#1c150d]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-[#fcfaf8] py-4">
          <div className="container mx-auto flex flex-col gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/destinations">Destinations</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <button className="bg-[#f49a25] text-[#1c150d] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#e38d1e] transition-colors self-start">
              Book a Safari
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
