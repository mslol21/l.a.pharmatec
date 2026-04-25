import { motion } from "framer-motion";
import { Dna, Linkedin, Mail, MapPin, Globe, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-[hsl(222,84%,4%)] text-white/40 pt-32 pb-16 px-6 md:px-10 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    
    <div className="container-wide relative">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr_1fr] gap-16 lg:gap-32 pb-20 border-b border-white/5">
        
        {/* Brand Section */}
        <div className="space-y-10">
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow-blue border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-white/10 animate-pulse" />
              <Dna className="w-8 h-8 text-white relative z-10" />
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-3xl tracking-tighter">L.A. Pharmatec</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Biotech Excellence</div>
            </div>
          </div>
          <p className="text-xl leading-relaxed max-w-sm font-light text-white/60">
            Sediados no <span className="text-white font-medium">Supera Parque Tecnológico</span>, transformamos ciência fundamental em soluções terapêuticas reais.
          </p>
          
          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:contato@lapharmatec.com.br" },
              { icon: Globe, href: "#" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-500"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div className="text-[11px] uppercase font-bold tracking-[0.4em] text-secondary">A Empresa</div>
            <ul className="space-y-5 text-[15px] font-medium">
              <li><a href="#sobre" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">Sobre Nós</a></li>
              <li><a href="#fundadoras" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">Liderança</a></li>
              <li><a href="#one-health" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">One Health</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <div className="text-[11px] uppercase font-bold tracking-[0.4em] text-secondary">Soluções</div>
            <ul className="space-y-5 text-[15px] font-medium">
              <li><a href="#servicos" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">Serviços</a></li>
              <li><a href="#pesquisa" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">P&D</a></li>
              <li><a href="#contato" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-10">
          <div className="space-y-8">
            <div className="text-[11px] uppercase font-bold tracking-[0.4em] text-secondary">Localização</div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-[15px] leading-relaxed">
                  <span className="text-white block font-bold mb-1">Ribeirão Preto · SP</span>
                  Supera Parque Tecnológico <br />
                  Inovação & Biotecnologia
                </div>
              </div>
              <a 
                href="#contato" 
                className="group flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
        <div className="text-center md:text-left leading-relaxed">
          © {new Date().getFullYear()} L.A. Pharmatec · Biotecnologia Translacional <br className="md:hidden" />
          <span className="hidden md:inline mx-4">|</span> Todos os direitos reservados
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/60">Startup Deep Tech</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

