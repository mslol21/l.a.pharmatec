import cells from "@/assets/cells.png";
import { Dog, Sprout, Beaker, Zap, Search, ArrowRight, FlaskConical, Microscope, Database, TestTube2 } from "lucide-react";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <section id="pesquisa" className="section-padding relative overflow-hidden bg-[hsl(222,84%,4%)]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none mix-blend-overlay">
        <img src={cells} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container-wide relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-glow text-[10px] font-bold uppercase tracking-widest mb-4"
            >
              <Database className="w-3.5 h-3.5" />
              Scientific Pipeline 2024
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter"
            >
              P&D que define o <br />
              <span className="text-gradient-light">futuro da saúde</span>.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-md leading-relaxed font-light pb-2"
          >
            Transformamos hipóteses disruptivas em soluções de alto impacto, operando na fronteira entre a pesquisa acadêmica e a inovação industrial.
          </motion.p>
        </div>

        {/* FEATURED PROJECT: Leishmaniose */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group mb-16"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 to-primary/50 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition-opacity" />
          <div className="relative rounded-[3rem] bg-gradient-deep border border-white/10 p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-full bg-secondary-glow/10 blur-[120px] rounded-full translate-x-1/3 pointer-events-none" />
            
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary text-white text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-4 h-4" /> Projeto Flagship
                </div>
                
                <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Tratamento disruptivo para <br />
                  <span className="text-secondary-glow">Leishmaniose Visceral Canina</span>
                </h3>
                
                <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                  Estamos desenvolvendo um novo fármaco antiparasitário focado em eliminar a carga parasitária com toxicidade mínima. Atualmente em fase de <span className="text-white font-bold">validação in vivo</span> com resultados promissores.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-secondary/20 text-secondary-glow">
                      <TestTube2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Status Atual</div>
                      <div className="text-white font-bold">Fase Pré-Clínica II</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-secondary/20 text-secondary-glow">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Inovação</div>
                      <div className="text-white font-bold">Nova Molécula Ativa</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square lg:aspect-auto h-full min-h-[300px] rounded-[2rem] overflow-hidden border border-white/10 shadow-glow">
                <img 
                  src={cells} 
                  alt="Pesquisa Laboratorial" 
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-glow flex items-center justify-center">
                    <Dog className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-white font-display font-bold">Bio-Animal Care</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ACTIVE & FUTURE PIPELINES SEPARATION */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Active Development */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-2xl font-bold text-white">Desenvolvimento Ativo</h4>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  icon: Sprout,
                  title: "Bio-Insumos Agro",
                  desc: "Desenvolvimento de bioprodutos para proteção de cultivos contra a Murcha da Cana.",
                  tag: "Agritech"
                },
                {
                  icon: Beaker,
                  title: "Screening Microbiológico",
                  desc: "Plataforma de alta performance para identificação de patógenos emergentes.",
                  tag: "Metodologia"
                }
              ].map((proj) => (
                <div key={proj.title} className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary-glow">
                      <proj.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{proj.tag}</span>
                  </div>
                  <h5 className="text-xl font-bold text-white mb-2">{proj.title}</h5>
                  <p className="text-white/50 text-sm leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Pipelines (Ideation) */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-2xl font-bold text-white/50">Pipelines em Ideação</h4>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: Search,
                  title: "Inteligência de Biofilmes",
                  desc: "Pesquisa exploratória em sistemas inteligentes para controle de biofilmes bacterianos.",
                  tag: "Exploration"
                },
                {
                  icon: FlaskConical,
                  title: "Drug Delivery Avançado",
                  desc: "Novos carreadores lipídicos para fármacos de baixa solubilidade.",
                  tag: "Discovery"
                }
              ].map((proj) => (
                <div key={proj.title} className="group p-8 rounded-[2.5rem] bg-transparent border border-white/5 opacity-60 hover:opacity-100 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                      <proj.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{proj.tag}</span>
                  </div>
                  <h5 className="text-xl font-bold text-white/80 mb-2">{proj.title}</h5>
                  <p className="text-white/40 text-sm leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#contato" className="inline-flex items-center gap-3 text-secondary-glow font-bold hover:gap-5 transition-all">
            Explorar Parcerias Científicas <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;

