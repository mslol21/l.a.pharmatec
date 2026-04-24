import hero from "@/assets/hero-molecules.jpg";
import { ArrowRight, Sparkles, FlaskConical, Microscope, Dna } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(218 80% 8%) 0%, hsl(215 75% 14%) 40%, hsl(212 70% 22%) 75%, hsl(195 65% 28%) 100%)",
      }}
    >
      {/* Grid + glows */}
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-glow/25 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-secondary-glow/25 blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[140px]" />

      <div className="container-x relative z-10 px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-glow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Startup biotech · Supera Parque Tecnológico</span>
            </div>

            <h1 className="font-display font-bold text-white leading-[0.95] tracking-tight text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]">
              Inovação em fármacos para{" "}
              <span className="text-gradient-light">saúde humana e animal</span>
              <span className="text-white/90">,</span>{" "}
              <span className="text-white/70 font-light italic">conectando</span>{" "}
              ciência, tecnologia e meio ambiente.
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light">
              Pesquisa e Desenvolvimento (P&amp;D) em microbiologia e parasitologia com foco no conceito{" "}
              <span className="text-secondary-glow font-medium">One Health</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-secondary-glow text-white font-semibold shadow-glow hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                Solicitar consultoria
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Conhecer serviços
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-white/50 text-xs uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-secondary-glow" />
                OECD 129 · 432
              </div>
              <div className="w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-secondary-glow" />
                ISO 21149
              </div>
              <div className="w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2">
                <Dna className="w-4 h-4 text-secondary-glow" />
                One Health
              </div>
            </div>
          </div>

          {/* RIGHT: Scientific image */}
          <div className="relative animate-scale-in lg:h-[600px]">
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary-glow/30 via-secondary-glow/20 to-transparent blur-3xl rounded-full animate-pulse-glow" />

            {/* Rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[110%] h-[110%] rounded-full border border-secondary-glow/15 animate-spin-slow" style={{ borderStyle: "dashed" }} />
              <div className="absolute w-[90%] h-[90%] rounded-full border border-primary-glow/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />
            </div>

            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/10 animate-float h-full">
              <img
                src={hero}
                alt="DNA helix e estruturas moleculares — biotecnologia"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218_80%_8%)]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <div
              className="absolute -left-4 top-12 glass-dark rounded-2xl px-4 py-3 shadow-elegant animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary-glow animate-pulse" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.15em] text-white/50 font-semibold">DNA Sequencing</div>
                  <div className="font-display font-bold text-white text-sm">Active</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 bottom-16 glass-dark rounded-2xl px-4 py-3 shadow-elegant animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3">
                <Microscope className="w-4 h-4 text-secondary-glow" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.15em] text-white/50 font-semibold">In vitro</div>
                  <div className="font-display font-bold text-white text-sm">OECD compliant</div>
                </div>
              </div>
            </div>

            <div
              className="absolute right-8 top-4 glass-dark rounded-xl px-3 py-2 shadow-card animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-[9px] uppercase tracking-[0.15em] text-secondary-glow font-bold">P&D · 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
