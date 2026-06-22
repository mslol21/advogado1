"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    id: "empresarial",
    title: "Direito Societário & M&A",
    description: "Estruturação de fusões, aquisições e governança corporativa de alta complexidade para multinacionais e family offices.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "civil",
    title: "Litígio Estratégico",
    description: "Defesa e proposição de ações judiciais e arbitrais envolvendo disputas comerciais de grande volume financeiro.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "familia",
    title: "Planejamento Sucessório",
    description: "Blindagem patrimonial e arquitetura sucessória internacional para garantir a transição pacífica de grandes legados.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
  }
];

export function PracticeAreas() {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
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
                Áreas de Atuação
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 font-light leading-tight"
            >
              Especialidades<br/>
              <span className="italic text-white/60">Cirúrgicas</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/atuacao" 
              className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 hover:text-accent transition-colors"
            >
              Consultar todas as áreas
              <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors bg-white/5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Large Image Cards - Dark Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <Link href={`/atuacao/${area.id}`} className="block h-full cursor-pointer overflow-hidden">
                <div className="relative h-[60vh] md:h-[550px] w-full overflow-hidden mb-8 bg-[#0A0A0A]">
                  <div className="absolute inset-0 bg-[#000000]/60 mix-blend-multiply z-10 group-hover:opacity-20 transition-opacity duration-1000" />
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1] opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-[#030303] to-transparent">
                    <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-accent transition-colors duration-500">
                      {area.title}
                    </h3>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-white/40 font-light leading-relaxed mb-6 text-sm">
                    {area.description}
                  </p>
                  <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out">
                    Saber Mais <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
