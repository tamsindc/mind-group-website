"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
