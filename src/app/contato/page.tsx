"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Contato() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Fale Conosco</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Estamos prontos para ouvir você e encontrar a melhor solução jurídica para o seu caso.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info & Map */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Informações de Contato</h2>
                  <div className="grid gap-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Endereço</h4>
                        <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista<br/>São Paulo, SP - CEP 01310-100</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Telefone</h4>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">E-mail</h4>
                        <p className="text-muted-foreground">contato@calixtoadvocacia.com.br</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Horário de Atendimento</h4>
                        <p className="text-muted-foreground">Segunda a Sexta: 09h às 18h<br/>Sábados: Apenas com agendamento</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[300px]">
                  {/* Map Placeholder using iframe (Google Maps embed) */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1436402450553!2d-46.65471418502227!3d-23.563339184682025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 md:p-10 rounded-3xl shadow-xl border border-border/50">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Envie sua mensagem</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Digite seu nome" className="h-12 bg-background" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="h-12 bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone / WhatsApp</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" className="h-12 bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" placeholder="Qual o motivo do contato?" className="h-12 bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva brevemente seu caso..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full h-14 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">ou</span>
                    </div>
                  </div>

                  <Button type="button" variant="outline" className="w-full h-14 text-base bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border-[#25D366]/20">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
