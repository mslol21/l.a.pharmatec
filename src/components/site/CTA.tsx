import { ArrowRight, Sparkles } from "lucide-react";
import pattern from "@/assets/molecular-pattern.jpg";

const CTA = () => (
  <section className="px-6 md:px-10 py-16">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-deep p-10 md:p-16 lg:p-20 shadow-elegant border border-white/5">
        <div className="absolute inset-0 opacity-20">
          <img src={pattern} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary-glow/30 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-primary-glow/30 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-dark opacity-40" />

        <div className="relative grid md:grid-cols-[2fr_1fr] gap-10 items-center">
          <div className="text-white space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-glow">
              <Sparkles className="w-3 h-3" /> Vamos colaborar
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Transforme ciência em <span className="text-gradient-light">impacto real</span>.
            </h2>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Conte com a L.A. Pharmatec para acelerar seu próximo projeto em P&amp;D farmacêutico, biotecnológico e ambiental.
            </p>
          </div>
          <a href="#contato" className="group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-white text-primary font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-1 w-fit md:justify-self-end">
            Iniciar projeto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
