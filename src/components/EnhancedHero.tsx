import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface EnhancedHeroProps {
  children: ReactNode;
  className?: string;
}

export function EnhancedHero({ children, className = "" }: EnhancedHeroProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
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
