import oneHealth from "@/assets/one-health.png";
import { Shield, Heart, TreePine, ArrowRight, Activity, Globe, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";

const OneHealth = () => {
  return (
    <section id="one-health" className="section-padding relative bg-white overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-molecules opacity-[0.4]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="eyebrow">Paradigma Global</div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter">
                Uma única saúde para um <br />
                <span className="text-gradient">mundo conectado</span>.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
                O conceito <span className="text-secondary font-bold">One Health</span> reconhece que a saúde humana, animal e ambiental são interdependentes. Nossa ciência atua no centro dessa integração.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Humana", color: "text-red-500", bg: "bg-red-50" },
                { icon: Shield, title: "Animal", color: "text-secondary", bg: "bg-secondary/10" },
                { icon: TreePine, title: "Ambiental", color: "text-emerald-600", bg: "bg-emerald-50" },
              ].map((item) => (
                <div key={item.title} className="group p-6 rounded-[2rem] bg-white border border-border/60 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary">{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-border/60">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-primary/80 font-medium">Abordagem Multidisciplinar</p>
                  <p className="text-sm text-muted-foreground">Integramos dados de microbiologia e ecologia para soluções robustas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-primary/80 font-medium">Impacto em Tempo Real</p>
                  <p className="text-sm text-muted-foreground">Desenvolvimento de fármacos focados em desafios de saúde pública emergentes.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contato" className="btn-primary group">
                Explorar Soluções Integradas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Decorative background orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-secondary/5 via-transparent to-transparent opacity-60" />
            
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border border-white/40 aspect-square group">
              <img 
                src={oneHealth} 
                alt="One Health Integration" 
                className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
              
              {/* Floating tech badge */}
              <div className="absolute top-10 right-10 p-6 glass rounded-3xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">R&D Methodology</div>
                    <div className="text-primary font-display font-extrabold text-lg leading-none mt-1">Holistic Science</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OneHealth;
