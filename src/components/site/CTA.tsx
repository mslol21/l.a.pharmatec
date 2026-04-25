import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import pattern from "@/assets/pattern.png";

const CTA = () => (
  <section className="px-6 md:px-10 py-20 relative overflow-hidden">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-deep p-10 md:p-16 lg:p-24 shadow-glow border border-white/10">
        {/* Visual Decoration */}
        <div className="absolute inset-0 opacity-15">
          <img src={pattern} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary-glow/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-dark opacity-30" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-center lg:text-left">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-glow">
              <Sparkles className="w-4 h-4" /> Parceria Científica
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-white">
              Precisa de suporte científico ou <span className="text-secondary-glow">ensaios laboratoriais?</span>
            </h2>
            
            <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Nossa equipe de doutoras está pronta para acelerar seu projeto biotecnológico com rigor técnico e agilidade comercial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-5 w-full sm:w-auto">
            <a 
              href="#contato" 
              className="group inline-flex items-center justify-center gap-3 px-10 py-6 rounded-full bg-secondary-glow text-primary font-bold text-lg shadow-glow hover:shadow-elegant transition-all hover:-translate-y-1 active:scale-95"
            >
              Falar com especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/5516000000000" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-6 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-lg backdrop-blur-md hover:bg-white/10 transition-all shadow-card"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
