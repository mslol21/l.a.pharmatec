import oneHealth from "@/assets/one-health.jpg";
import { Heart, PawPrint, Trees } from "lucide-react";

const pillars = [
  { Icon: Heart, title: "Saúde Humana", desc: "Terapias inovadoras para doenças infecciosas e inflamatórias." },
  { Icon: PawPrint, title: "Saúde Animal", desc: "Soluções veterinárias com base científica sólida." },
  { Icon: Trees, title: "Saúde Ambiental", desc: "Bioprodutos sustentáveis que respeitam o ecossistema." },
];

const OneHealth = () => {
  return (
    <section id="one-health" className="section bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">One Health</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Uma só saúde, <span className="text-gradient">um só planeta</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O conceito <strong className="text-foreground">One Health</strong> reconhece que a saúde humana, animal e ambiental estão profundamente interconectadas. Trabalhamos no cruzamento dessas dimensões para criar soluções que beneficiam todo o sistema vivo.
            </p>

            <div className="space-y-4 pt-4">
              {pillars.map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-2xl glass border border-white/60 hover:shadow-card transition-all">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-pulse-glow" />
            <img src={oneHealth} alt="Conceito One Health: humano, animal e meio ambiente conectados" loading="lazy" width={1280} height={1024} className="relative animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneHealth;
