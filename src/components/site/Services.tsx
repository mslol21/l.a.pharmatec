import { Beaker, ShieldCheck, Microscope, FlaskConical, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import labImg from "@/assets/lab.png";
import healthImg from "@/assets/one-health.png";
import cellsImg from "@/assets/cells.png";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  image?: string;
  highlighted?: boolean;
  className?: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, image, highlighted, className, index }: ServiceCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`group relative rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-premium group ${className} ${
      highlighted ? "min-h-[400px]" : "min-h-[300px]"
    }`}
  >
    {/* Background Image for Highlighted Cards */}
    {image && (
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
      </div>
    )}

    {/* Background Pattern for Non-Image Cards */}
    {!image && (
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
    )}

    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
        image ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-primary/20 border border-primary/20 group-hover:bg-primary group-hover:border-transparent"
      }`}>
        <Icon className={`w-7 h-7 ${image ? "text-secondary-glow" : "text-primary group-hover:text-white"}`} />
      </div>

      <div className="space-y-3">
        <h3 className={`font-display font-bold leading-tight ${highlighted ? "text-3xl text-white" : "text-xl text-white"}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${highlighted ? "text-white/70" : "text-white/60"}`}>
          {description}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-glow">
          Saiba mais
        </span>
        <ArrowRight className="w-5 h-5 text-secondary-glow" />
      </div>
    </div>
  </motion.article>
);

const services = [
  {
    icon: FlaskConical,
    title: "P&D de Fármacos",
    description: "Desenvolvimento completo de novas moléculas, da descoberta ao protótipo final.",
    image: labImg,
    highlighted: true,
    className: "lg:col-span-2"
  },
  {
    icon: ShieldCheck,
    title: "Saúde Integrada",
    description: "Soluções estratégicas sob o paradigma One Health para um futuro sustentável.",
    image: healthImg,
    highlighted: true,
    className: "lg:col-span-1"
  },
  {
    icon: Beaker,
    title: "Ensaios de Segurança",
    description: "Testes pré-clínicos avançados e toxicidade in vitro com rigor internacional.",
    image: cellsImg,
    highlighted: true,
    className: "lg:col-span-1"
  },
  {
    icon: Lightbulb,
    title: "Consultoria Estratégica",
    description: "Apoio na captação de recursos e estruturação de projetos científicos de alto valor.",
    highlighted: false,
    className: "lg:col-span-1"
  },
  {
    icon: Microscope,
    title: "Análises Laboratoriais",
    description: "Controle microbiológico e bioprodutos seguindo padrões internacionais de qualidade.",
    highlighted: false,
    className: "lg:col-span-1"
  }
];

const Services = () => (
  <section id="servicos" className="section-padding relative bg-[hsl(222,84%,4%)] overflow-hidden">
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
          Traduzimos ciência complexa em resultados comerciais tangíveis. Nossos serviços são modulares e focados na agilidade regulatória e eficácia comprovada.
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
