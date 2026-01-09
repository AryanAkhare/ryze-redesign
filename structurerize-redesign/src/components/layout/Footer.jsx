import React from "react";
import { motion, useTransform } from "framer-motion";
import FooterMetricCard from "../cards/FooterMetricCard";
import FooterAccountsCard from "../cards/FooterAccountsCard";
import FooterCreativeOptimizationCard from "../cards/FooterCreativeOptimizationCard";
import FooterImprovementsCard from "../cards/FooterImprovementsCard";

/**
 * ANIMATION VARIANTS
 * Using explicit hidden/visible keys to ensure Framer Motion 
 * correctly staggers the children in the left column.
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 } 
  }
};

/**
 * Footer Component with Parallax Support
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} [props.scrollYProgress] - Scroll progress for parallax effects
 * @param {boolean} [props.fullHeight=true] - Whether footer should take full viewport height
 */
export default function Footer({ scrollYProgress, fullHeight = true }) {
  // Parallax transforms for background elements
  const bgGlow1Y = scrollYProgress 
    ? useTransform(scrollYProgress, [0.85, 1], [0, -100])
    : undefined;
  const bgGlow2Y = scrollYProgress 
    ? useTransform(scrollYProgress, [0.85, 1], [0, -150])
    : undefined;
  const gridY = scrollYProgress 
    ? useTransform(scrollYProgress, [0.85, 1], [0, -50])
    : undefined;
  const contentY = scrollYProgress 
    ? useTransform(scrollYProgress, [0.9, 1], [30, 0])
    : undefined;
  const footerOpacity = scrollYProgress 
    ? useTransform(scrollYProgress, [0.85, 0.95], [0, 1])
    : undefined;

  return (
    <motion.section 
      style={{ opacity: footerOpacity }}
      className={`
        relative bg-[#050505] text-white overflow-hidden
        pt-16 md:pt-20 pb-5
        ${fullHeight ? 'min-h-screen' : 'py-20'}
        flex flex-col
      `}
    >
    


      {/* 1. BACKGROUND DESIGN: BRAND ACCENT GLOWS & GRID with Parallax */}
      <motion.div 
        style={{ 
          y: gridY,
          backgroundImage: `radial-gradient(var(--color-text-primary) 0.5px, transparent 0.5px)`, 
          backgroundSize: '40px 40px' 
        }}
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
      ></motion.div>
      
      {/* Soft Brand Ambient Glows with Parallax */}
      <motion.div 
        style={{ y: bgGlow1Y, backgroundColor: "rgba(var(--color-primary-rgb), 0.1)" }}
        className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] blur-[120px] rounded-full pointer-events-none"
      ></motion.div>
      <motion.div 
        style={{ y: bgGlow2Y, backgroundColor: "rgba(var(--color-primary-rgb), 0.05)" }}
        className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] blur-[100px] rounded-full pointer-events-none"
      ></motion.div>

      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        
        {/* LEFT COLUMN — INTERACTIVE BENTO SYSTEM CARDS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1 w-full"
        >
          {/* Managed Accounts Card - Full Span */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <FooterAccountsCard />
          </motion.div>

          {/* Metric Cards Row - Side by Side */}
          <motion.div variants={fadeInUp} className="flex gap-4 md:col-span-2">
            <FooterMetricCard 
              title="Avg. ROAS" 
              value="3.1x" 
              invert={true} 
            />
            <FooterMetricCard 
              title="Target CPA" 
              value="$23.4" 
              invert={false} 
            />
          </motion.div>

          {/* Creative Engine Card */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <FooterCreativeOptimizationCard />
          </motion.div>

          {/* Action Center Card */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <FooterImprovementsCard />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — HERO CTA & INPUT */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:pl-12 lg:sticky lg:top-24 order-1 lg:order-2 text-center lg:text-left items-center lg:items-start"
        >
          <p className="uppercase tracking-[0.3em] text-xs font-bold mb-6" style={{ color: "var(--color-text-primary)" }}>
            Next Gen of Marketing
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
            Let AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, var(--color-text-primary), #ff7b47)" }}>
              Run Your
            </span> <br />
            Ads
          </h2>

          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-sm leading-relaxed">
            Scale your brand with autonomous creative testing and real-time budget optimization.
          </p>

          {/* INPUT & BUTTON GROUP */}
          <div className="relative flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-xl">
            {/* INPUT CONTAINER */}
            <div className="relative flex-grow group">
              <input
                type="email"
                required
                placeholder=" "
                className="
                  peer w-full
                  px-6 py-4
                  text-lg font-medium
                  bg-white/5
                  backdrop-blur-sm
                  text-white
                  border-2 border-white/10
                  rounded-2xl
                  outline-none
                  transition-all duration-300
                  hover:border-white/20
                  focus:bg-white/10
                  focus:ring-4
                  focus:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)]
                  focus:border-[var(--color-text-primary)]
                "
              />
              
              {/* FLOATING LABEL - BG matches section black #050505 */}
              <label
                className="
                  absolute left-5 top-12 -translate-y-7
                  px-2
                  text-base font-medium
                  text-gray-400
                  bg-[transparent] 
                  pointer-events-none
                  transition-all duration-300 ease-in-out
                  peer-focus:top-0
                  peer-focus:text-sm
                  peer-focus:font-bold
                  peer-focus:text-[var(--color-text-primary)]
                  peer-not-placeholder-shown:top-0
                  peer-not-placeholder-shown:text-sm
                  peer-not-placeholder-shown:text-[var(--color-text-primary)]
                "
              >
                Email address
              </label>
              
              {/* Input glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 blur-xl opacity-0 peer-focus:opacity-100"
                style={{ backgroundImage: "linear-gradient(to right, transparent, rgba(var(--color-primary-rgb), 0.1), transparent)" }}
              />
            </div>

            {/* ENHANCED CTA BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              style={{
                backgroundColor: "var(--color-text-primary)",
                borderColor: "var(--color-text-primary)",
                boxShadow: "0 10px 25px -5px rgba(var(--color-primary-rgb), 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(var(--color-primary-rgb), 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(var(--color-primary-rgb), 0.3)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "var(--color-text-primary)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-text-primary)";
                e.currentTarget.style.color = "white";
              }}
              className="
                relative overflow-hidden
                px-10 py-4
                rounded-2xl
                font-black text-lg
                cursor-pointer
                z-10
                flex items-center justify-center gap-2
                transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                text-white
                border-2
                hover:border-white/20
              "
            >
              <span className="relative z-20 whitespace-nowrap">Scale Now</span>
              <motion.span 
                className="relative z-20 text-xl"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                →
              </motion.span>
              
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              
              {/* Slide-over Transition Layer */}
              <span className="absolute inset-0 bg-black translate-x-[-101%] transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] hover:translate-x-0 -z-10" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* FOOTER NAV - BOTTOM SECTION */}
      <div className="mt-auto backdrop-blur-xl border-t border-white/10 pt-8">
        <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 md:gap-12">
            <a
              href="#"
              className="text-xs md:text-sm font-bold tracking-[0.18em] text-gray-400 uppercase transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-bold tracking-[0.18em] text-gray-400 uppercase transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-bold tracking-[0.18em] text-gray-400 uppercase transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              Terms
            </a>
          </div>

          <p className="text-xs md:text-sm text-gray-500 text-center md:text-right tracking-[0.16em]">
            © 2026 AI AD ENGINE — CRAFTED IN SAN FRANCISCO
          </p>
        </div>
      </div>
    </motion.section>
  );
}
