import leticia from "@/assets/leticia.png";
import amanda from "@/assets/amanda.png";
import { GraduationCap, Linkedin, Award, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Letícia de Almeida",
    role: "Biotecnologista",
    title: "Doutora em Biotecnologia",
    specialty: "Especialista em P&D de fármacos e microbiologia avançada.",
    img: leticia,
  },
  {
    name: "Amanda Ap. Seribelli",
    role: "Biomédica",
    title: "Doutora em Ciências",
    specialty: "Expert em mecanismos moleculares e segurança biológica.",
    img: amanda,
  },
];

const Founders = () => {
  return (
    <section id="fundadoras" className="section-padding relative bg-gradient-soft overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-glow/5 blur-[120px] rounded-full" />
      
      <div className="container-wide relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center mb-24">
          <div className="max-w-2xl space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Liderança científica
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-tight tracking-tighter"
            >
              Mentes que <br />
              <span className="text-gradient">movem a ciência</span>.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-xl leading-relaxed font-light"
          >
            Cientistas com formação de excelência liderando o futuro da farmacologia translacional sob o paradigma One Health.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {founders.map((f, i) => (
            <motion.article 
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative flex flex-col lg:flex-row items-center gap-8 p-8 rounded-[3rem] bg-white border border-border/60 shadow-premium hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full lg:w-48 xl:w-64 aspect-square rounded-[2.5rem] overflow-hidden shrink-0">
                <img 
                  src={f.img} 
                  alt={f.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-primary">{f.name}</h3>
                  <p className="text-secondary font-bold text-sm tracking-widest uppercase">{f.role}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.specialty}
                </p>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  <div className="flex items-center gap-3 text-xs font-semibold text-primary/70">
                    <GraduationCap className="w-4 h-4 text-secondary" />
                    {f.title}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-primary/70">
                    <Award className="w-4 h-4 text-secondary" />
                    Liderança Técnica
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border/40">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 flex items-center gap-2">
                    <BookOpen className="w-3 h-3" />
                    Currículo Lattes
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-10 rounded-[3rem] bg-white border border-border/60 shadow-premium"
          >
            <p className="text-muted-foreground mb-8 text-lg font-light">Consultoria especializada diretamente com quem faz a ciência.</p>
            <a 
              href="#contato" 
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl bg-primary text-white font-bold text-lg transition-all hover:bg-primary/90 hover:shadow-glow-blue hover:-translate-y-1 active:translate-y-0"
            >
              Agendar reunião técnica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founders;

