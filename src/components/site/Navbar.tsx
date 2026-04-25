import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container-wide px-6">
        <nav 
          className={`flex items-center justify-between rounded-3xl px-6 py-4 transition-all duration-700 ${
            scrolled ? "glass border-white/40 shadow-premium" : "bg-transparent border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow-blue overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
              <span className="relative text-white font-display font-bold text-xl">L</span>
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-foreground text-[17px] tracking-tight">L.A. Pharmatec</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Biotech Innovation</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className="px-5 py-2.5 rounded-xl text-[13px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a 
              href="#contato" 
              className="hidden lg:inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-bold text-[13px] shadow-premium hover:shadow-glow-blue hover:-translate-y-0.5 active:scale-95 transition-all group"
            >
              Consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
              onClick={() => setOpen(!open)} 
              className={`lg:hidden p-3 rounded-2xl transition-all ${
                open ? "bg-primary text-white" : "bg-white border border-border text-primary shadow-sm"
              }`}
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden glass mt-4 rounded-3xl shadow-premium border-white/50 overflow-hidden"
            >
              <ul className="flex flex-col p-4 gap-2">
                {links.map((l, i) => (
                  <motion.li 
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a 
                      onClick={() => setOpen(false)} 
                      href={l.href} 
                      className="flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-foreground/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all"
                    >
                      {l.label}
                      <ArrowRight className="w-4 h-4 opacity-30" />
                    </a>
                  </motion.li>
                ))}
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.05 }}
                  href="#contato" 
                  onClick={() => setOpen(false)} 
                  className="mt-4 text-center px-8 py-5 rounded-2xl bg-primary text-white font-bold shadow-premium"
                >
                  Solicitar Consultoria
                </motion.a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
