import { GraduationCap, Linkedin } from "lucide-react";

const founders = [
  {
    name: "Letícia de Almeida",
    role: "Biotecnologista",
    title: "Doutora em Biotecnologia",
    initials: "LA",
    accent: "from-primary to-primary-glow",
  },
  {
    name: "Amanda Ap. Seribelli",
    role: "Biomédica",
    title: "Doutora em Ciências",
    initials: "AS",
    accent: "from-secondary to-secondary-glow",
  },
];

const Founders = () => {
  return (
    <section id="fundadoras" className="section">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Fundadoras</span>
          <h2 className="text-4xl md:text-5xl font-bold">Mentes que <span className="text-gradient">movem a ciência</span>.</h2>
          <p className="text-muted-foreground">Cientistas com formação de excelência liderando o futuro da farmacologia translacional.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f) => (
            <article key={f.name} className="group relative p-8 rounded-3xl bg-gradient-card border border-border/50 shadow-card hover:shadow-elegant transition-all hover:-translate-y-2 overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${f.accent} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              <div className="relative space-y-5">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shadow-glow`}>
                  {f.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{f.name}</h3>
                  <p className="text-primary font-medium mt-1">{f.role}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 text-secondary" />
                  {f.title}
                </div>
                <a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
                  <Linkedin className="w-4 h-4" /> Conectar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
