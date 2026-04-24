import { Beaker, Bug, ShieldCheck, Sun, Droplets, Activity, Layers, Lightbulb } from "lucide-react";

const services = [
  { Icon: Beaker, title: "Cultivo de microrganismos", desc: "Manipulação e expansão de cepas em ambiente controlado." },
  { Icon: Bug, title: "Ensaios antimicrobianos", desc: "MIC e disco difusão para avaliação de eficácia." },
  { Icon: ShieldCheck, title: "Toxicidade celular", desc: "Ensaios in vitro segundo OECD 129." },
  { Icon: Sun, title: "Fototoxicidade", desc: "Avaliação conforme protocolo OECD 432." },
  { Icon: Droplets, title: "Limites microbiológicos", desc: "Análises em cosméticos pela ISO 21149." },
  { Icon: Activity, title: "Imunidade & morte celular", desc: "Ativação do sistema imune e mecanismos celulares." },
  { Icon: Layers, title: "Western Blot", desc: "Detecção e quantificação de proteínas específicas." },
  { Icon: Lightbulb, title: "Consultoria científica", desc: "Suporte técnico estratégico para projetos de P&D." },
];

const Services = () => {
  return (
    <section id="servicos" className="section">
      <div className="container-x">
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Capacidade técnica <span className="text-gradient">de ponta a ponta</span>.
          </h2>
          <p className="text-muted-foreground text-lg">Do ensaio à interpretação científica, oferecemos um portfólio completo de serviços laboratoriais.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1.5 overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-15 blur-2xl transition-opacity" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero transition-all">
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg leading-tight">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
