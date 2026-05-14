import { ImagePlaceholder } from "./ImagePlaceholder";
import { Microscope, Dna, Leaf, ArrowUpRight, Award, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="section-padding relative bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.2]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />

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
              {/* TODO: inserir foto real da sede ou laboratório */}
              <ImagePlaceholder
                variant="about"
                className="w-full h-full"
              />
              

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
              <div className="eyebrow">Sobre a L.A. Pharmatec</div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-[1.05] tracking-tighter">
                Ciência e <br />
                <span className="text-gradient">Inovação.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: ShieldCheck, 
                  title: "Nossa História", 
                  desc: "Somos uma startup com ampla experiência em Pesquisa e Desenvolvimento (P&D) voltada ao desenvolvimento de novos fármacos, atuando de forma pioneira nas áreas de microbiologia e parasitologia.",
                  color: "bg-primary/10 text-primary"
                },
                { 
                  icon: Leaf, 
                  title: "Missão e Objetivos", 
                  desc: "Atuamos na conversão direta do conhecimento científico em soluções terapêuticas inovadoras para doenças infecciosas e inflamatórias, sempre fundamentados na interconexão humano-animal-meio ambiente através do conceito One Health.",
                  color: "bg-secondary/10 text-secondary"
                }
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 p-10 rounded-[2.5rem] bg-white border border-white/60 shadow-premium hover:shadow-glow-blue hover:-translate-y-2 transition-all duration-700">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display font-extrabold text-2xl text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#contato" className="btn-primary group">
                Solicitar Consultoria
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

