import { Heart, PawPrint, Trees, ArrowRight } from "lucide-react";
import pattern from "@/assets/one-health.png";
import { motion } from "framer-motion";

const pillars = [
  { 
    Icon: Heart, 
    title: "Saúde Humana", 
    desc: "Desenvolvimento de terapias inovadoras para o controle de doenças infecciosas e inflamatórias.", 
    color: "from-primary-glow to-primary" 
  },
  { 
    Icon: PawPrint, 
    title: "Saúde Animal", 
    desc: "Aceleração de soluções em saúde veterinária com base científica sólida e ensaios validados.", 
    color: "from-accent to-primary" 
  },
  { 
    Icon: Trees, 
    title: "Saúde Ambiental", 
    desc: "Bioprodutos integrados que respeitam o ecossistema, fechando o ciclo de saúde global.", 
    color: "from-secondary-glow to-secondary" 
  },
];

const OneHealth = () => {
  return (
    <section id="one-health" className="section-padding relative overflow-hidden bg-gradient-deep text-white">
      <div className="absolute inset-0 opacity-20 hover:opacity-25 transition-opacity duration-[3s]">
        <img src={pattern} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95" />
      <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-secondary-glow/15 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      <div className="container-wide relative">
        <div className="max-w-4xl mb-24 space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10 text-[11px] font-bold uppercase tracking-[0.3em] text-secondary-glow"
          >
            <span className="w-10 h-[1px] bg-secondary-glow/50" />
            Integrative Paradigms
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[0.95] text-white"
          >
            Uma só saúde, <br />
            <span className="text-gradient-light">um só futuro</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl leading-relaxed font-light"
          >
            O conceito <strong className="text-white">One Health</strong> reconhece a interdependência vital entre humanos, animais e ecossistemas. Atuamos na interseção dessas dimensões para garantir a resiliência da vida.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map(({ Icon, title, desc, color }, i) => (
            <motion.article 
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              whileHover={{ y: -15, transition: { duration: 0.4 } }}
              className="group relative p-10 rounded-[2.5rem] glass-dark hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
              
              <div className="relative space-y-8 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${color} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">0{i + 1}</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">{title}</h3>
                  <p className="text-white/60 leading-relaxed text-[15px] font-light">{desc}</p>
                </div>

                <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 text-secondary-glow text-[11px] font-bold uppercase tracking-widest">
                    Explorar vertente <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex justify-center"
        >
          <a 
            href="#contato" 
            className="btn-glow flex items-center gap-3 px-12 py-5 text-lg font-bold"
          >
            Saber mais sobre One Health
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OneHealth;
