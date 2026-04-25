import { Beaker, ShieldCheck, Microscope, FlaskConical, Search, Lightbulb, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  highlighted?: boolean;
  tag?: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, highlighted, tag, index }: ServiceCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative p-10 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-2 overflow-hidden border ${
      highlighted 
        ? "bg-gradient-deep border-white/10 shadow-glow text-white md:col-span-2 lg:col-span-1" 
        : "bg-white border-border/50 shadow-premium hover:border-primary/20"
    }`}
  >
    <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[100px] transition-opacity duration-700 opacity-20 ${
      highlighted ? "bg-secondary-glow" : "bg-primary group-hover:opacity-40"
    }`} />
    
    <div className="relative z-10 flex flex-col h-full space-y-8">
      <div className="flex items-start justify-between">
        <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center transition-all duration-700 ${
          highlighted 
            ? "bg-white/10 border border-white/20 shadow-glow" 
            : "bg-primary/5 border border-primary/10 group-hover:bg-primary group-hover:border-transparent group-hover:shadow-glow-blue"
        }`}>
          <Icon className={`w-8 h-8 transition-colors duration-500 ${
            highlighted ? "text-secondary-glow" : "text-primary group-hover:text-white"
          }`} strokeWidth={1.5} />
        </div>
        {tag && (
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full ${
            highlighted ? "bg-white/10 text-secondary-glow border border-white/5" : "bg-secondary/5 text-secondary border border-secondary/10"
          }`}>
            {tag}
          </span>
        )}
      </div>

      <div className="space-y-4">
        <h3 className={`font-display font-bold text-2xl leading-tight tracking-tight ${highlighted ? "text-white" : "text-primary"}`}>
          {title}
        </h3>
        <p className={`text-[15px] leading-relaxed font-light ${highlighted ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      </div>

      <div className="pt-6 mt-auto flex items-center justify-between border-t border-current/5">
        <span className={`text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 ${
          highlighted ? "text-secondary-glow" : "text-primary"
        }`}>
          Consultar Viabilidade
        </span>
        <div className={`p-2.5 rounded-full transition-all duration-500 ${
          highlighted ? "bg-white/10" : "bg-muted group-hover:bg-primary group-hover:text-white"
        }`}>
          <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  </motion.article>
);

const servicesArr = [
  {
    icon: Beaker,
    title: "Bioensaios & Eficácia",
    description: "Screening detalhado de compostos com análise estatística robusta e protocolos de excelência laboratorial.",
    tag: "Priority Service",
    highlighted: true
  },
  {
    icon: ShieldCheck,
    title: "Segurança & In Vitro",
    description: "Métodos alternativos de toxicidade alinhados com as diretrizes OECD 129 e 432 para agilidade regulatória.",
    tag: "Compliance",
    highlighted: true
  },
  {
    icon: Microscope,
    title: "P&D Integrado",
    description: "Terceirização estratégica de pipelines de desenvolvimento biotecnológico para startups de base tecnológica.",
    tag: "High Value",
    highlighted: true
  },
  {
    icon: FlaskConical,
    title: "Análise Microbiológica",
    description: "Controle rigoroso de limites microbianos e bioprodutos seguindo padrões de qualidade ISO internacionais.",
    tag: "Standard ISO"
  },
  {
    icon: Search,
    title: "Estudos de Mecanismo",
    description: "Identificação granular de vias de sinalização e mecanismos de morte celular por proteômica aplicada.",
    tag: "Deep Science"
  },
  {
    icon: Lightbulb,
    title: "Estratégia Científica",
    description: "Mentoria técnica para estruturação de projetos SBIR/STTR e captação de recursos governamentais.",
    tag: "BizDev"
  }
];

const Services = () => (
  <section id="servicos" className="section-padding relative bg-gradient-soft overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-radial opacity-30 pointer-events-none" />

    <div className="container-wide relative">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
        <div className="max-w-2xl space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Technical Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[5rem] font-bold leading-[1] tracking-tight"
          >
            Capacidade laboratorial <br />
            <span className="text-gradient">sem fronteiras</span>.
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed font-light pb-2"
        >
          Oferecemos soluções modulares que se adaptam à velocidade exigida pelo mercado, sem comprometer o rigor científico.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {servicesArr.map((service, i) => (
          <ServiceCard key={service.title} {...service} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
