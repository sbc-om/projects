import { motion } from "motion/react";
import type { ReactNode } from "react";

interface EnhancedHeroProps {
  children: ReactNode;
  className?: string;
}

export function EnhancedHero({ children, className = "" }: EnhancedHeroProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Liquid glass glow layer */}
      <div className="absolute inset-0 opacity-70 dark:opacity-55">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(0,152,234,0.32), transparent 60%), radial-gradient(circle at 65% 70%, rgba(168,85,247,0.20), transparent 62%)",
            filter: "blur(28px)",
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.55, 0.35],
            x: [0, 18, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 35%, rgba(168,85,247,0.28), transparent 60%), radial-gradient(circle at 70% 70%, rgba(34,197,94,0.14), transparent 62%)",
            filter: "blur(30px)",
          }}
          animate={{
            scale: [1.08, 1, 1.08],
            opacity: [0.55, 0.35, 0.55],
            x: [0, -22, 0],
            y: [0, 14, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
