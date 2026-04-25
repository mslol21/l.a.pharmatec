import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-gradient-deep text-white/50 pt-24 pb-12 px-6 md:px-10 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    
    <div className="container-wide relative">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-16 lg:gap-24 pb-16 border-b border-white/5">
        
        {/* Brand Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow-blue border border-white/10">
              <span className="text-white font-display font-bold text-xl">L</span>
            </div>
            <div>
              <div className="font-display font-bold text-white text-2xl tracking-tight">L.A. Pharmatec</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-secondary-glow font-bold">Biotech Innovation</div>
            </div>
          </div>
          <p className="text-lg leading-relaxed max-w-sm font-light">
            Sediados no <span className="text-white font-medium">Supera Parque Tecnológico</span>, transformamos ciência fundamentada em soluções terapêuticas reais para o mercado global.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 lg:gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-bold mb-6">Mapa do Site</div>
            <ul className="space-y-4 text-[15px]">
              <li><a href="#sobre" className="hover:text-secondary-glow transition-all flex items-center gap-2 group">Sobre a Startup</a></li>
              <li><a href="#fundadoras" className="hover:text-secondary-glow transition-all flex items-center gap-2 group">Liderança Científica</a></li>
              <li><a href="#one-health" className="hover:text-secondary-glow transition-all flex items-center gap-2 group">Conceito One Health</a></li>
              <li><a href="#servicos" className="hover:text-secondary-glow transition-all flex items-center gap-2 group">Portfólio de Serviços</a></li>
              <li><a href="#pesquisa" className="hover:text-secondary-glow transition-all flex items-center gap-2 group">Projetos em P&D</a></li>
            </ul>
          </div>
        </div>

        {/* Legal/Contact */}
        <div className="space-y-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-bold mb-6">Headquarters</div>
            <ul className="space-y-4 text-[15px]">
              <li className="text-white font-medium">Ribeirão Preto · SP · Brasil</li>
              <li>Supera Parque Tecnológico</li>
              <li className="hover:text-white transition-colors cursor-pointer">contato@lapharmatec.com.br</li>
            </ul>
          </div>
          
          <div className="flex gap-4">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
        <div className="hover:text-white/40 transition-colors">© {new Date().getFullYear()} L.A. Pharmatec · Soluções de Biotecnologia</div>
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-glow/40 animate-pulse" />
          Incubada no Supera Parque
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
