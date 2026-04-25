import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Dna } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#fundadoras", label: "Liderança" },
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
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-1000 ${
        scrolled ? "py-2 sm:py-4" : "py-6 sm:py-10"
      }`}
    >
      <div className="container-wide px-6">
        <nav 
          className={`flex items-center justify-between rounded-[2.5rem] px-6 sm:px-8 py-3 sm:py-4 transition-all duration-1000 ${
            scrolled ? "glass border-white/60 shadow-premium" : "bg-transparent border-transparent"
          }`}
        >
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow-blue overflow-hidden transition-transform duration-700 group-hover:scale-110">
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
              <Dna className="w-6 h-6 text-white relative z-10" />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-extrabold text-primary text-[19px] tracking-tighter">L.A. Pharmatec</div>
              <div className="text-[9px] uppercase font-bold tracking-[0.4em] text-secondary">Biotech Excellence</div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className="px-5 py-3 rounded-2xl text-[12px] font-bold uppercase tracking-widest text-primary/60 hover:text-primary hover:bg-primary/5 transition-all duration-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <a 
              href="#contato" 
              className="hidden lg:inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-[12px] uppercase tracking-widest shadow-premium hover:shadow-glow-blue hover:-translate-y-1 active:scale-95 transition-all duration-500 group"
            >
              Consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
              onClick={() => setOpen(!open)} 
              className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                open ? "bg-primary text-white" : "bg-white border border-border text-primary shadow-sm"
              }`}
              aria-label="Toggle Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-primary/10 backdrop-blur-md lg:hidden z-[-1]"
              />
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="lg:hidden glass mt-4 rounded-[3rem] shadow-2xl border-white/60 overflow-hidden"
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
                        className="flex items-center justify-between px-8 py-5 rounded-[2rem] font-extrabold text-primary/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-300"
                      >
                        <span className="uppercase tracking-[0.2em] text-xs">{l.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-30" />
                      </a>
                    </motion.li>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: links.length * 0.05 }}
                    className="p-4"
                  >
                    <a 
                      href="#contato" 
                      onClick={() => setOpen(false)} 
                      className="flex items-center justify-center gap-3 w-full py-6 rounded-[2rem] bg-primary text-white font-bold uppercase tracking-widest text-xs shadow-premium"
                    >
                      Solicitar Consultoria
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
