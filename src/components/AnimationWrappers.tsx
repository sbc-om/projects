import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 3,
  yOffset = 10 
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

interface PulseGlowProps {
  children: ReactNode;
  color?: string;
  intensity?: number;
}

export function PulseGlow({ children, color = "0, 152, 234", intensity = 0.5 }: PulseGlowProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px rgba(${color}, ${intensity})`,
          `0 0 40px rgba(${color}, ${intensity * 1.5})`,
          `0 0 20px rgba(${color}, ${intensity})`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="rounded-lg"
    >
      {children}
    </motion.div>
  );
}

interface ScaleOnHoverProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
}

export function ScaleOnHover({ children, scale = 1.05, duration = 0.3 }: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.95 }}
      transition={{ duration, type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
}

export function FadeInView({ children, delay = 0 }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
