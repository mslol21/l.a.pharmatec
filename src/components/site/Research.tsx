import cells from "@/assets/cells.jpg";
import { Dog, Sprout, Flower2 } from "lucide-react";

const projects = [
  {
    Icon: Dog,
    tag: "Veterinária",
    title: "Tratamento para Leishmaniose Visceral Canina",
    desc: "Desenvolvimento de fármaco antiparasitário inovador para o controle da LVC em populações caninas.",
  },
  {
    Icon: Sprout,
    tag: "Agro · Bio",
    title: "Biológico contra murcha da cana",
    desc: "Bioproduto sustentável para combate ao patógeno causador de perdas no cultivo de cana-de-açúcar.",
  },
  {
    Icon: Flower2,
    tag: "Dermatologia",
    title: "Fitoterápico para dermatite atópica",
    desc: "Formulação de origem vegetal com ação anti-inflamatória para uso tópico em pele sensível.",
  },
];

const Research = () => {
  return (
    <section id="pesquisa" className="section relative overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-40 right-0 w-1/2 h-full opacity-[0.08]">
        <img src={cells} alt="" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
      </div>
      <div className="container-x relative">
        <div className="max-w-3xl mb-20 space-y-5">
          <span className="eyebrow">Pesquisa & Desenvolvimento</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Projetos que <span className="text-gradient">moldam o amanhã</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Pipelines ativos em saúde humana, animal e ambiental — da bancada à validação clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(({ Icon, tag, title, desc }, i) => (
            <article key={title} className="group relative p-8 rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-blue">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-4xl font-bold text-primary/[0.08]">0{i + 1}</span>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary">{tag}</span>
                  <h3 className="font-display text-xl font-bold leading-tight">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-border/60">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Em desenvolvimento</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
