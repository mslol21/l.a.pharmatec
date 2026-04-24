import { Beaker, Bug, ShieldCheck, Sun, Droplets, Activity, Layers, Lightbulb, ArrowUpRight } from "lucide-react";

const services = [
  { Icon: Beaker, title: "Cultivo de microrganismos", desc: "Manipulação e expansão de cepas em ambiente controlado.", tag: "Lab" },
  { Icon: Bug, title: "Ensaios antimicrobianos", desc: "MIC e disco difusão para avaliação de eficácia.", tag: "MIC" },
  { Icon: ShieldCheck, title: "Toxicidade celular", desc: "Ensaios in vitro segundo protocolo internacional.", tag: "OECD 129" },
  { Icon: Sun, title: "Fototoxicidade", desc: "Avaliação conforme protocolo OECD 432.", tag: "OECD 432" },
  { Icon: Droplets, title: "Limites microbiológicos", desc: "Análises em cosméticos pela ISO 21149.", tag: "ISO 21149" },
  { Icon: Activity, title: "Imunidade & morte celular", desc: "Ativação do sistema imune e mecanismos celulares.", tag: "Imuno" },
  { Icon: Layers, title: "Western Blot", desc: "Detecção e quantificação de proteínas específicas.", tag: "Proteômica" },
  { Icon: Lightbulb, title: "Consultoria científica", desc: "Suporte técnico estratégico para projetos de P&D.", tag: "Strategy" },
];

const Services = () => {
  return (
    <section id="servicos" className="section relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-5">
            <span className="eyebrow">Capacidade técnica</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Serviços laboratoriais <span className="text-gradient">de ponta a ponta</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Do ensaio à interpretação científica — um portfólio completo alinhado com padrões internacionais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ Icon, title, desc, tag }) => (
            <article
              key={title}
              className="group relative p-7 rounded-3xl bg-gradient-card border border-border/60 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-glow to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary-glow to-secondary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />

              <div className="relative space-y-5">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:border-transparent transition-all">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-secondary/10 text-secondary">{tag}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base leading-tight">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
