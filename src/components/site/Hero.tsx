import hero from "@/assets/hero.png";
import { ArrowRight, Sparkles, FlaskConical, Microscope, Dna } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[105vh] flex items-center pt-32 pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(218 80% 8%) 0%, hsl(215 75% 12%) 40%, hsl(212 70% 18%) 75%, hsl(162 70% 18%) 100%)",
      }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-primary-glow/15 blur-[160px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[900px] h-[900px] rounded-full bg-secondary-glow/15 blur-[180px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />

      <div className="container-wide relative z-10 px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          {/* LEFT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark text-[11px] font-bold uppercase tracking-[0.25em] text-secondary-glow">
              <Sparkles className="w-4 h-4" />
              <span>Startup biotech premium · Supera Parque</span>
            </div>

            <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              Moldando o futuro da <br />
              <span className="text-gradient-light">saúde integrada</span>.
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light">
              Pesquisa e Desenvolvimento (P&amp;D) de alto nível em microbiologia e parasitologia sob o paradigma global <span className="text-secondary-glow font-medium italic">One Health</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-secondary to-secondary-glow text-white font-bold text-lg shadow-glow hover:shadow-premium hover:-translate-y-1 active:scale-95 transition-all duration-500"
              >
                Solicitar consultoria
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/30 active:scale-95 transition-all duration-500"
              >
                Portfólio técnico
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-8 pt-10 text-white/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">
              <div className="flex items-center gap-3 group cursor-default">
                <FlaskConical className="w-5 h-5 text-secondary-glow group-hover:scale-110 transition-transform" />
                OECD Certified
              </div>
              <div className="w-px h-5 bg-white/10" />
              <div className="flex items-center gap-3 group cursor-default">
                <Microscope className="w-5 h-5 text-secondary-glow group-hover:scale-110 transition-transform" />
                ISO Standards
              </div>
              <div className="w-px h-5 bg-white/10" />
              <div className="flex items-center gap-3 group cursor-default">
                <Dna className="w-5 h-5 text-secondary-glow group-hover:scale-110 transition-transform" />
                One Health Lab
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Scientific image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Outer decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125">
              <div className="absolute w-full h-full rounded-full border border-secondary-glow/10 animate-spin-slow" style={{ borderStyle: "dashed" }} />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-primary-glow/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "50s" }} />
            </div>

            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-elegant border border-white/10 animate-float aspect-square sm:aspect-video lg:aspect-square">
              <img
                src={hero}
                alt="Biotecnologia avançada"
                width={1024}
                height={1024}
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218_80%_8%)]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-20 z-20 glass-dark rounded-3xl px-6 py-4 shadow-elegant hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-secondary-glow animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Molecular R&D</div>
                  <div className="font-display font-bold text-white text-base leading-none mt-1">Advanced Pipeline</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-20 z-20 glass-dark rounded-3xl px-6 py-4 shadow-elegant hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <Microscope className="w-6 h-6 text-secondary-glow" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Standard</div>
                  <div className="font-display font-bold text-white text-base leading-none mt-1">OECD 129 Compliant</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
