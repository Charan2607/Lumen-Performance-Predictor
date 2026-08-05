import { motion } from "framer-motion";

export function LightningBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ambient glowing orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 320 / 0.5), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.14 85 / 0.35), transparent 70%)" }}
        animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Lightning bolts */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bolt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.9 0.09 90)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.9 0.09 90)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.9 0.09 90)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 20% 0 L 22% 30% L 18% 32% L 25% 60% L 20% 62% L 28% 100%"
          stroke="url(#bolt)" strokeWidth="2" fill="none"
          animate={{ opacity: [0, 0, 1, 0, 0, 0, 0.8, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.32, 0.34, 0.5, 0.7, 0.72, 0.74, 1] }}
          style={{ filter: "drop-shadow(0 0 8px oklch(0.9 0.09 90))" }}
        />
        <motion.path
          d="M 75% 0 L 78% 25% L 73% 27% L 80% 55% L 76% 58% L 82% 100%"
          stroke="url(#bolt)" strokeWidth="2" fill="none"
          animate={{ opacity: [0, 0, 0, 0, 1, 0, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2, times: [0, 0.4, 0.5, 0.55, 0.57, 0.6, 1] }}
          style={{ filter: "drop-shadow(0 0 8px oklch(0.9 0.09 90))" }}
        />
      </svg>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(oklch(0.9 0.09 90) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.09 90) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
    </div>
  );
}
