import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5516000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20L.A.%20Pharmatec"
    target="_blank"
    rel="noreferrer"
    aria-label="Fale conosco no WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-30" />
    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary-glow text-primary-foreground shadow-elegant hover:shadow-glow transition-all hover:scale-110">
      <MessageCircle className="w-6 h-6" />
    </span>
    <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity pointer-events-none shadow-card">
      Falar no WhatsApp
    </span>
  </a>
);

export default WhatsAppButton;
