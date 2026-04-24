const Footer = () => (
  <footer className="bg-gradient-deep text-white/70 pt-16 pb-8 px-6 md:px-10 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-dark opacity-30" />
    <div className="container-x relative">
      <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-glow to-secondary flex items-center justify-center shadow-glow">
              <span className="text-white font-display font-bold">L</span>
            </div>
            <div>
              <div className="font-display font-bold text-white">L.A. Pharmatec</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">Biotech R&amp;D</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Inovação em fármacos para saúde humana, animal e ambiental, com base no conceito One Health.
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-secondary-glow font-semibold mb-4">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
            <li><a href="#one-health" className="hover:text-white transition-colors">One Health</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#pesquisa" className="hover:text-white transition-colors">Pesquisa & Desenvolvimento</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-secondary-glow font-semibold mb-4">Contato</div>
          <ul className="space-y-2 text-sm">
            <li>contato@lapharmatec.com.br</li>
            <li>Supera Parque Tecnológico</li>
            <li>Ribeirão Preto · SP · Brasil</li>
          </ul>
        </div>
      </div>

      <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <div>© {new Date().getFullYear()} L.A. Pharmatec. Todos os direitos reservados.</div>
        <div>Feito com ciência em Ribeirão Preto.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
