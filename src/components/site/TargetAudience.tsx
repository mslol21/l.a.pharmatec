import { Pill, Droplets, Rocket, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "Indústrias farmacêuticas",
    desc: "Validação de fármacos, ensaios de segurança e suporte em P&D regulatório.",
    icon: Pill,
    accent: "text-blue-500",
    iconBg: "bg-blue-50 group-hover:bg-blue-100",
    border: "group-hover:border-blue-100",
    glow: "group-hover:shadow-[0_0_32px_-8px_rgba(59,130,246,0.20)]",
  },
  {
    title: "Empresas de cosméticos",
    desc: "Realização de testes microbiológicos, fototoxicidade e mentoria científica.",
    icon: Droplets,
    accent: "text-emerald-600",
    iconBg: "bg-emerald-50 group-hover:bg-emerald-100",
    border: "group-hover:border-emerald-100",
    glow: "group-hover:shadow-[0_0_32px_-8px_rgba(16,185,129,0.18)]",
  },
  {
    title: "Startups biotech",
    desc: "Cultivo e experimentação com bactérias, fungos e parasitos. Ensaios de morte celular e ativação do sistema imune inato.",
    icon: Rocket,
    accent: "text-violet-600",
    iconBg: "bg-violet-50 group-hover:bg-violet-100",
    border: "group-hover:border-violet-100",
    glow: "group-hover:shadow-[0_0_32px_-8px_rgba(124,58,237,0.18)]",
  },
  {
    title: "Pesquisa acadêmica",
    desc: "Parcerias para ensaios complexos, suporte técnico e validação de hipóteses.",
    icon: GraduationCap,
    accent: "text-amber-600",
    iconBg: "bg-amber-50 group-hover:bg-amber-100",
    border: "group-hover:border-amber-100",
    glow: "group-hover:shadow-[0_0_32px_-8px_rgba(245,158,11,0.18)]",
  },
];

const TargetAudience = () => (
  <section id="publico" className="section-padding relative bg-[hsl(222,84%,18%)] overflow-hidden">
    <div className="absolute inset-0 bg-grid-dark opacity-[0.15] pointer-events-none" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-glow/8 blur-[160px] rounded-full pointer-events-none" />

    <div className="container-wide relative">
      <div className="max-w-3xl mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-glow text-[10px] font-bold uppercase tracking-widest mb-5"
        >
          Mercados Atendidos
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-[5.5rem] font-extrabold text-white leading-[1.02] tracking-[-0.05em] mb-6"
        >
          Soluções sob medida{" "}<br />
          <span className="text-gradient-light">para cada desafio</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/50 font-light leading-relaxed"
        >
          Nossa infraestrutura e expertise científica estão prontas para atender aos mais rigorosos padrões de diversos setores da saúde e tecnologia.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {audiences.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09, duration: 0.6 }}
            className={`group relative p-7 rounded-[2rem] bg-white/[0.05] border border-white/[0.08] ${item.border} ${item.glow} hover:-translate-y-2 transition-all duration-500 cursor-default overflow-hidden`}
          >
            {/* Subtle top shine */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
              <item.icon className={`w-7 h-7 ${item.accent}`} />
            </div>
            <h3 className="font-display font-bold text-[1.05rem] text-white mb-3 leading-snug">{item.title}</h3>
            <p className="text-white/45 text-[13px] leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8"
        style={{
          background: "linear-gradient(135deg, hsl(212 92% 36%) 0%, hsl(212 90% 48%) 100%)",
          boxShadow: "var(--shadow-glow-blue), var(--shadow-md)"
        }}
      >
        <div className="space-y-1.5">
          <h4 className="text-[1.35rem] font-bold text-white italic">Seu setor não está listado?</h4>
          <p className="text-white/80 font-light text-base">Entre em contato para discutirmos como nossa ciência pode te ajudar.</p>
        </div>
        <a
          href="#contato"
          className="px-9 py-4.5 rounded-[1.25rem] bg-white text-primary font-bold text-sm uppercase tracking-[0.12em] hover:-translate-y-1 transition-all duration-400 shrink-0"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          Falar com especialista
        </a>
      </motion.div>
    </div>
  </section>
);

export default TargetAudience;
