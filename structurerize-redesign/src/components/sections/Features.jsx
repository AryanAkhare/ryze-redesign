// ==============================
// Imports
// ==============================
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KeywordOptimizationCard from "../cards/KeywordOptimizationCard";
import CreativeAnalysisCard from "../cards/CreativeAnalysisCard";
import AccountAuditsCard from "../cards/AccountAuditsCard";
import BudgetReallocationCard from "../cards/BudgetReallocationCard";
import CreativeGenerationCard from "../cards/CreativeGenerationCard";

// ==============================
// Features Section (Page-level)
// ==============================
export default function Features() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative py-32 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ backgroundColor: "var(--color-text-primary)" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ backgroundColor: "var(--color-text-primary)" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black uppercase tracking-[0.3em] mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Features
          </motion.p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, var(--color-text-primary), #ff7b47)" }}>Ryze</span> does for you
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            AI-powered insights across every layer of your ad performance.
          </p>
        </motion.div>

        {/* 5-Card Layout with Enhanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <KeywordOptimizationCard />
            <CreativeGenerationCard />
          </motion.div>

          {/* CENTER COLUMN (Primary Card) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:mt-16"
          >
            <CreativeAnalysisCard tall />
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <AccountAuditsCard />
            <BudgetReallocationCard />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
