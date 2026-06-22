"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const duration = 2000; // 2 seconds

      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * end), end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Dark Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-4xl md:text-5xl font-serif text-white font-light mb-2">
              <Counter end={15} suffix="+" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Anos de Excelência</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-4xl md:text-5xl font-serif text-white font-light mb-2">
              <Counter end={500} suffix="+" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Casos Resolvidos</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-4xl md:text-5xl font-serif text-white font-light mb-2">
              <Counter end={98} suffix="%" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Taxa de Sucesso</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="text-4xl md:text-5xl font-serif text-white font-light mb-2">
              <Counter end={250} suffix="M+" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Em Patrimônio Protegido</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
