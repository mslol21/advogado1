"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const partners = [
  {
    name: "Dr. Alexandre Calixto",
    role: "Sócio Fundador",
    credentials: "OAB/SP 112.345",
    expertise: "Mestre em Direito Societário pela USP. Ex-membro do CARF.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dra. Helena Vanzella",
    role: "Sócia Diretora",
    credentials: "OAB/SP 223.456",
    expertise: "Doutora em Direito Civil. Especialista em Blindagem Patrimonial.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Roberto Gusmão",
    role: "Sócio de Litígio",
    credentials: "OAB/SP 334.567",
    expertise: "Especialista em Contencioso Estratégico e Tribunais Superiores.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
  }
];

export function Team() {
  return (
    <section className="py-32 bg-[#030303] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-accent text-[10px] font-semibold tracking-[0.4em] uppercase">
                A Banca
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 font-light leading-tight"
            >
              Excelência <br/>
              <span className="italic text-white/60">Intelectual</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/sobre" 
              className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 hover:text-accent transition-colors"
            >
              Conhecer toda a equipe
              <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors bg-white/5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative h-[450px] w-full mb-6 overflow-hidden bg-[#0A0A0A] border border-white/5">
                <div className="absolute inset-0 bg-[#000000]/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1] opacity-80 group-hover:opacity-100 object-top"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-accent transition-colors duration-500">
                  {partner.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
                    {partner.role}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-accent/50" />
                  <span className="text-[10px] uppercase tracking-[0.1em] text-accent font-mono">
                    {partner.credentials}
                  </span>
                </div>
                <p className="text-white/40 font-light text-sm leading-relaxed max-w-sm">
                  {partner.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
