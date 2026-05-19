// ImagePlaceholder import removed; using real images
import { ArrowRight, Microscope, Dna } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top right, hsl(215 75% 36%) 0%, hsl(218 70% 20%) 100%)",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('@/assets/pattern.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-secondary-glow/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-primary-glow/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container-wide relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-white/10 text-secondary-glow text-xs font-bold uppercase tracking-widest mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-glow"></span>
              </span>
              L.A. Pharmatec · Excelência em Biotecnologia
            </motion.div>

            <h1 className="font-display font-extrabold text-white leading-[1.1] tracking-tight text-4xl md:text-5xl xl:text-6xl mb-8">
              Inovação científica para <br />
              <span className="text-gradient-light">saúde humana, animal e ambiental</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl font-light">
              Especialistas em <span className="text-white font-medium">microbiologia, parasitologia e desenvolvimento de soluções terapêuticas</span> dentro do conceito One Health.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contato"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-secondary text-white font-bold transition-all duration-500 hover:bg-secondary-glow hover:shadow-glow hover:-translate-y-1 active:translate-y-0"
              >
                Solicitar consultoria
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>


          </motion.div>

          {/* RIGHT: Visual Impact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative lg:w-[80%] lg:ml-auto"
          >
            {/* Visual background elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 blur-3xl rounded-[3rem] opacity-50" />
            
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-premium aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square group">
              <img src="/hero.png" alt="L.A. Pharmatec Laboratório" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Data Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-dark rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-secondary-glow font-bold">Research Pipeline</div>
                  <div className="text-[10px] text-white/40">v2.4.0</div>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-gradient-to-r from-secondary to-secondary-glow"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Dna className="w-4 h-4 text-secondary-glow" />
                    <span className="text-xs text-white/80 font-medium">Cultura de células</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                    <Microscope className="w-4 h-4 text-secondary-glow" />
                    <span className="text-xs text-white/80 font-medium">Microbiologia/Parasitologia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-glow/20 blur-2xl rounded-full animate-float" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary-glow/10 blur-3xl rounded-full animate-float" style={{ animationDelay: "2s" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

