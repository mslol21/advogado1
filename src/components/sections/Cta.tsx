"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden border-t border-white/5 border-b">
      {/* Dark Luxury Subtle Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A] to-[#030303] z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/5 p-12 md:p-20 rounded-none shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="text-accent text-[10px] font-semibold tracking-[0.4em] uppercase">
              Contato Privado
            </span>
            <div className="w-12 h-[1px] bg-accent/50" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight tracking-tight">
            Precisão no momento em que você mais <span className="italic text-white/80">precisa.</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/40 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Atendimento exclusivo. Nossa equipe sênior está preparada para atuar na preservação e defesa do seu patrimônio com a máxima discrição.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              className="group flex items-center justify-center gap-3 bg-accent text-[#030303] h-14 px-10 text-[10px] tracking-[0.3em] uppercase font-bold transition-all hover:bg-white hover:scale-105 duration-500 w-full sm:w-auto"
            >
              Falar com Sócio
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/agendar" 
              className="group relative flex items-center justify-center gap-3 h-14 px-10 text-[10px] tracking-[0.3em] uppercase text-white font-medium border border-white/10 hover:border-accent/50 transition-all duration-500 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-accent transition-colors duration-500">Agendar Reunião</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
