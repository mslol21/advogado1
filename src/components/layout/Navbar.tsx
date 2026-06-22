"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Expertise", href: "/atuacao" },
  { name: "Publicações", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#030303]/80 backdrop-blur-2xl border-b border-white/[0.04] py-4"
          : "bg-gradient-to-b from-black/80 to-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Scale className="h-6 w-6 text-accent transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.25em] uppercase text-white">
              Calixto
            </span>
            <span className="text-[8px] tracking-[0.4em] uppercase text-accent/80 font-light">
              Boutique Jurídica
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-1/2"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link 
            href="/portal" 
            className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300"
          >
            Acesso Cliente
          </Link>
          <Link 
            href="/agendar" 
            className="group relative px-6 py-3 overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative text-[10px] uppercase tracking-[0.2em] font-medium text-white group-hover:text-accent transition-colors duration-500">
              Consultoria
            </span>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger 
              render={<Button variant="ghost" size="icon" className="text-white hover:bg-white/5" />}
            >
              <Menu className="h-6 w-6" strokeWidth={1} />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-[#030303]/95 backdrop-blur-2xl border-l border-white/5 p-10 flex flex-col justify-center">
              <SheetTitle className="sr-only">Navegação</SheetTitle>
              <Link href="/" className="flex items-center gap-3 mb-16">
                <Scale className="h-8 w-8 text-accent" strokeWidth={1} />
                <span className="font-serif text-2xl tracking-[0.2em] uppercase text-white">
                  Calixto
                </span>
              </Link>
              
              <nav className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-serif tracking-[0.1em] text-white/80 hover:text-white transition-colors flex items-center gap-4 group"
                  >
                    <span className="w-4 h-[1px] bg-accent/0 group-hover:bg-accent transition-all duration-300" />
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-16 flex flex-col gap-6">
                <Link href="/portal" className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors">
                  Acesso Cliente
                </Link>
                <Link href="/agendar" className="bg-accent text-black px-6 py-4 text-center text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500">
                  Agendar Consultoria
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
