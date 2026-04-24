import lab from "@/assets/lab.jpg";
import { Microscope, Dna, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section bg-gradient-soft">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 bg-gradient-hero opacity-20 blur-2xl rounded-[2rem]" />
          <img src={lab} alt="Laboratório moderno de biotecnologia" loading="lazy" width={1600} height={1024} className="relative rounded-[2rem] shadow-elegant w-full" />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary">Sobre nós</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ciência aplicada para <span className="text-gradient">soluções terapêuticas</span> reais.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">L.A. Pharmatec</strong> é uma startup incubada no <strong className="text-foreground">Supera Parque Tecnológico</strong>, especializada em Pesquisa e Desenvolvimento de novos fármacos.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Atuamos na transformação do conhecimento científico em soluções terapêuticas para doenças infecciosas e inflamatórias.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { Icon: Microscope, title: "Pesquisa", desc: "Microbiologia & parasitologia" },
              { Icon: Dna, title: "Desenvolvimento", desc: "Novos fármacos" },
              { Icon: Leaf, title: "Sustentável", desc: "One Health" },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-2xl bg-gradient-card shadow-card border border-border/50 hover:shadow-elegant transition-all hover:-translate-y-1">
                <Icon className="w-7 h-7 text-primary mb-3" />
                <div className="font-display font-bold">{title}</div>
                <div className="text-xs text-muted-foreground mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
