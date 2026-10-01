/*
  Change summary:
  - What: Lightweight fade-up wrapper for section entrances.
  - Why: The live site feels considered, not static; motion stays subtle.
  - Related: homepage and inner-page sections
  - MCP Context 7: Framer Motion whileInView from /grx7/framer-motion.
*/

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
