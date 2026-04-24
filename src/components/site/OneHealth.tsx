import { Heart, PawPrint, Trees } from "lucide-react";
import pattern from "@/assets/molecular-pattern.jpg";

const pillars = [
  { Icon: Heart, title: "Saúde Humana", desc: "Terapias inovadoras para doenças infecciosas e inflamatórias.", color: "from-primary-glow to-primary" },
  { Icon: PawPrint, title: "Saúde Animal", desc: "Soluções veterinárias com base científica sólida e eficaz.", color: "from-accent to-primary-glow" },
  { Icon: Trees, title: "Saúde Ambiental", desc: "Bioprodutos sustentáveis que respeitam o ecossistema.", color: "from-secondary-glow to-secondary" },
];

const OneHealth = () => {
  return (
    <section id="one-health" className="section relative overflow-hidden bg-gradient-deep text-white">
      <div className="absolute inset-0 opacity-25">
        <img src={pattern} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218_75%_10%)]/95 via-[hsl(218_75%_10%)]/80 to-[hsl(218_75%_10%)]/95" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-glow/20 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-20 space-y-5">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-glow">
            <span className="w-8 h-px bg-secondary-glow" />
            One Health
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
            Uma só saúde, <span className="text-gradient-light">um só planeta</span>.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            O conceito <strong className="text-white">One Health</strong> reconhece que a saúde humana, animal e ambiental estão profundamente interconectadas. Trabalhamos no cruzamento dessas dimensões para criar soluções que beneficiam todo o sistema vivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ Icon, title, desc, color }, i) => (
            <article key={title} className="group relative p-8 rounded-3xl glass-dark hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-glow`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/15">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
                <p className="text-white/65 leading-relaxed text-sm">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneHealth;
