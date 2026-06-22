"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Olá, Ricardo!</h1>
        <p className="text-muted-foreground mt-1">Bem-vindo ao seu portal do cliente. Aqui está o resumo das suas demandas.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Processos Ativos</CardTitle>
            <FileText className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">1 na fase de instrução</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Documentos Pendentes</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1 text-destructive font-medium">Requer sua atenção</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Próxima Audiência</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">15/07/2026</div>
            <p className="text-xs text-muted-foreground mt-1">Às 14:30 - Presencial</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Updates */}
      <Card>
        <CardHeader>
          <CardTitle>Últimas Movimentações</CardTitle>
          <CardDescription>Acompanhe o andamento recente dos seus processos.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {[
              {
                process: "0001234-56.2025.8.26.0100 - Reestruturação Societária",
                date: "Hoje, 10:30",
                status: "Petição juntada aos autos.",
                icon: CheckCircle2,
                color: "text-green-500",
              },
              {
                process: "0009876-54.2025.8.26.0100 - Defesa Trabalhista",
                date: "Ontem, 16:45",
                status: "Audiência de conciliação designada.",
                icon: Clock,
                color: "text-amber-500",
              },
              {
                process: "Administrativo - Elaboração de Contratos",
                date: "10 Jun 2026",
                status: "Contrato finalizado e enviado para assinatura.",
                icon: FileText,
                color: "text-blue-500",
              },
            ].map((update, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <update.icon className={`h-5 w-5 ${update.color}`} />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{update.status}</p>
                  <p className="text-xs text-muted-foreground mt-1">{update.process}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">{update.date}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8">Ver Histórico Completo</Button>
        </CardContent>
      </Card>
    </div>
  );
}
