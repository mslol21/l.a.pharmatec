import { Pill, Droplets, Rocket, GraduationCap } from "lucide-react";
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
    desc: "Realização de testes microbiológicos, fototoxicidade e mentoria científica.",
    icon: Droplets,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Startups biotech",
    desc: "Cultivo e experimentação com bactérias, fungos e parasitos. Ensaios de morte celular e ativação do sistema imune inato.",
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
    <section id="publico" className="section-padding relative bg-[hsl(222,84%,18%)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-dark opacity-[0.2]" />
      
      <div className="container-wide relative">
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-glow text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            Mercados Atendidos
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-6"
          >
            Soluções sob medida <br />
            <span className="text-gradient-light">para cada desafio</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 mt-6 font-light"
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
              className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-white mb-4 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-secondary to-secondary-glow text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-glow-blue"
        >
          <div className="space-y-2">
            <h4 className="text-2xl font-bold italic">Seu setor não está listado?</h4>
            <p className="text-white/90 font-light text-lg">Entre em contato para discutirmos como nossa ciência pode te ajudar.</p>
          </div>
          <a 
            href="#contato" 
            className="px-10 py-5 rounded-2xl bg-white text-primary font-bold hover:bg-primary-glow hover:text-white transition-all duration-500 shrink-0"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
