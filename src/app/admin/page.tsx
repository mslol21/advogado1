"use client";

import Link from "next/link";
import { Scale, ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminLogin() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Scale className="h-10 w-10 text-accent" />
          </Link>
          <h1 className="text-3xl font-serif font-bold text-foreground">Gestão do Escritório</h1>
          <p className="text-muted-foreground mt-2">Área restrita a administradores.</p>
        </div>

        <Card className="border-border shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <ShieldAlert className="w-5 h-5" />
              Autenticação Administrativa
            </CardTitle>
            <CardDescription>
              Insira seu e-mail corporativo e senha de acesso.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail Corporativo</Label>
              <Input id="email" type="email" placeholder="admin@calixtoadvocacia.com.br" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/admin/dashboard" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base">
                Acessar Painel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
