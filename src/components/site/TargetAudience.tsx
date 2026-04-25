import { Pill, Droplets, Rocket, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "Indústrias farmacêuticas",
    desc: "Validação de fármacos, ensaios de segurança e suporte em P&D regulatório.",
    icon: Pill,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Empresas de cosméticos",
    desc: "Desenvolvimento de formulações, testes microbiológicos e eficácia dermatológica.",
    icon: Droplets,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Startups biotech",
    desc: "Aceleração de pipelines, infraestrutura laboratorial e mentoria científica.",
    icon: Rocket,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Pesquisa acadêmica",
    desc: "Parcerias para ensaios complexos, suporte técnico e validação de hipóteses.",
    icon: GraduationCap,
    color: "bg-amber-500/10 text-amber-500",
  },
];

const TargetAudience = () => {
  return (
    <section id="publico" className="section-padding relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-molecules opacity-[0.2]" />
      
      <div className="container-wide relative">
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Mercados Atendidos
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mt-6"
          >
            Soluções sob medida <br />
            <span className="text-gradient">para cada desafio</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mt-6 font-light"
          >
            Nossa infraestrutura e expertise científica estão prontas para atender aos mais rigorosos padrões de diversos setores da saúde e tecnologia.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-border/50 shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-primary mb-4 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Saber mais
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[3rem] bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-glow-blue"
        >
          <div className="space-y-2">
            <h4 className="text-2xl font-bold italic">Seu setor não está listado?</h4>
            <p className="text-white/70 font-light text-lg">Entre em contato para discutirmos como nossa ciência pode te ajudar.</p>
          </div>
          <a 
            href="#contato" 
            className="px-10 py-5 rounded-2xl bg-white text-primary font-bold hover:bg-secondary hover:text-white transition-all duration-500 shrink-0"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
