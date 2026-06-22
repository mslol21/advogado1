"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "O Novo Marco Regulatório de Fusões e Aquisições no Brasil",
    date: "12 Março 2026",
    category: "Corporate M&A",
    readTime: "5 min",
  },
  {
    title: "Jurisprudência do STJ sobre Desconsideração da Personalidade Jurídica",
    date: "28 Fevereiro 2026",
    category: "Contencioso",
    readTime: "8 min",
  },
  {
    title: "Holdings Familiares: Estratégias de Blindagem Frente à Nova Reforma Tributária",
    date: "15 Fevereiro 2026",
    category: "Wealth Planning",
    readTime: "6 min",
  }
];

export function Insights() {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Column - Header */}
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-accent text-[10px] font-semibold tracking-[0.4em] uppercase">
                Pareceres & Artigos
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-serif text-white mb-6 font-light leading-tight"
            >
              Visão <br/>
              <span className="italic text-white/60">Estratégica</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/40 font-light leading-relaxed mb-10 text-sm"
            >
              Acompanhe as teses jurídicas inovadoras e análises de mercado elaboradas pelos sócios da nossa banca.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href="/blog" 
                className="group inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white h-12 px-8 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#030303] transition-all duration-500"
              >
                Acessar Acervo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Articles List */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  href="/blog" 
                  className="group block bg-[#0A0A0A] border border-white/5 p-8 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-medium bg-accent/10 px-3 py-1">
                          {article.category}
                        </span>
                        <span className="text-white/30 text-[10px] uppercase tracking-wider font-mono">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-accent transition-colors duration-500 leading-snug">
                        {article.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-4 md:flex-col md:items-end">
                      <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
                        <BookOpen className="w-3 h-3" />
                        {article.readTime}
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-[#030303] text-white/50 transition-all duration-500">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
