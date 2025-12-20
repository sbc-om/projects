import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className = "", hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`
        relative overflow-hidden rounded-xl
        bg-white/80 dark:bg-slate-900/50
        backdrop-blur-xl
        border border-slate-200/50 dark:border-white/10
        transition-all duration-300
        ${className}
      `}
    >
      {/* Glass shine effect */}
      <div className="glass-shine absolute inset-0 opacity-40" />
      
      {/* Border gradient glow */}
      <div className="glass-border-glow absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
