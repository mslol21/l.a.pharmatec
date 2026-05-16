import { Leaf, ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: ShieldCheck,
    title: "Nossa História",
    desc: "Somos uma startup com ampla experiência em Pesquisa e Desenvolvimento (P&D) voltada ao desenvolvimento de novos fármacos, atuando de forma pioneira nas áreas de microbiologia e parasitologia.",
    color: "bg-primary/8 text-primary",
    ring: "group-hover:ring-primary/15",
  },
  {
    icon: Leaf,
    title: "Missão e Objetivos",
    desc: "Atuamos na conversão direta do conhecimento científico em soluções terapêuticas inovadoras para doenças infecciosas e inflamatórias, sempre fundamentados na interconexão humano-animal-meio ambiente através do conceito One Health.",
    color: "bg-secondary/8 text-secondary",
    ring: "group-hover:ring-secondary/15",
  },
];

const About = () => (
  <section id="sobre" className="section-padding relative bg-gradient-to-b from-white via-white to-primary/[0.03] overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-[0.18]" />
    <div className="absolute top-0 right-0 w-2/5 h-3/4 bg-gradient-to-bl from-secondary/[0.04] to-transparent pointer-events-none" />

    <div className="container-wide relative">
      <div className="grid lg:grid-cols-[1fr_1.25fr] gap-16 lg:gap-36 items-center">

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center lg:items-end"
        >
          {/* Ambient glow */}
          <div className="absolute -inset-12 bg-secondary/[0.06] blur-[100px] rounded-full animate-pulse-glow pointer-events-none" />

          {/* Main image frame */}
          <div
            className="relative w-full rounded-[3.5rem] overflow-hidden aspect-[4/3] lg:aspect-[16/10] group z-0"
            style={{ boxShadow: "var(--shadow-deep), 0 0 0 1px rgba(255,255,255,0.5)" }}
          >
            <img src="/sobre.png" alt="Sobre a L.A. Pharmatec" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Credential card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="relative -mt-16 lg:-mt-20 lg:mr-8 p-7 glass rounded-[2.5rem] max-w-[290px] z-10"
            style={{ boxShadow: "var(--shadow-deep)" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0" style={{ boxShadow: "var(--shadow-glow-blue)" }}>
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-primary font-display font-extrabold text-[17px] leading-tight">Supera Parque</div>
                <div className="text-[9px] uppercase font-bold tracking-[0.3em] text-secondary mt-0.5">Incubadora de Elite</div>
              </div>
            </div>
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              Um dos principais polos de inovação tecnológica do Brasil.
            </p>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="space-y-5">
            <div className="eyebrow">Sobre a L.A. Pharmatec</div>
            <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] font-extrabold text-primary leading-[1.02] tracking-[-0.05em]">
              Ciência e{" "}
              <span className="text-gradient">Inovação.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                className={`group flex gap-5 p-8 rounded-[2rem] bg-white ring-1 ring-border/60 card-premium cursor-default`}
              >
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 ring-2 ring-transparent ${item.ring} transition-shadow`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-[1.15rem] text-primary leading-snug">{item.title}</h3>
                  <p className="text-muted-foreground text-[13.5px] leading-relaxed font-normal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2">
            <a href="#contato" className="btn-primary group">
              Solicitar Consultoria
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
