import hero from "@/assets/hero-molecules.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={hero} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218_75%_10%)] via-[hsl(218_75%_10%/0.85)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218_75%_10%)] via-transparent to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary-glow/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary-glow/20 blur-[120px] animate-pulse-glow" />

      <div className="container-x relative z-10 px-6 md:px-10">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs font-semibold uppercase tracking-[0.2em] text-secondary-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Startup biotech · Supera Parque Tecnológico</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white">
            Inovação em fármacos para{" "}
            <span className="text-gradient-light">saúde humana e animal</span>,
            conectando ciência, tecnologia e meio ambiente.
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
            Pesquisa e Desenvolvimento (P&amp;D) em microbiologia e parasitologia com foco no conceito{" "}
            <span className="text-secondary-glow font-medium">One Health</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#contato" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-secondary-glow text-white font-semibold shadow-glow hover:shadow-elegant transition-all hover:-translate-y-1">
              Solicitar consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-dark text-white font-semibold hover:bg-white/10 transition-all">
              Conhecer serviços
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mt-16 max-w-3xl">
            {[
              { v: "P&D", l: "Microbiologia" },
              { v: "OECD", l: "129 · 432" },
              { v: "ISO", l: "21149" },
              { v: "One Health", l: "Saúde integrada" },
            ].map((s) => (
              <div key={s.v} className="bg-[hsl(218_75%_10%)]/80 backdrop-blur-md p-5">
                <div className="font-display font-bold text-xl md:text-2xl text-gradient-light">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/50 mt-1">{s.l}</div>
              </div>
            ))}
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
