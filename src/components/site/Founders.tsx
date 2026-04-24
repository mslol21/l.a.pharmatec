import leticia from "@/assets/founder-leticia.jpg";
import amanda from "@/assets/founder-amanda.jpg";
import { GraduationCap, Linkedin } from "lucide-react";

const founders = [
  {
    name: "Letícia de Almeida",
    role: "Biotecnologista",
    title: "Doutora em Biotecnologia",
    img: leticia,
  },
  {
    name: "Amanda Ap. Seribelli",
    role: "Biomédica",
    title: "Doutora em Ciências",
    img: amanda,
  },
];

const Founders = () => {
  return (
    <section id="fundadoras" className="section bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-20 space-y-5">
          <span className="eyebrow">Liderança científica</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Mentes que <span className="text-gradient">movem a ciência</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Cientistas com formação de excelência liderando o futuro da farmacologia translacional brasileira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {founders.map((f) => (
            <article key={f.name} className="group relative bg-card rounded-3xl overflow-hidden border border-border/60 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.name} loading="lazy" width={800} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold">{f.name}</h3>
                  <p className="text-secondary-glow font-medium text-sm mt-1">{f.role}</p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 text-secondary" />
                  {f.title}
                </div>
                <a href="#contato" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-all">
                  <Linkedin className="w-4 h-4" />
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
