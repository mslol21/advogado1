"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Mapeamento Estratégico",
    description: "Análise profunda do cenário, identificação de riscos ocultos e estruturação do plano de ação.",
    year: "Fase 01"
  },
  {
    title: "Arquitetura Jurídica",
    description: "Desenvolvimento de teses exclusivas e elaboração de documentos com precisão cirúrgica.",
    year: "Fase 02"
  },
  {
    title: "Atuação Contenciosa",
    description: "Representação combativa e técnica em tribunais e mesas de arbitragem com foco absoluto na vitória.",
    year: "Fase 03"
  },
  {
    title: "Blindagem e Acompanhamento",
    description: "Monitoramento contínuo e consolidação dos resultados para garantir a segurança patrimonial a longo prazo.",
    year: "Fase 04"
  }
];

export function Timeline() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-accent/50" />
            <span className="text-accent text-[10px] font-semibold tracking-[0.4em] uppercase">
              Metodologia
            </span>
            <div className="w-8 h-[1px] bg-accent/50" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-serif text-white mb-6 font-light"
          >
            Nossa forma de <span className="italic text-white/80">Atuar</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-accent -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
                  {step.year}
                </span>
                <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">{step.title}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              
              {/* Empty Space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
