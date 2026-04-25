import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import pattern from "@/assets/pattern.png";

const CTA = () => (
  <section className="px-6 md:px-10 py-24 relative overflow-hidden bg-background">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-[3.5rem] bg-gradient-deep p-12 md:p-20 lg:p-28 shadow-glow border border-white/10">
        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src={pattern} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-glow/20 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4 animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-glow/15 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4 animate-pulse-glow" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.3em] text-secondary-glow">
            <Sparkles className="w-4 h-4 animate-pulse" /> Acelere seu P&D
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            Precisa validar seu produto ou <br />
            <span className="text-gradient-light">desenvolver uma solução científica?</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-2xl max-w-3xl leading-relaxed font-light">
            Nossa equipe de doutoras e especialistas em biotecnologia está pronta para oferecer o suporte técnico necessário para o sucesso do seu projeto.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-6">
            <a 
              href="#contato" 
              className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 rounded-2xl bg-secondary text-white font-bold text-xl shadow-glow transition-all duration-300 hover:bg-secondary-glow hover:-translate-y-1 active:translate-y-0"
            >
              Falar com especialista
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/5516000000000" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-4 px-12 py-6 rounded-2xl bg-white/5 border border-white/20 text-white font-bold text-xl backdrop-blur-xl hover:bg-white/10 transition-all shadow-card"
            >
              <MessageSquare className="w-6 h-6 text-secondary-glow" />
              WhatsApp agora
            </a>
          </div>
          
          <div className="pt-10 flex items-center gap-8 text-white/30 text-[10px] uppercase font-bold tracking-widest">
            <span>Retorno em até 24h</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Consultoria Técnica Especializada</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;

