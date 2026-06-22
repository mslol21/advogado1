import Link from "next/link";
import { Scale, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white/60 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group inline-flex">
              <Scale className="h-8 w-8 text-accent" strokeWidth={1} />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] uppercase text-white">
                  Calixto
                </span>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed mb-8 max-w-xs text-white/40">
              Boutique jurídica de alto padrão dedicada a soluções cirúrgicas para demandas empresariais e civis complexas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white mb-8">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Sobre Nós', 'Expertise', 'Publicações', 'Contato', 'Portal do Cliente'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-accent transition-colors font-light tracking-wide flex items-center gap-2 group">
                    <span className="w-3 h-[1px] bg-white/20 group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white mb-8">Sede Faria Lima</h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex gap-4 items-start group">
                <MapPin className="h-5 w-5 text-accent shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <span className="leading-relaxed">Av. Brigadeiro Faria Lima, 3000<br/>Itaim Bibi, São Paulo - SP<br/>CEP 01451-000</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone className="h-5 w-5 text-accent shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <span>+55 11 99999-9999</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail className="h-5 w-5 text-accent shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <span className="group-hover:text-white transition-colors">contato@calixto.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white mb-8">Newsletter Jurídica</h4>
            <p className="text-sm font-light mb-6 text-white/40">Receba atualizações estratégicas sobre jurisprudências e mercado.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail corporativo" 
                className="bg-[#0A0A0A] border border-white/10 px-4 py-3 w-full text-sm text-white focus:outline-none focus:border-accent/50 transition-colors placeholder:text-white/20"
              />
              <button className="bg-accent text-[#030303] px-4 py-3 hover:bg-white transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/30">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} Sociedade de Advogados Calixto. Todos os direitos reservados.</p>
            <span className="hidden md:inline text-white/10">|</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">Registro OAB/SP 12.345</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-accent transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-accent transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
