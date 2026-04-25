import cells from "@/assets/cells.png";
import { Dog, Sprout, Flower2, ArrowRight, FlaskConical, Beaker, Zap, Search } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  icon: any;
  tag: string;
  title: string;
  description: string;
  status: "active" | "ideation";
  isMain?: boolean;
}

const ProjectCard = ({ icon: Icon, tag, title, description, status, isMain }: ProjectCardProps) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative p-8 rounded-[2.5rem] transition-all duration-700 overflow-hidden border ${
      isMain 
        ? "bg-gradient-hero border-white/10 shadow-glow text-white" 
        : "bg-white border-border/50 shadow-premium hover:border-primary/20"
    }`}
  >
    {isMain && (
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-glow rounded-full blur-[100px] animate-pulse-glow" />
      </div>
    )}

    <div className="relative z-10 flex flex-col h-full space-y-6">
      <div className="flex items-center justify-between">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
          isMain ? "bg-white/10 border border-white/20" : "bg-primary/5 border border-primary/10 group-hover:bg-primary group-hover:text-white"
        }`}>
          <Icon className={`w-7 h-7 ${isMain ? "text-secondary-glow" : "text-primary group-hover:text-white"}`} strokeWidth={1.5} />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
          isMain ? "bg-white/10 text-white" : "bg-muted text-muted-foreground"
        }`}>
          {tag}
        </span>
      </div>

      <div className="space-y-4">
        <h3 className={`font-display font-bold leading-tight ${isMain ? "text-3xl md:text-4xl" : "text-xl"}`}>
          {title}
        </h3>
        <p className={`leading-relaxed ${isMain ? "text-white/80 text-lg" : "text-sm text-muted-foreground"}`}>
          {description}
        </p>
      </div>

      <div className={`flex items-center gap-3 pt-6 mt-auto border-t ${isMain ? "border-white/10" : "border-border/50"}`}>
        <div className={`w-2 h-2 rounded-full animate-pulse ${status === "active" ? "bg-secondary" : "bg-amber-400"}`} />
        <span className={`text-[10px] font-bold uppercase tracking-widest ${isMain ? "text-white/60" : "text-muted-foreground"}`}>
          {status === "active" ? "Desenvolvimento Ativo" : "Fase de Ideação"}
        </span>
      </div>
    </div>
  </motion.article>
);

const Research = () => {
  return (
    <section id="pesquisa" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none">
        <img src={cells} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN: Intro (Sticky on Desktop) */}
          <div className="lg:sticky lg:top-40 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="eyebrow"
              >
                Inovação Científica
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                P&D que define o <br />
                <span className="text-gradient">padrão global</span>.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Transformando hipóteses em soluções de alto impacto para saúde humana, animal e ambiental.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 border-t border-border pt-10">
              <div className="flex items-center gap-3 hover:text-secondary transition-colors cursor-default">
                <span className="w-3 h-3 rounded-full bg-secondary" /> Projetos em Desenvolvimento
              </div>
              <div className="flex items-center gap-3 hover:text-amber-500 transition-colors cursor-default">
                <span className="w-3 h-3 rounded-full bg-amber-400" /> Pipelines em Ideação
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <a href="#contato" className="btn-primary w-full group">
                Explorar Parcerias
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">Acompanhe nosso pipeline 2024</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Project Cards */}
          <div className="space-y-8">
            {/* Main Highlight */}
            <ProjectCard 
              icon={Dog}
              tag="Veterinária · Core"
              title="Tratamento disruptivo para Leishmaniose Visceral Canina"
              description="Pipeline avançado de um novo fármaco antiparasitário focado em eliminar a carga parasitária com toxicidade mínima para o animal, em validação in vivo."
              status="active"
              isMain
            />

            {/* Sub Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <ProjectCard 
                icon={Sprout}
                tag="Agro · Bio"
                title="Combate à Murcha da Cana"
                description="Bioproduto inovador para proteção de cultivos em larga escala."
                status="active"
              />
              <ProjectCard 
                icon={Beaker}
                tag="Validação"
                title="Screening Microbiológico"
                description="Identificação rápida de alvos para patógenos emergentes."
                status="active"
              />
              <ProjectCard 
                icon={Flower2}
                tag="Derma"
                title="Dermatite Atópica"
                description="Formulações fitoterápicas com propriedades anti-inflamatórias."
                status="ideation"
              />
              <ProjectCard 
                icon={Search}
                tag="Future"
                title="Drug Delivery"
                description="Sistemas inteligentes para controle de biofilmes bacterianos."
                status="ideation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
