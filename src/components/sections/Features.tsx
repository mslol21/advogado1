"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Briefcase, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proteção Blindada",
    description: "Defesa implacável do seu patrimônio e legado com estratégias preventivas e contenciosas focadas na redução total de riscos.",
  },
  {
    icon: Briefcase,
    title: "Estratégia Corporativa",
    description: "Estruturação societária de alto nível para M&A, governança corporativa e sucessão, garantindo o crescimento sustentável da sua empresa.",
  },
  {
    icon: Lock,
    title: "Discrição Absoluta",
    description: "Lidamos com casos complexos e de alto perfil garantindo sigilo absoluto em todas as etapas de negociação e litígio.",
  },
  {
    icon: Scale,
    title: "Litígios Complexos",
    description: "Atuação cirúrgica em disputas societárias e civis de grande porte, com abordagem agressiva quando necessária e conciliação estratégica.",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-accent/50" />
            <span className="text-accent text-[10px] font-semibold tracking-[0.4em] uppercase">
              Nosso DNA
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
            Padrão de <span className="italic text-white/80">Excelência</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 text-sm md:text-base font-light tracking-wide leading-relaxed"
          >
            Não aceitamos casos onde não possamos entregar um impacto transformador. Nossa atuação é restrita, cirúrgica e desenhada para vitórias.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#0A0A0A] border border-white/5 p-10 hover:border-accent/30 transition-colors duration-500 overflow-hidden"
            >
              {/* Glass subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-none border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors duration-500 bg-white/5">
                  <feature.icon className="w-6 h-6 text-accent/80 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 font-light leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
