import lab from "@/assets/lab.jpg";
import { Microscope, Dna, Leaf, ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-hero opacity-15 blur-3xl rounded-[3rem]" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/50">
              <img src={lab} alt="Laboratório moderno de biotecnologia" loading="lazy" width={1600} height={1024} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white rounded-2xl p-5 shadow-elegant border border-border/50 max-w-[220px] animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Dna className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Incubada</div>
                  <div className="font-display font-bold text-sm">Supera Parque</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="eyebrow">Sobre nós</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Ciência aplicada para <span className="text-gradient">soluções terapêuticas</span> reais.
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground font-semibold">L.A. Pharmatec</strong> é uma startup incubada no <strong className="text-foreground font-semibold">Supera Parque Tecnológico</strong>, especializada em Pesquisa e Desenvolvimento de novos fármacos.
              </p>
              <p>
                Atuamos na transformação do conhecimento científico em soluções terapêuticas para doenças <span className="text-primary font-medium">infecciosas</span> e <span className="text-secondary font-medium">inflamatórias</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { Icon: Microscope, title: "Pesquisa", desc: "Microbiologia & parasitologia" },
                { Icon: Dna, title: "Desenvolvimento", desc: "Novos fármacos translacionais" },
                { Icon: Leaf, title: "Sustentável", desc: "Conceito One Health" },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="group relative p-5 rounded-2xl bg-gradient-card border border-border/60 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                  <ArrowUpRight className="absolute top-4 right-4 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  <Icon className="w-7 h-7 text-secondary mb-4" strokeWidth={1.5} />
                  <div className="font-display font-bold text-sm">{title}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
