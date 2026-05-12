import { Building2, GraduationCap } from "lucide-react";
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
    desc: "Incubada em um dos polos tecnológicos mais avançados do Brasil, focada em inovação e pesquisa científica.",
  },
];

const ScientificAuthority = () => {
  return (
    <section className="py-24 bg-gradient-deep relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-grid-dark opacity-10" />
      
      <div className="container-wide relative">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {credentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary-glow shrink-0 group-hover:scale-110 transition-transform shadow-glow-blue">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScientificAuthority;
