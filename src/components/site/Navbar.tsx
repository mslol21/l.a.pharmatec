import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
      <nav className="container-x flex items-center justify-between py-4 px-6 md:px-10">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-foreground font-display font-bold text-lg">L</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">L.A. Pharmatec</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Biotech R&amp;D</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-hero hover:after:w-full after:transition-all">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contato" className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-hero text-primary-foreground font-medium text-sm shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
          Solicitar consultoria
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-white/40 animate-fade-in">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-2 font-medium text-foreground/80 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="text-center px-5 py-3 rounded-full bg-gradient-hero text-primary-foreground font-medium">Solicitar consultoria</a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
