"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const { openCart, items } = useCartStore();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Order", href: "/order" },
    { name: "Subscribe", href: "/subscriptions" },
    { name: "Locations", href: "/locations" },
    { name: "Rewards", href: "/rewards" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3 shadow-lg"
          : "bg-zinc-950 py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Mobile Menu Toggle & Logo */}
        <div className="flex items-center">
          <button
            title="Menu"
            className="md:hidden mr-4 text-white p-1 hover:text-amber-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-zinc-950 font-black tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              HC
            </div>
            <span className="text-xl font-black uppercase text-white tracking-tight hidden sm:block group-hover:text-amber-500 transition-colors">
              Herdless
            </span>
          </Link>
        </div>

        {/* Desktop Nav Actions */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-amber-500"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Link href="/account" className="hidden sm:flex text-zinc-300 hover:text-white transition-colors">
            <User size={20} />
          </Link>
          
          <button
            className="text-zinc-300 hover:text-amber-500 transition-colors relative p-1"
            onClick={openCart}
          >
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-xl overflow-hidden py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold uppercase tracking-wide text-zinc-300 hover:text-amber-500 py-2 border-b border-zinc-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/account"
            className="flex items-center gap-2 text-lg font-bold uppercase tracking-wide text-zinc-300 hover:text-amber-500 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <User size={20} /> My Account
          </Link>
        </div>
      )}
    </header>
  );
}
