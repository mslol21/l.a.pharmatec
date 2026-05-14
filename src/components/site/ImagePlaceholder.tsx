import { Camera, Microscope, FlaskConical, Dna, Leaf, Activity } from "lucide-react";

export type PlaceholderVariant =
  | "hero"
  | "about"
  | "services-lab"
  | "services-cells"
  | "services-health"
  | "research"
  | "one-health";

interface PlaceholderConfig {
  label: string;
  sublabel: string;
  Icon: React.ElementType;
  gradient: string;
  gridColor: string;
  accentColor: string;
  patternType: "dots" | "lines" | "cross";
}

const configs: Record<PlaceholderVariant, PlaceholderConfig> = {
  hero: {
    label: "Laboratório Principal",
    sublabel: "Área de pesquisa e desenvolvimento",
    Icon: FlaskConical,
    gradient: "from-[hsl(218,80%,12%)] via-[hsl(222,84%,8%)] to-[hsl(218,80%,16%)]",
    gridColor: "rgba(100,160,255,0.06)",
    accentColor: "rgba(96,165,250,0.6)",
    patternType: "dots",
  },
  about: {
    label: "Sede – Supera Parque",
    sublabel: "Incubadora de Elite · Ribeirão Preto – SP",
    Icon: Microscope,
    gradient: "from-[hsl(215,100%,14%)] via-[hsl(215,100%,18%)] to-[hsl(212,95%,22%)]",
    gridColor: "rgba(100,160,255,0.05)",
    accentColor: "rgba(96,165,250,0.5)",
    patternType: "cross",
  },
  "services-lab": {
    label: "Ensaios Celulares",
    sublabel: "Cultura de células & avaliação de toxicidade",
    Icon: FlaskConical,
    gradient: "from-[hsl(218,80%,10%)] via-[hsl(218,80%,14%)] to-[hsl(218,80%,18%)]",
    gridColor: "rgba(100,160,255,0.04)",
    accentColor: "rgba(96,165,250,0.4)",
    patternType: "dots",
  },
  "services-cells": {
    label: "Ensaios Microbiológicos",
    sublabel: "Parasitologia & microbiologia avançada",
    Icon: Dna,
    gradient: "from-[hsl(215,100%,12%)] via-[hsl(215,100%,16%)] to-[hsl(212,95%,20%)]",
    gridColor: "rgba(100,160,255,0.04)",
    accentColor: "rgba(96,165,250,0.4)",
    patternType: "lines",
  },
  "services-health": {
    label: "Mapeamento Imunológico",
    sublabel: "Análise de citocinas & expressão gênica",
    Icon: Activity,
    gradient: "from-[hsl(218,80%,10%)] via-[hsl(215,100%,14%)] to-[hsl(212,95%,18%)]",
    gridColor: "rgba(100,160,255,0.04)",
    accentColor: "rgba(96,165,250,0.4)",
    patternType: "cross",
  },
  research: {
    label: "Pipeline P&D – Leishmaniose",
    sublabel: "Fase pré-clínica · Validação in vitro",
    Icon: Microscope,
    gradient: "from-[hsl(215,100%,10%)] via-[hsl(215,100%,14%)] to-[hsl(215,100%,18%)]",
    gridColor: "rgba(100,160,255,0.05)",
    accentColor: "rgba(96,165,250,0.5)",
    patternType: "dots",
  },
  "one-health": {
    label: "One Health",
    sublabel: "Saúde humana · animal · ambiental",
    Icon: Leaf,
    gradient: "from-[hsl(215,100%,16%)] via-[hsl(215,100%,20%)] to-[hsl(212,95%,24%)]",
    gridColor: "rgba(100,160,255,0.05)",
    accentColor: "rgba(96,165,250,0.5)",
    patternType: "lines",
  },
};

interface ImagePlaceholderProps {
  variant: PlaceholderVariant;
  className?: string;
  /** Pass true when the placeholder is used on a light background section */
  light?: boolean;
}

const DotPattern = ({ color }: { color: string }) => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ph-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.2" fill={color} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ph-dots)" />
  </svg>
);

const LinesPattern = ({ color }: { color: string }) => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ph-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="40" y2="40" stroke={color} strokeWidth="0.6" />
        <line x1="40" y1="0" x2="80" y2="40" stroke={color} strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ph-lines)" />
  </svg>
);

const CrossPattern = ({ color }: { color: string }) => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ph-cross" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M24 0 V48 M0 24 H48" stroke={color} strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ph-cross)" />
  </svg>
);

