import { Building2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const credentials = [
  {
    icon: GraduationCap,
    label: "Liderança Científica",
    title: "Doutoras em Biotecnologia",
    desc: "Fundada e gerida por PhDs com vasta experiência acadêmica e industrial em P&D farmacológico.",
  },
  {
    icon: Building2,
    label: "Hub de Inovação",
    title: "Supera Parque Tecnológico",
    desc: "Incubada em um dos polos mais avançados do Brasil, focada em pesquisa de alto impacto.",
  },
];

const ScientificAuthority = () => (
  <section className="py-20 md:py-28 bg-gradient-deep relative overflow-hidden">
    {/* Top / Bottom dividers */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />

    {/* Ambient glows */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-secondary-glow/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary-glow/8 blur-[100px] rounded-full pointer-events-none" />

    <div className="container-wide relative">
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
        {credentials.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="group relative p-8 rounded-[2rem] border border-white/8 hover:border-white/15 transition-all duration-500 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            {/* Shimmer on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer pointer-events-none" />

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary-glow shrink-0 group-hover:scale-110 group-hover:bg-secondary/30 transition-all duration-500 shadow-glow-blue">
                <item.icon className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold tracking-[0.4em] text-secondary-glow/60 mb-1">{item.label}</div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/45 text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScientificAuthority;
