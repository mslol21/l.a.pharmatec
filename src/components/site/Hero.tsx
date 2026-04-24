import hero from "@/assets/hero-molecules.jpg";
import { ArrowRight, FlaskConical } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-mesh">
      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-glow animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-glow animate-pulse-glow" />

      <div className="container-x grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6 md:px-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary">
            <FlaskConical className="w-3.5 h-3.5" />
            Startup biotech · Supera Parque
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            Inovação em fármacos para <span className="text-gradient">saúde humana e animal</span>, conectando ciência, tecnologia e meio ambiente.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Pesquisa e Desenvolvimento (P&amp;D) em microbiologia e parasitologia com foco no conceito <strong className="text-foreground">One Health</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-hero text-primary-foreground font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-1">
              Solicitar consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass border border-primary/20 text-primary font-semibold hover:bg-primary/5 transition-all">
              Conhecer serviços
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/60">
            {[
              { v: "P&D", l: "Microbiologia & Parasitologia" },
              { v: "ISO", l: "Padrões internacionais" },
              { v: "One Health", l: "Saúde integrada" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display font-bold text-xl text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-hero rounded-[2rem] blur-3xl opacity-30 animate-pulse-glow" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/60 animate-float">
            <img src={hero} alt="Estruturas moleculares de DNA azul e verde em laboratório de biotecnologia" width={1920} height={1280} className="w-full h-auto" />
          </div>
          {/* Floating badges */}
          <div className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 shadow-card animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">DNA Sequencing</div>
            <div className="font-display font-bold text-primary">Active</div>
          </div>
          <div className="absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 shadow-card animate-float" style={{ animationDelay: "2s" }}>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">In vitro</div>
            <div className="font-display font-bold text-secondary">OECD</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
