import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#fundadoras", label: "Fundadoras" },
  { href: "#one-health", label: "One Health" },
  { href: "#servicos", label: "Serviços" },
  { href: "#pesquisa", label: "P&D" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`container-x mx-auto px-4 md:px-6 transition-all duration-500`}>
        <nav className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow-blue overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
              <span className="relative text-white font-display font-bold text-lg">L</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-foreground text-[15px]">L.A. Pharmatec</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Biotech R&amp;D</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/75 hover:text-primary hover:bg-primary/5 transition-all">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contato" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all group">
            Consultoria
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden glass mt-2 rounded-2xl shadow-card animate-fade-in">
            <ul className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a onClick={() => setOpen(false)} href={l.href} className="block px-4 py-3 rounded-lg font-medium text-foreground/80 hover:text-primary hover:bg-primary/5">
                    {l.label}
                  </a>
                </li>
              ))}
              <a href="#contato" onClick={() => setOpen(false)} className="mt-2 text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium">Consultoria</a>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
