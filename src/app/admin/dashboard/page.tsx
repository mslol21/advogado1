"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, MousePointerClick, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Painel Geral</h1>
          <p className="text-muted-foreground mt-1">Visão geral do desempenho do site e novos contatos.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Baixar Relatório</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white">Novo Artigo (Blog)</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Visitas no Mês</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12.450</div>
            <p className="text-xs text-green-500 mt-1 font-medium">+14% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Novos Leads</CardTitle>
            <Users className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">48</div>
            <p className="text-xs text-green-500 mt-1 font-medium">+5% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Taxa de Conversão</CardTitle>
            <MousePointerClick className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.8%</div>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Estável</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Consultas Agendadas</CardTitle>
            <CalendarCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-green-500 mt-1 font-medium">Nesta semana</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Últimos Leads (Contatos do Site) */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Últimos Contatos (Leads)</CardTitle>
            <CardDescription>Pessoas que preencheram o formulário do site recentemente.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Carlos Eduardo", subject: "Cálculo Rescisório", date: "Há 2 horas", status: "Novo" },
                { name: "Empresa XYZ Ltda", subject: "Consultoria Tributária", date: "Há 5 horas", status: "Em Contato" },
                { name: "Mariana Souza", subject: "Divórcio Consensual", date: "Ontem", status: "Convertido" },
                { name: "João Pedro", subject: "Aposentadoria", date: "Ontem", status: "Novo" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border/50">
                  <div>
                    <p className="font-semibold text-sm">{lead.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{lead.subject}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground hidden sm:block">{lead.date}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      lead.status === 'Novo' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      lead.status === 'Convertido' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Desempenho do Blog */}
        <Card>
          <CardHeader>
            <CardTitle>Artigos Populares</CardTitle>
            <CardDescription>Mais lidos nos últimos 30 dias.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { title: "O que muda com a reforma...", views: "3.2k views" },
                { title: "Revisão da Vida Toda...", views: "2.8k views" },
                { title: "Planejamento Sucessório...", views: "1.5k views" },
                { title: "Direitos do Consumidor...", views: "980 views" },
              ].map((post, i) => (
                <div key={i} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {i+1}
                    </div>
                    <p className="font-medium text-sm text-foreground line-clamp-1">{post.title}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{post.views}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6">Gerenciar Blog</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
