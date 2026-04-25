import lab from "@/assets/lab.png";
import { Microscope, Dna, Leaf, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="section-padding relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-radial opacity-20" />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-6 bg-gradient-hero opacity-[0.08] blur-3xl rounded-[4rem]" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-premium border border-border/50 aspect-[4/5] sm:aspect-[1.2/1] lg:aspect-[4/5]">
              <img src={lab} alt="Laboratório moderno de biotecnologia" loading="lazy" width={1600} height={2000} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 md:-right-12 bg-white rounded-[2rem] p-7 shadow-elegant border border-border/50 max-w-[260px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Dna className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold">Localização</div>
                  <div className="font-display font-bold text-base text-primary">Supera Parque</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2 space-y-12"
          >
            <div className="space-y-6">
              <span className="eyebrow">Sobre a L.A. Pharmatec</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05]">
                Ciência aplicada a <br />
                <span className="text-gradient">soluções globais</span>.
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                Somos uma startup de biotecnologia incubada no prestigiado <strong className="text-primary font-bold">Supera Parque Tecnológico</strong>, dedicada à excelência em Pesquisa e Desenvolvimento.
              </p>
              <p>
                Trabalhamos na ponte entre o conhecimento acadêmico e o mercado, desenvolvendo terapias inovadoras sob o paradigma <span className="text-secondary font-bold italic">One Health</span> para doenças complexas.
              </p>
            </div>

            <div className="grid gap-4 pt-6">
              {[
                { Icon: Microscope, title: "Pesquisa de Base", desc: "Microbiologia e parasitologia avançada." },
                { Icon: Dna, title: "Fármacos Translacionais", desc: "Da bancada à validação clínica acelerada." },
                { Icon: Leaf, title: "Visão Sustentável", desc: "Compromisso com o meio ambiente e saúde global." },
              ].map(({ Icon, title, desc }) => (
                <motion.div 
                  key={title}
                  whileHover={{ x: 10 }}
                  className="group flex gap-5 p-6 rounded-[1.5rem] bg-white border border-border/60 hover:border-primary/20 hover:shadow-premium transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <div className="font-display font-bold text-[17px] text-primary">{title}</div>
                    <div className="text-sm text-muted-foreground opacity-80">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 px-2">
              <a 
                href="#contato" 
                className="btn-primary group"
              >
                Conhecer nossa infraestrutura
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
