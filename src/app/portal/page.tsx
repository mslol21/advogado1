"use client";

import Link from "next/link";
import { Scale, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortalLogin() {
  return (
    <main className="min-h-screen bg-secondary flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664159854-2328114d5327?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply z-0" />
      
      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Scale className="h-10 w-10 text-accent" />
          </Link>
          <h1 className="text-3xl font-serif font-bold text-foreground">Portal do Cliente</h1>
          <p className="text-muted-foreground mt-2">Acesse seus processos, documentos e mensagens.</p>
        </div>

        <Card className="border-border/50 shadow-2xl backdrop-blur-sm bg-background/95">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent" />
              Acesso Seguro
            </CardTitle>
            <CardDescription>
              Insira suas credenciais fornecidas pelo escritório.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail ou CPF</Label>
              <Input id="email" type="text" placeholder="Digite seu acesso" className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link href="#" className="text-xs text-accent hover:underline font-medium">Esqueceu a senha?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" className="bg-secondary/50" />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Link href="/portal/dashboard" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base">
                Entrar no Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="text-center text-sm text-muted-foreground">
              Ainda não é cliente? <Link href="/contato" className="text-accent hover:underline font-medium">Fale conosco</Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
