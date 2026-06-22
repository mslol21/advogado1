"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden bg-[#030303]">
      {/* Dark Luxury Ambient Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Striking Background Image */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Architecture"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        
        {/* Gradient Mask for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40 z-10" />
        
        {/* Subtle glowing orb for modern luxury feel */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-[9px] md:text-[10px] font-semibold tracking-[0.4em] uppercase">
              Excelência & Estratégia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif text-white tracking-tighter mb-8 leading-[1.05] font-light"
          >
            O poder da<br/>
            <span className="italic font-normal text-white/90">decisão exata.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-white/50 mb-14 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            Boutique jurídica focada em soluções implacáveis para demandas complexas. Proteção patrimonial, estruturação empresarial e defesas cirúrgicas para um grupo seleto de clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <Link 
              href="/agendar" 
              className="group flex items-center justify-center gap-4 bg-accent text-[#030303] h-14 px-8 text-[10px] tracking-[0.3em] uppercase font-bold transition-all hover:bg-white hover:scale-105 duration-500 ease-out"
            >
              Consultoria Privada
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              className="group flex items-center justify-center gap-3 h-14 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white font-medium transition-colors"
            >
              Falar com Sócio Diretor
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Modern Dark Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-4 z-30"
      >
        <span className="text-[8px] tracking-[0.4em] uppercase text-white/30 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
