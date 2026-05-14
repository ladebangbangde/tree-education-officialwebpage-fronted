"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

type GlassCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
