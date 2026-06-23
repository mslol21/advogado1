"use client";

import Link from "next/link";
import { Scale, LogOut, Users, FileText, Settings, LayoutDashboard, BarChart3, MessageSquare } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl font-bold text-foreground">
              Admin <span className="text-accent">Panel</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-4">Principal</div>
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-2.5 rounded-md bg-secondary text-secondary-foreground font-medium">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <BarChart3 className="h-4 w-4" />
            Estatísticas do Site
          </Link>

          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-8">Conteúdo</div>
          <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <FileText className="h-4 w-4" />
            Blog Jurídico
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <Scale className="h-4 w-4" />
            Áreas de Atuação
          </Link>

          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-8">Gestão</div>
          <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <Users className="h-4 w-4" />
            Clientes & Leads
            <span className="ml-auto bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">5</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <MessageSquare className="h-4 w-4" />
            Depoimentos
          </Link>
          
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-8">Configurações</div>
          <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
            Ajustes e SEO
          </Link>
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-foreground truncate">Administrador</p>
            </div>
          </div>
          <Link href="/admin" className="flex items-center gap-3 px-4 py-2 mt-2 rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors text-sm">
            <LogOut className="h-4 w-4" />
            Desconectar
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden bg-background border-b border-border p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-serif font-bold text-foreground">Admin</span>
          </Link>
          <Link href="/admin" className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <LogOut className="h-5 w-5" />
          </Link>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
