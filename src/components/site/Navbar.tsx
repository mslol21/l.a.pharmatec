import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#sobre",      label: "Sobre" },
  { href: "#servicos",   label: "Serviços" },
  { href: "#pesquisa",   label: "P&D" },
  { href: "#fundadoras", label: "Quem Somos" },
  { href: "#one-health", label: "One Health" },
  { href: "#contato",    label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
        scrolled ? "py-2" : "py-4 lg:py-6"
      }`}
    >
      <div className="container-wide px-4 lg:px-6">
        <nav
          className={`flex items-center justify-between rounded-full px-5 transition-all duration-700 ${
            scrolled
              ? "py-2 glass border-white/60 shadow-md"
              : "py-3 lg:py-4 bg-transparent border-transparent"
          }`}
        >
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className={`relative flex items-center justify-center transition-all duration-700 ${scrolled ? "w-[44px] h-[44px]" : "w-[56px] h-[56px]"}`}>
              {/* Subtle ring on hover */}
              <div className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 ring-secondary/20 transition-all duration-500" />
              <img
                src="/logo.png"
                alt="L.A. Pharmatec"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.06]"
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className={`font-display font-extrabold tracking-[-0.04em] leading-none transition-all duration-700 ${scrolled ? "text-primary text-[16px]" : "text-white text-[18px]"}`}>
                L.A. Pharmatec
              </div>
              <div className={`uppercase font-bold tracking-[0.45em] leading-none transition-all duration-700 ${scrolled ? "text-secondary text-[7.5px] mt-0.5" : "text-white/60 text-[8.5px] mt-1"}`}>
                Biotech Excellence
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2.5 rounded-xl text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 group ${
                    scrolled 
                      ? "text-primary/50 hover:text-primary" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {l.label}
                  {/* animated underline */}
                  <span className={`absolute bottom-1 left-4 right-4 h-[1.5px] scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-400 rounded-full ${
                    scrolled ? "bg-primary/60" : "bg-white/80"
                  }`} />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className={`hidden lg:inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-[0.12em] transition-all duration-500 group ${
                scrolled 
                  ? "bg-primary text-white px-6 py-2.5 text-[10.5px]" 
                  : "bg-white text-primary hover:bg-white/90 px-7 py-3.5 text-[11.5px]"
              }`}
              style={{ boxShadow: scrolled ? "var(--shadow-sm)" : "none" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                if (scrolled) {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-glow-blue), var(--shadow-md)";
                } else {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(255,255,255,0.15)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = scrolled ? "var(--shadow-sm)" : "none";
              }}
            >
              Consultoria
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-400 ${
                open 
                  ? "bg-primary text-white" 
                  : scrolled 
                    ? "bg-white border border-border text-primary shadow-xs" 
                    : "bg-white/10 border border-white/10 text-white backdrop-blur-md"
              }`}
              aria-label="Toggle Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                className="fixed inset-0 bg-primary/8 backdrop-blur-sm lg:hidden z-[-1]"
              />
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ type: "spring", damping: 28, stiffness: 340 }}
                className="lg:hidden glass mt-3 rounded-[2.5rem] shadow-deep overflow-hidden"
              >
                <ul className="flex flex-col p-3 gap-1">
                  {links.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <a
                        onClick={() => setOpen(false)}
                        href={l.href}
                        className="flex items-center justify-between px-7 py-4.5 rounded-2xl font-semibold text-primary/75 hover:text-primary hover:bg-primary/[0.04] transition-all duration-300"
                      >
                        <span className="uppercase tracking-[0.18em] text-[11px]">{l.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-25" />
                      </a>
                    </motion.li>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: links.length * 0.04 }}
                    className="p-3 pt-2"
                  >
                    <a
                      href="#contato"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-primary text-white font-bold uppercase tracking-[0.15em] text-[11px]"
                      style={{ boxShadow: "var(--shadow-md)" }}
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
