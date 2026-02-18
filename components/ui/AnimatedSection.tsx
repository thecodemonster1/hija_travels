"use client";
import { motion, type TargetAndTransition, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimationPreset = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "bounce";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationPreset;
}

type PresetState = TargetAndTransition;

type Preset = {
  hidden: PresetState;
  visible: PresetState;
};

const PRESETS: Record<AnimationPreset, Preset> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  bounce: {
    hidden: { opacity: 0, scale: 0.92, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
};

const variants: Variants = {
  hidden: (preset: AnimationPreset): PresetState => PRESETS[preset].hidden,
  visible: (preset: AnimationPreset): PresetState => PRESETS[preset].visible,
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade",
}: AnimatedSectionProps) {
  const transition =
    animation === "bounce"
      ? { type: "spring" as const, stiffness: 300, damping: 18, delay }
      : { duration: 0.6, delay, ease: "easeOut" as const };

  return (
    <motion.div
      custom={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={transition}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
