const Footer = () => (
  <footer className="border-t border-border/60 py-10 px-6 md:px-10">
    <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
          <span className="text-primary-foreground font-display font-bold text-sm">L</span>
        </div>
        <span className="font-display font-semibold text-foreground">L.A. Pharmatec</span>
      </div>
      <div>© {new Date().getFullYear()} L.A. Pharmatec. Todos os direitos reservados.</div>
      <div>Supera Parque · Ribeirão Preto, SP</div>
    </div>
  </footer>
);

export default Footer;
