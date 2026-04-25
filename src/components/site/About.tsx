import lab from "@/assets/lab.png";
import { Microscope, Dna, Leaf, ArrowUpRight, Award, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="section-padding relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-secondary/5 blur-[120px] rounded-full animate-pulse-glow" />
            
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border border-white/40 aspect-[4/5] group">
              <img 
                src={lab} 
                alt="Laboratório L.A. Pharmatec" 
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Scientific Badge */}
              <div className="absolute top-8 left-8 p-5 glass rounded-3xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Infraestrutura</div>
                    <div className="text-primary font-display font-extrabold text-lg leading-none mt-1">High-Tech Lab</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credential Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-6 lg:-right-16 p-8 glass rounded-[3rem] shadow-2xl border-white/60 max-w-[320px]"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-glow-blue">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-primary font-display font-extrabold text-xl leading-none">Supera Parque</div>
                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary mt-1">Incubadora de Elite</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Localizados em um dos principais polos de inovação tecnológica do Brasil.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="eyebrow">Sobre a Startup</div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-[1.05] tracking-tighter">
                Ciência aplicada a <br />
                <span className="text-gradient">soluções globais</span>.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                Somos uma startup de biotecnologia dedicada a transformar a pesquisa de base em ativos farmacêuticos de alto valor agregado.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: Zap, 
                  title: "P&D de Alto Impacto", 
                  desc: "Desenvolvemos novos fármacos para desafios de saúde humana e veterinária.",
                  color: "bg-secondary/10 text-secondary"
                },
                { 
                  icon: ShieldCheck, 
                  title: "Excelência Científica", 
                  desc: "Liderada por doutores com vasta experiência em microbiologia e farmacologia.",
                  color: "bg-primary/10 text-primary"
                },
                { 
                  icon: Leaf, 
                  title: "One Health Vision", 
                  desc: "Soluções integradas que respeitam o equilíbrio entre humanos e ecossistemas.",
                  color: "bg-emerald-50 text-emerald-600"
                }
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 p-8 rounded-[2.5rem] bg-white border border-border/50 hover:shadow-premium hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#contato" className="btn-primary group">
                Conhecer Infraestrutura
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

