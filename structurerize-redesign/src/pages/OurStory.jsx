import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Footer from "../components/layout/Footer";

function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms with different speeds for depth
  const heroY = useTransform(smoothProgress, [0, 0.5], [0, -150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);
  
  const section1Y = useTransform(smoothProgress, [0.2, 0.6], [80, -80]);
  const section2Y = useTransform(smoothProgress, [0.4, 0.8], [100, -100]);
  const section3Y = useTransform(smoothProgress, [0.6, 1], [120, -120]);
  
  // Background parallax
  const bgY = useTransform(smoothProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden"
      >
        {/* Parallax background layers */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"
        />
        
        {/* Animated background elements with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ 
              y: useTransform(smoothProgress, [0, 1], [0, -300]),
              backgroundColor: "var(--color-text-primary)"
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          />
          <motion.div
            style={{ 
              y: useTransform(smoothProgress, [0, 1], [0, -200]),
              backgroundColor: "var(--color-text-primary)"
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black uppercase tracking-[0.3em] mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Our Story
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8"
          >
            <span className="text-gray-900">We built the ads</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, var(--color-text-primary), #ff7b47)" }}>
              manager we always wanted
            </span>
          </motion.h1>
        </div>
      </motion.section>

      {/* Section 1: About Ryze - We've run ads */}
      <motion.section
        style={{ y: section1Y }}
        className="relative py-32 md:py-40 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4801] mb-6">
              About Ryze
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
              We&apos;ve run ads at Google, DTC brands, big companies, small agencies.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Late nights. Tight budgets. Impossible targets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 p-8 md:p-12 bg-gray-50 rounded-3xl border border-gray-200"
          >
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
              We know the truth: <span style={{ color: "var(--color-text-primary)" }}>most ads lose money</span>. Not because people are bad at marketing. Because the work is too manual, too slow, too scattered.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: So we moved to San Francisco */}
      <motion.section
        style={{ y: section2Y }}
        className="relative py-32 md:py-40 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4801] mb-6">
              About Ryze
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
              So we moved to San Francisco and built Ryze.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white rounded-3xl border border-gray-200 shadow-lg"
            >
              <p className="text-xl font-bold text-gray-900 mb-4">
                Worked with the best agencies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learned what actually moves the needle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-3xl text-white shadow-xl"
              style={{ backgroundImage: "linear-gradient(to bottom right, var(--color-text-primary), #ff7b47)" }}
            >
              <p className="text-xl font-bold mb-4">
                Then built AI to do exactly that.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                It watches your campaigns, fixes what&apos;s broken, scales what&apos;s working. Every day. Without you.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: One of our co-founders */}
      <motion.section
        style={{ y: section3Y }}
        className="relative py-32 md:py-40 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4801] mb-6">
              About Ryze
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
              One of our co-founders previously ran an ecomm brand.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mt-16 p-12 md:p-16 bg-gray-900 rounded-3xl text-white"
          >
            <p className="text-3xl md:text-4xl font-black leading-tight mb-6">
              Not magic. Just the boring stuff done faster and better than any human can.
            </p>
            <div className="h-1 w-24 rounded-full mb-8" style={{ backgroundColor: "var(--color-text-primary)" }} />
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Ads that make money.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mt-2">
              The way it should&apos;ve always worked.
            </p>
          </motion.div>
        </div>
      </motion.section>

      

      {/* Transition Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-32 bg-gradient-to-b from-white via-gray-50 to-[#050505]"
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(to bottom, transparent, rgba(var(--color-primary-rgb), 0.05), rgba(var(--color-primary-rgb), 0.1))" }}
        />
      </motion.div>

      <Footer scrollYProgress={smoothProgress} fullHeight={true} />
    </div>
  );
}

export default OurStory;
