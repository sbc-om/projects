import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface LiquidBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function LiquidBackground({ children, className = "" }: LiquidBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`liquid-shell ${className}`.trim()}>
      {/* Animated floating blobs (subtle, premium) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(0,152,234,0.26), transparent 55%), radial-gradient(circle at 60% 65%, rgba(168,85,247,0.20), transparent 58%)",
            filter: "blur(18px)",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 40, -10, 0],
                  y: [0, 20, 40, 0],
                  scale: [1, 1.08, 0.98, 1],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 16, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <motion.div
          className="absolute -top-24 -right-44 h-[560px] w-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(168,85,247,0.22), transparent 55%), radial-gradient(circle at 70% 65%, rgba(34,197,94,0.14), transparent 60%)",
            filter: "blur(20px)",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -30, 10, 0],
                  y: [0, 30, 10, 0],
                  scale: [1, 0.98, 1.06, 1],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <motion.div
          className="absolute -bottom-56 left-1/3 h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 45% 40%, rgba(34,197,94,0.14), transparent 58%), radial-gradient(circle at 60% 70%, rgba(0,152,234,0.12), transparent 62%)",
            filter: "blur(26px)",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 20, -20, 0],
                  y: [0, -10, 25, 0],
                  scale: [1, 1.04, 0.99, 1],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 22, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>

      {children}
    </div>
  );
}
