import { Beaker, ShieldCheck, Microscope, FlaskConical, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ImagePlaceholder, type PlaceholderVariant } from "./ImagePlaceholder";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  includes?: string[];
  /** placeholder variant to render in place of a real image */
  placeholderVariant?: PlaceholderVariant;
  highlighted?: boolean;
  className?: string;
  index: number;
}



const ServiceCard = ({ icon: Icon, title, description, includes, placeholderVariant, highlighted, className, index }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      layout
      className={`group relative rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-premium ${className} ${
        highlighted ? "min-h-[400px]" : "min-h-[300px]"
      }`}
    >
      {/* Background Image Placeholder for Service Cards */}
      {placeholderVariant && (
        <div className="absolute inset-0">
          {/* TODO: substituir ImagePlaceholder por <img src={...} className="w-full h-full object-cover opacity-40" /> */}
          <ImagePlaceholder variant={placeholderVariant} className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/30" />
        </div>
      )}

      {/* Background Pattern for Non-Image Cards */}
      {!placeholderVariant && (
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      )}

      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
          placeholderVariant ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-primary/20 border border-primary/20 group-hover:bg-primary group-hover:border-transparent"
        }`}>
          <Icon className={`w-7 h-7 ${placeholderVariant ? "text-secondary-glow" : "text-primary group-hover:text-white"}`} />
        </div>

        <div className="space-y-3">
          <h3 className={`font-display font-bold leading-tight ${highlighted ? "text-2xl text-white" : "text-xl text-white"}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${highlighted ? "text-white/80" : "text-white/60"}`}>
            {description}
          </p>
          
          <AnimatePresence>
            {isExpanded && includes && includes.length > 0 && (
              <motion.ul 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`overflow-hidden space-y-2 text-sm font-medium mt-4 ${highlighted ? "text-white/90" : "text-white/70"}`}
              >
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary-glow mt-0.5">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between w-full text-left focus:outline-none"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-glow">
            {isExpanded ? "Ver menos" : "Saiba mais"}
          </span>
          <ArrowRight className={`w-5 h-5 text-secondary-glow transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
        </button>
      </div>
    </motion.article>
  );
};

const services = [
  {
    icon: FlaskConical,
    title: "Ensaios celulares para avaliação de toxicidade e segurança",
    description: "Testes in vitro para determinar o impacto de compostos sobre a viabilidade e função celular",
    includes: [
      "Viabilidade celular/Citotoxicidade (LDH, fibroblastos 3T3, macrófagos primários, entre outras)",
      "Fototoxicidade (fibroblastos 3T3)",
      "Triagem de segurança de compostos"
    ],
    // TODO: image: labImg, // descomente e remova placeholderVariant quando tiver a foto real
    placeholderVariant: "services-lab" as PlaceholderVariant,
    highlighted: true,
    className: "lg:col-span-1"
  },
  {
    icon: Microscope,
    title: "Ensaios microbiológicos e parasitológicos para avaliação de eficácia e segurança",
    description: "Análise da atividade de compostos e caracterização de microrganismos e parasitas",
    includes: [
      "Atividade antimicrobiana (MIC, disco difusão)",
      "Detecção de limites microbiológicos (cosméticos, fármacos, alimentos)",
      "Atividade antiparasitária (promastigota de Leishmania, epimastigota de T. cruzi)",
      "Detecção e caracterização de bactérias aeróbias e anaeróbias, fungos"
    ],
    // TODO: image: cellsImg, // descomente e remova placeholderVariant quando tiver a foto real
    placeholderVariant: "services-cells" as PlaceholderVariant,
    highlighted: true,
    className: "lg:col-span-1"
  },
  {
    icon: ShieldCheck,
    title: "Mapeamento de respostas imunes em modelos inflamatórios e infecciosos",
    description: "Caracterização imunológica completa por análise de citocinas, expressão gênica e ensaios funcionais",
    includes: [
      "Perfil de citocinas e mediadores inflamatórios (ELISA)",
      "Análise de vias de sinalização e expressão gênica (Western Blot, RT-qPCR)",
      "Ensaios funcionais (Burst oxidativo – ROS, fagocitose)",
      "Ensaios de morte celular (LDH, Piroptose, caspase-1, gasdermina D)"
    ],
    // TODO: image: healthImg, // descomente e remova placeholderVariant quando tiver a foto real
    placeholderVariant: "services-health" as PlaceholderVariant,
    highlighted: true,
    className: "lg:col-span-1"
  }
];

const Services = () => (
  <section id="servicos" className="section-padding relative bg-[hsl(222,84%,18%)] overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute inset-0 bg-grid-dark opacity-20" />
    <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary-glow/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-secondary-glow/5 blur-[100px] rounded-full" />

    <div className="container-wide relative">
      <div className="max-w-3xl mb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-glow text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          <Zap className="w-3 h-3" />
          Serviços de Excelência
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
        >
          Soluções científicas que <br />
          <span className="text-gradient-light">impulsionam seu negócio</span>.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/60 leading-relaxed font-light"
        >
          Plataformas integradas para análise de respostas celulares, avaliação de toxicidade e estudos microbiológicos e parasitológicos
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} index={i} />
        ))}
        
        {/* Contact Teaser Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-1 p-8 rounded-[2.5rem] bg-gradient-to-br from-secondary/20 to-primary/20 border border-white/5 flex flex-col justify-center items-center text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-full bg-secondary-glow/20 flex items-center justify-center animate-pulse">
            <Lightbulb className="w-8 h-8 text-secondary-glow" />
          </div>
          <h3 className="text-2xl font-bold text-white">Projeto Especial?</h3>
          <p className="text-white/60 text-sm">Desenvolvemos protocolos customizados para necessidades específicas de P&D.</p>
          <a 
            href="#contato" 
            className="w-full btn-premium bg-white text-primary hover:bg-secondary hover:text-white transition-all duration-500"
          >
            Falar com Especialista
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Services;
