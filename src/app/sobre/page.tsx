import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Scale, CheckCircle2, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Sobre Nós | Calixto Advocacia",
  description: "Conheça a história, missão e valores do nosso escritório de advocacia.",
};

export default function Sobre() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossa História</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Há mais de 15 anos dedicados à excelência jurídica, construindo relações de confiança e entregando resultados sólidos.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dr. Calixto" 
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Dr. João Calixto</h2>
                  <p className="text-accent font-medium text-lg mb-6">OAB/SP 123.456</p>
                  <div className="prose prose-lg text-muted-foreground">
                    <p>
                      Fundador do escritório, Dr. João Calixto possui vasta experiência em litígios complexos e consultoria corporativa. Graduado pela Universidade de São Paulo (USP) e pós-graduado em Direito Empresarial.
                    </p>
                    <p className="mt-4">
                      Sua visão inovadora sobre a prática jurídica transformou o escritório em uma referência regional, pautada pela ética, transparência e busca incessante pela justiça.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="flex gap-4">
                    <Award className="h-8 w-8 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Especialista</h4>
                      <p className="text-sm text-muted-foreground">Mestre em Direito Processual.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BookOpen className="h-8 w-8 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Autor</h4>
                      <p className="text-sm text-muted-foreground">Diversos artigos publicados.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão Visão Valores */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground">Nossos Pilares</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Missão", desc: "Prestar serviços jurídicos de excelência, oferecendo soluções inovadoras para obtenção de resultados expressivos que garantam a satisfação de nossos clientes." },
                { title: "Visão", desc: "Manter-se como referência nos segmentos em que atua, sendo sempre reconhecido pelos seus clientes como um escritório moderno, inovador e eficiente." },
                { title: "Valores", desc: "Ética, Transparência, Comprometimento, Foco no Cliente, Qualidade, Trabalho em Equipe e Inovação contínua." },
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                  <Scale className="h-10 w-10 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
