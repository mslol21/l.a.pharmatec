import cells from "@/assets/cells.jpg";

const projects = [
  {
    tag: "Veterinária",
    title: "Tratamento para Leishmaniose Visceral Canina",
    desc: "Desenvolvimento de fármaco antiparasitário inovador para o controle da LVC.",
  },
  {
    tag: "Agro",
    title: "Biológico contra murcha da cana",
    desc: "Bioproduto sustentável para combate ao patógeno causador de perdas no cultivo de cana-de-açúcar.",
  },
  {
    tag: "Dermatologia",
    title: "Fitoterápico para dermatite atópica",
    desc: "Formulação de origem vegetal com ação anti-inflamatória para uso tópico.",
  },
];

const Research = () => {
  return (
    <section id="pesquisa" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img src={cells} alt="" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
      </div>
      <div className="container-x relative">
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Pesquisa & Desenvolvimento</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Projetos que <span className="text-gradient">moldam o amanhã</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={p.title} className="group relative p-8 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-elegant transition-all hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-hero scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/10 text-secondary">{p.tag}</span>
                  <span className="font-display text-3xl font-bold text-muted-foreground/30">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
