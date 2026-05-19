import { useState } from "react";
import { Mail, MapPin, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `Novo Contato Site - ${formData.name}`,
        from_name: "L.A. Pharmatec - Site"
      };

      const primaryPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "a9bf11b5-4419-4143-9cde-67441b5b42d8",
          ...payload
        })
      });

      const secondaryPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_SECONDARY_ACCESS_KEY || "2400fd30-8148-4164-9fff-0f51876c1075",
          ...payload
        })
      });

      const [primaryResponse, secondaryResponse] = await Promise.all([
        primaryPromise,
        secondaryPromise
      ]);

      if (primaryResponse.ok || secondaryResponse.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000); // Reseta após 5 segundos
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };


  return (
    <section id="contato" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-radial opacity-30 pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="eyebrow">Canais de Atendimento</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05]">
                Precisa de suporte <br />
                <span className="text-gradient">científico ou ensaios laboratoriais</span>?
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed font-light max-w-md">
                Nossa equipe técnica está disponível para responder suas dúvidas sobre ensaios, projetos de P&D e consultoria.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a 
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                href="mailto:diretoria.lapharmatec@gmail.com" 
                className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-border/60 hover:bg-muted/30 hover:border-primary/20 hover:shadow-premium transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary border border-primary/10 flex items-center justify-center shrink-0 transition-all duration-500">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">E-mail Corporativo</div>
                  <div className="font-display font-bold text-lg text-primary truncate">diretoria.lapharmatec@gmail.com</div>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                href="https://linkedin.com/in/l-a-pharmatec-823a57321" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-border/60 hover:bg-muted/30 hover:border-primary/20 hover:shadow-premium transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-[#0077b5] border border-primary/10 flex items-center justify-center shrink-0 transition-all duration-500">
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-white" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">LinkedIn Lab</div>
                  <div className="font-display font-bold text-lg text-primary truncate">/in/l-a-pharmatec</div>
                </div>
              </motion.a>

              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-border/60 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/10">
                  <MapPin className="w-6 h-6 text-secondary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Hub de Inovação</div>
                  <div className="font-display font-bold text-lg text-primary">Supera Parque Tecnológico</div>
                  <div className="text-sm text-muted-foreground leading-snug mt-1">Av. Dra. Nadir Águiar, 1805, Sala 204 <br/> Prédio 1, Jardim Dr. Paulo Gomes Romeo <br/> Ribeirão Preto - SP</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-10 md:p-12 rounded-[3.5rem] bg-gradient-deep text-white shadow-elegant overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary-glow/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="space-y-3">
                  <h3 className="font-display text-4xl font-bold tracking-tight">Agendar Reunião</h3>
                  <p className="text-white/60 font-light max-w-xs leading-relaxed">P&D, Bioensaios ou Parceria Científica.</p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 px-2">Nome completo</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={status === "loading"} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-secondary-glow focus:outline-none transition-all disabled:opacity-50" placeholder="Seu nome ou empresa" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 px-2">E-mail corporativo</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={status === "loading"} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-secondary-glow focus:outline-none transition-all disabled:opacity-50" placeholder="voce@empresa.com.br" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 px-2">Sua Mensagem</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required disabled={status === "loading"} rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-secondary-glow focus:outline-none transition-all resize-none disabled:opacity-50" placeholder="Descreva brevemente como podemos colaborar..." />
                  </div>
                </div>

                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center gap-3 text-green-300">
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="text-sm font-medium">Mensagem enviada com sucesso! Em breve retornaremos o contato.</p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center gap-3 text-red-300">
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm font-medium">Ocorreu um erro ao enviar. Por favor, tente novamente ou use o e-mail corporativo.</p>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading" || status === "success"}
                  className="w-full flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary-glow text-primary font-bold text-lg shadow-glow hover:shadow-elegant transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : status === "success" ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
