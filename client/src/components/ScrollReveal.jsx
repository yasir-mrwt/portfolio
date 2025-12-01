/**
 * Scroll Reveal Animation Component
 *
 * How scroll-based animations work:
 *
 * 1. Intersection Observer API watches when element enters viewport
 * 2. When element is visible, trigger animation
 * 3. Framer Motion handles the actual animation transitions
 *
 * This component wraps any children and animates them on scroll.
 *
 * Usage:
 * <ScrollReveal>
 *   <YourComponent />
 * </ScrollReveal>
 *
 * Benefits:
 * - Performance: Only animates when needed
 * - Flexibility: Customizable animation variants
 * - UX: Guides user attention as they scroll
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({
  children,
  direction = "up", // Animation direction: up, down, left, right
  delay = 0, // Delay before animation starts
  duration = 0.6, // Animation duration
}) {
  const ref = useRef(null);

  /**
   * useInView hook from Framer Motion
   *
   * Returns true when element is in viewport
   * Options:
   * - once: Only animate once (don't re-animate on scroll up)
   * - margin: Trigger animation before element fully visible
   */
  const isInView = useInView(ref, {
    once: true, // Animate only once
    margin: "-100px", // Start animation 100px before entering viewport
  });

  /**
   * Animation variants based on direction
   *
   * hidden: Initial state (off-screen or invisible)
   * visible: Final state (normal position, fully visible)
   */
  const variants = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom easing for smooth motion
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Alternative: Stagger children animations
 *
 * Used when you want multiple items to animate in sequence
 */
export function ScrollRevealStagger({ children, staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay, // Delay between each child animation
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual item for stagger animation
 */
export function ScrollRevealItem({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
