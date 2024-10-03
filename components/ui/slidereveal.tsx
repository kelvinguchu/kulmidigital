"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SlideRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
}

const SlideReveal: React.FC<SlideRevealProps> = ({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants for controlling visibility
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      // No interfering styles, ensuring children manage their own styles
    >
      {children} {/* Children manage their own styles */}
    </motion.div>
  );
};

export default SlideReveal;
