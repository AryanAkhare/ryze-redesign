import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import Features from "../components/sections/Features";
import LogoTray from "../components/sections/LogoTray";
import AuditHero from "../components/sections/AuditHero";
import Comparison from "../components/sections/Comparison";
import Footer from "../components/layout/Footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms for background elements
  const bgY = useTransform(smoothProgress, [0, 1], [0, -200]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 0.1, 0.1, 0]);

  return (
    <div ref={containerRef} className="relative bg-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl" style={{ backgroundColor: "rgba(var(--color-primary-rgb), 0.05)" }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: "rgba(var(--color-primary-rgb), 0.03)" }} />
      </motion.div>

      {/* Content with proper spacing and transitions */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        {/* Features Section with smooth transition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Features />
        </motion.div>

        {/* LogoTray with fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LogoTray />
        </motion.div>

        {/* Testimonials with stagger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Testimonials />
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Comparison />
        </motion.div>

        {/* AuditHero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AuditHero />
        </motion.div>

        {/* Enhanced Transition into footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-40 bg-gradient-to-b from-white via-gray-50/50 to-[#050505] overflow-hidden"
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundImage: "linear-gradient(to bottom, transparent, rgba(var(--color-primary-rgb), 0.05), rgba(var(--color-primary-rgb), 0.1))" }}
            animate={{
              background: [
                "linear-gradient(to bottom, transparent 0%, rgba(255,72,1,0.05) 50%, rgba(255,72,1,0.1) 100%)",
                "linear-gradient(to bottom, transparent 0%, rgba(255,72,1,0.08) 50%, rgba(255,72,1,0.15) 100%)",
                "linear-gradient(to bottom, transparent 0%, rgba(255,72,1,0.05) 50%, rgba(255,72,1,0.1) 100%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(var(--color-text-primary) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        {/* Footer */}
        <Footer scrollYProgress={smoothProgress} fullHeight />
      </div>
    </div>
  );
}
