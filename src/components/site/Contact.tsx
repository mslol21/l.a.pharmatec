import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section bg-gradient-soft">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Contato</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Vamos <span className="text-gradient">conversar</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Entre em contato para consultorias, parcerias científicas ou para conhecer nossos serviços.
            </p>

            <div className="space-y-4 pt-4">
              <a href="mailto:contato@lapharmatec.com.br" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:shadow-card hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</div>
                  <div className="font-medium group-hover:text-primary transition-colors">contato@lapharmatec.com.br</div>
                </div>
              </a>

              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:shadow-card hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow shrink-0">
                  <Linkedin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                  <div className="font-medium group-hover:text-primary transition-colors">/company/la-pharmatec</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Localização</div>
                  <div className="font-medium">Supera Parque Tecnológico · Ribeirão Preto, SP</div>
                </div>
              </div>
            </div>
          </div>

          <form className="p-8 rounded-3xl bg-gradient-card border border-border/50 shadow-card space-y-5" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-2xl font-bold">Solicitar consultoria</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nome</label>
                <input className="w-full mt-2 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition" placeholder="Seu nome" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">E-mail</label>
                <input type="email" className="w-full mt-2 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition" placeholder="voce@empresa.com" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mensagem</label>
                <textarea rows={4} className="w-full mt-2 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none" placeholder="Como podemos ajudar?" />
              </div>
            </div>
            <button className="w-full px-7 py-4 rounded-full bg-gradient-hero text-primary-foreground font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
