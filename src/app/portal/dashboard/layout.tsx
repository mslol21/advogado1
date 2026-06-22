"use client";

import Link from "next/link";
import { Scale, LogOut, FileText, MessageSquare, LayoutDashboard, Settings, FileSearch, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-secondary/50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-accent" />
            <span className="font-serif text-xl font-bold text-white">
              Calixto <span className="text-accent">Portal</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/portal/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-accent text-accent-foreground font-medium">
            <LayoutDashboard className="h-5 w-5" />
            Resumo
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground/70 hover:bg-white/10 hover:text-white transition-colors">
            <FileSearch className="h-5 w-5" />
            Meus Processos
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground/70 hover:bg-white/10 hover:text-white transition-colors">
            <FileText className="h-5 w-5" />
            Documentos
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground/70 hover:bg-white/10 hover:text-white transition-colors">
            <MessageSquare className="h-5 w-5" />
            Mensagens
            <span className="ml-auto bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">2</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
              RM
            </div>
            <div>
              <p className="text-sm font-medium text-white">Ricardo Mendes</p>
              <p className="text-xs text-primary-foreground/60">Cliente Premium</p>
            </div>
          </div>
          <Link href="/portal" className="flex items-center gap-3 px-4 py-3 mt-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut className="h-5 w-5" />
            Sair
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden bg-primary text-white p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-accent" />
            <span className="font-serif font-bold">Portal</span>
          </Link>
          <Button variant="ghost" size="icon" className="text-white" asChild>
            <Link href="/portal"><LogOut className="h-5 w-5" /></Link>
          </Button>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-10 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