/** Molecule decoration SVG */
const MoleculeDecor = ({ color }: { color: string }) => (
  <svg
    className="absolute bottom-6 right-6 opacity-20 w-28 h-28 md:w-36 md:h-36"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="20" r="10" stroke={color} strokeWidth="1.5" />
    <circle cx="20" cy="80" r="10" stroke={color} strokeWidth="1.5" />
    <circle cx="100" cy="80" r="10" stroke={color} strokeWidth="1.5" />
    <circle cx="60" cy="60" r="8" stroke={color} strokeWidth="1.5" />
    <line x1="60" y1="30" x2="60" y2="52" stroke={color} strokeWidth="1.5" />
    <line x1="28" y1="74" x2="52" y2="62" stroke={color} strokeWidth="1.5" />
    <line x1="92" y1="74" x2="68" y2="62" stroke={color} strokeWidth="1.5" />
  </svg>
);

/** Corner scan line animation */
const ScanLine = () => (
  <div
    className="absolute left-0 right-0 h-[2px] pointer-events-none"
    style={{
      background: "linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.35) 50%, transparent 100%)",
      animation: "ph-scan 3.5s ease-in-out infinite",
      top: "0%",
    }}
  />
);

export const ImagePlaceholder = ({ variant, className = "", light = false }: ImagePlaceholderProps) => {
  const cfg = configs[variant];
  const { Icon } = cfg;

  const Pattern =
    cfg.patternType === "dots"
      ? DotPattern
      : cfg.patternType === "lines"
      ? LinesPattern
      : CrossPattern;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-label={`Placeholder: ${cfg.label}`}
      role="img"
    >
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient}`} />

      {/* Geometric pattern */}
      <Pattern color={cfg.gridColor} />

      {/* Animated scan line */}
      <ScanLine />

      {/* Radial glow center */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 40%, ${cfg.accentColor.replace("0.5", "0.07")} 0%, transparent 70%)`,
        }}
      />

      {/* Corner brackets — top-left */}
      <div className="absolute top-5 left-5 pointer-events-none">
        <div
          className="w-8 h-8 border-l-2 border-t-2"
          style={{ borderColor: cfg.accentColor }}
        />
      </div>
      {/* Corner brackets — top-right */}
      <div className="absolute top-5 right-5 pointer-events-none">
        <div
          className="w-8 h-8 border-r-2 border-t-2"
          style={{ borderColor: cfg.accentColor }}
        />
      </div>
      {/* Corner brackets — bottom-left */}
      <div className="absolute bottom-5 left-5 pointer-events-none">
        <div
          className="w-8 h-8 border-l-2 border-b-2"
          style={{ borderColor: cfg.accentColor }}
        />
      </div>
      {/* Corner brackets — bottom-right */}
      <div className="absolute bottom-5 right-5 pointer-events-none">
        <div
          className="w-8 h-8 border-r-2 border-b-2"
          style={{ borderColor: cfg.accentColor }}
        />
      </div>

      {/* Central icon and label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        {/* Icon circle with pulse ring */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: cfg.accentColor }}
          />
          <div
            className="relative w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: `rgba(96,165,250,0.08)`,
              border: `1px solid ${cfg.accentColor.replace("0.6", "0.25")}`,
              backdropFilter: "blur(4px)",
            }}
          >
            <Icon
              className="w-8 h-8"
              style={{ color: cfg.accentColor.replace("0.6", "0.9") }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Label block */}
        <div className="space-y-1.5">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50"
            style={{ color: cfg.accentColor.replace("0.6", "1") }}
          >
            Imagem a inserir
          </div>
          <div
            className="text-base font-semibold leading-tight"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {cfg.label}
          </div>
          <div
            className="text-xs leading-relaxed max-w-[220px]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            {cfg.sublabel}
          </div>
        </div>

        {/* Camera badge */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
          style={{
            background: "rgba(96,165,250,0.08)",
            border: `1px solid ${cfg.accentColor.replace("0.6", "0.2")}`,
            color: cfg.accentColor.replace("0.6", "0.7"),
          }}
        >
          <Camera className="w-3 h-3" />
          Fotografia real — em breve
        </div>
      </div>

      {/* Molecule decoration */}
      <MoleculeDecor color={cfg.accentColor.replace("0.6", "1")} />
    </div>
  );
};

export default ImagePlaceholder;
