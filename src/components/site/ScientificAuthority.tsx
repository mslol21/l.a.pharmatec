import { Award, Microscope, BookOpen, Building2, FlaskConical, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const credentials = [
  {
    icon: GraduationCap,
    title: "Liderança PhD",
    desc: "Fundada e gerida por Doutoras em Biotecnologia e Ciências com vasta experiência acadêmica e industrial.",
  },
  {
    icon: Building2,
    title: "Supera Parque",
    desc: "Incubada em um dos polos tecnológicos mais avançados do Brasil, garantindo infraestrutura de ponta.",
  },
  {
    icon: Award,
    title: "P&D de Excelência",
    desc: "Metodologias rigorosas validadas por padrões internacionais de biotecnologia e farmacologia.",
  },
];

const ScientificAuthority = () => {
  return (
    <section className="py-24 bg-gradient-deep relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-grid-dark opacity-10" />
      
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-glow text-[10px] font-bold uppercase tracking-widest">
              Autoridade Científica
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter">
              Excelência técnica <br />
              <span className="text-gradient-light">que gera resultados</span>.
            </h2>
            
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl">
              "Equipe com formação avançada em biotecnologia e ciências, dedicada a transformar pesquisa complexa em soluções comerciais viáveis e seguras."
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-glow-blue">
                  <BookOpen className="w-6 h-6 text-secondary-glow" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Anos de Pesquisa</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-glow-blue">
                  <FlaskConical className="w-6 h-6 text-secondary-glow" />
                </div>
                <div>
                  <div className="text-2xl font-bold">05+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Pipelines Ativos</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
            {credentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary-glow shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificAuthority;
