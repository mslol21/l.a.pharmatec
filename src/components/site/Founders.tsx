import { GraduationCap, Linkedin, Award, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Letícia de Almeida",
    role: "Biotecnologista",
    title: "Doutora em Biotecnologia",
    specialty: "Especialista em P&D de fármacos e efeitos imunomodulatórios e parasitologia.",
    linkedin: "https://br.linkedin.com/in/let%C3%ADcia-de-almeida-83a620215",
    lattes: "http://lattes.cnpq.br/8773443748408311",
  },
  {
    name: "Amanda Ap. Seribelli",
    role: "Biomédica",
    title: "Doutora em Ciências",
    specialty: "Especialista em P&D de microbiologia molecular e patogênese microbiana.",
    linkedin: "https://br.linkedin.com/in/amanda-aparecida-seribelli-810890167",
    lattes: "http://lattes.cnpq.br/0044244140623154",
  },
];

const Founders = () => (
  <section id="fundadoras" className="section-padding relative bg-gradient-soft overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-[0.18]" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-glow/[0.04] blur-[140px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.03] blur-[100px] rounded-full pointer-events-none" />

    <div className="container-wide relative">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
        <div className="max-w-2xl space-y-5">
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
            className="text-4xl md:text-5xl lg:text-[5.5rem] font-extrabold text-primary leading-[1.02] tracking-[-0.05em]"
          >
            Mentes que <br />
            <span className="text-gradient">movem a ciência</span>.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-sm leading-relaxed font-light lg:pb-3"
        >
          Cientistas com formação de excelência liderando o futuro da farmacologia translacional sob o paradigma One Health.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-7 lg:gap-10">
        {founders.map((f, i) => (
          <motion.article
            key={f.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group card-premium rounded-[2.5rem] p-10"
          >
            {/* Top accent bar */}
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-secondary to-secondary-glow mb-8 group-hover:w-20 transition-all duration-500" />

            <div className="space-y-3 mb-6">
              <h3 className="font-display text-2xl lg:text-[1.75rem] font-extrabold text-primary leading-tight tracking-[-0.03em]">
                {f.name}
              </h3>
              <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-secondary">{f.role}</p>
            </div>

            <p className="text-muted-foreground text-[14px] leading-relaxed mb-7">
              {f.specialty}
            </p>

            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-3 text-[12.5px] font-medium text-primary/65">
                <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-secondary" />
                </div>
                {f.title}
              </div>
              <div className="flex items-center gap-3 text-[12.5px] font-medium text-primary/65">
                <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-secondary" />
                </div>
                Liderança Técnica
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border/50">
              <a
                href={f.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-primary/[0.05] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-400 hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={f.lattes}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-secondary transition-colors duration-300"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Currículo Lattes
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block p-10 rounded-[2.5rem] bg-white ring-1 ring-border/60"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <p className="text-muted-foreground mb-8 text-lg font-light">
            Consultoria especializada diretamente com quem faz a ciência.
          </p>
          <a href="#contato" className="btn-primary group">
            Agendar reunião técnica
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Founders;
