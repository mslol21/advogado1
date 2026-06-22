"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A atuação da equipe foi cirúrgica. Em um momento de crise estrutural, a precisão das análises nos poupou de perdas incalculáveis.",
    author: "CEO de Multinacional de Logística",
    role: "Cliente Corporativo"
  },
  {
    quote: "O nível de sofisticação jurídica e discrição é inigualável. Não os considero apenas advogados, mas conselheiros estratégicos do meu family office.",
    author: "Presidente de Holding Familiar",
    role: "Cliente de Wealth Management"
  },
  {
    quote: "A agressividade técnica e o domínio do cenário demonstrados no contencioso mudaram o rumo do litígio a nosso favor.",
    author: "Diretor Jurídico",
    role: "Instituição Financeira"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#030303] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
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
              Confidencialidade & Confiança
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
            A palavra de quem <span className="italic text-white/80">decide</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between hover:border-accent/30 transition-colors duration-500"
            >
              <div>
                <Quote className="w-8 h-8 text-accent/20 mb-8" strokeWidth={1} />
                <p className="text-white/60 font-light leading-relaxed mb-8 italic text-sm md:text-base">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <h4 className="text-white font-serif tracking-wide">{testimonial.author}</h4>
                <p className="text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
