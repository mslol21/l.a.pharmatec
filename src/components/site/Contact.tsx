import { Mail, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="eyebrow">Contato</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Vamos <span className="text-gradient">conversar</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Entre em contato para consultorias, parcerias científicas ou para conhecer nossos serviços laboratoriais.
              </p>
            </div>

            <div className="space-y-3">
              <a href="mailto:contato@lapharmatec.com.br" className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card border border-border/60 hover:border-primary/30 hover:shadow-card transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:border-transparent transition-all">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">E-mail</div>
                  <div className="font-medium truncate group-hover:text-primary transition-colors">contato@lapharmatec.com.br</div>
                </div>
              </a>

              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card border border-border/60 hover:border-primary/30 hover:shadow-card transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:border-transparent transition-all">
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">LinkedIn</div>
                  <div className="font-medium group-hover:text-primary transition-colors">/company/la-pharmatec</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card border border-border/60">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">Localização</div>
                  <div className="font-medium">Supera Parque Tecnológico</div>
                  <div className="text-sm text-muted-foreground">Ribeirão Preto, SP</div>
                </div>
              </div>
            </div>
          </div>

          <form className="relative p-8 md:p-10 rounded-3xl bg-gradient-deep text-white shadow-elegant overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-glow/20 blur-[100px]" />
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="relative space-y-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Solicitar consultoria</h3>
                <p className="text-white/60 text-sm mt-2">Resposta em até 24h úteis.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">Nome completo</label>
                  <input className="w-full mt-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-secondary-glow focus:outline-none focus:ring-2 focus:ring-secondary-glow/30 transition" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">E-mail</label>
                  <input type="email" className="w-full mt-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-secondary-glow focus:outline-none focus:ring-2 focus:ring-secondary-glow/30 transition" placeholder="voce@empresa.com" />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">Mensagem</label>
                  <textarea rows={4} className="w-full mt-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-secondary-glow focus:outline-none focus:ring-2 focus:ring-secondary-glow/30 transition resize-none" placeholder="Como podemos ajudar?" />
                </div>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-secondary to-secondary-glow text-white font-semibold shadow-glow hover:shadow-elegant transition-all hover:-translate-y-0.5">
                <Send className="w-4 h-4" />
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
