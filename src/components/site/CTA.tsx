import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="section">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-10 md:p-16 shadow-elegant">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-secondary-glow/30 blur-3xl animate-pulse-glow" />
        <div className="relative grid md:grid-cols-[2fr_1fr] gap-8 items-center">
          <div className="text-primary-foreground space-y-4">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Vamos transformar ciência em impacto?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Conte com a L.A. Pharmatec para acelerar seu próximo projeto em P&amp;D farmacêutico, biotecnológico e ambiental.
            </p>
          </div>
          <a href="#contato" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-1 w-fit md:justify-self-end">
            Iniciar projeto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
