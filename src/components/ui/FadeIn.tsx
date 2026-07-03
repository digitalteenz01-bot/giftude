import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 800,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffsets[direction] }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.21, 0.47, 0.32, 0.98], // elegant ease-out cubic curve
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
