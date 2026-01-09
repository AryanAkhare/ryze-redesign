import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import LogoTray from "../components/sections/LogoTray";
import Footer from "../components/layout/Footer";

function CaseStudies() {
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

  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  const caseStudies = [
    {
      client: "Motif",
      title: "Motif used Ryze audits to win new retainers",
      description: "Turned audits into a repeatable sales asset—faster audits, clearer proof, and stronger sales conversations.",
      highlight: "Won new retainers"
    },
    {
      client: "Sanar AI",
      title: "Sanar AI increased Google Search ROAS to 4.3x in 8 weeks",
      description: "Turned category momentum into predictable growth—without adding headcount or slowing product velocity.",
      highlight: "4.3x ROAS"
    },
    {
      client: "Ashley Furniture",
      title: "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
      description: "E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles.",
      highlight: "Autopilot success"
    }
  ];

  const insights = [
    {
      category: "Learn",
      title: "AdGent — the first AI agent to manage paid ads",
      description: "Discover how AdGent transforms paid media management.",
      author: "Ryze Team",
      date: "Jan 15, 2025"
    },
    {
      category: "Learn",
      title: "Account Structure in 2025: Simplify, Don't Complicate",
      description: "The traditional Alpha/Beta account structure is dead. Learn how to restructure for machine learning.",
      author: "Ryze Team",
      date: "2025"
    },
    {
      category: "Learn",
      title: "Ad Creative for AI Search: Earning Clicks When AI Answers First",
      description: "Your creative has to work harder when CTRs are down 40-60%.",
      author: "Ryze Team",
      date: "2025"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ backgroundColor: "var(--color-text-primary)" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6"
          >
            <span className="text-gray-900">Top brands improve</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, var(--color-text-primary), #ff7b47)" }}>
              ROAS with Ryze
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of brands simplifying ad management with AI
          </motion.p>

          {/* CTA Form */}
          <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xl flex gap-4 items-center">

            {/* FLOATING INPUT */}
            <div className="relative flex-1">
              <input
                type="email"
                required
                placeholder=" "
                className="
                  peer w-full
                  px-6 py-4
                  text-lg font-semibold
                  bg-transparent
                  text-[var(--color-text-primary)]
                  border-2 border-[var(--color-text-secondary)]
                  rounded-2xl
                  outline-none
                  transition-all duration-300
                  shadow-[3px_4px_0_var(--color-text-primary)]
                  focus:shadow-[6px_7px_0_var(--color-text-primary)]
                "
              />
              <label
                className="
                  absolute left-5 top-1/2 -translate-y-1/2
                  px-2
                  text-sm font-bold
                  text-[var(--color-text-secondary)]
                  bg-[transparent]
                  pointer-events-none
                  transition-all duration-300
                  peer-focus:top-[-12px]
                  peer-focus:text-[var(--color-text-primary)]
                  peer-not-placeholder-shown:top-[-12px]
                  peer-not-placeholder-shown:text-[var(--color-text-primary)]
                "
              >
                Email address
              </label>
            </div>

            {/* CTA */}
            <button
  className="
    relative overflow-hidden
    px-7 py-4
    rounded-2xl
    font-black
    text-white
    bg-[var(--color-text-primary)]
    cursor-pointer

    transition-all duration-300 ease-out
    hover:translate-y-[-1px]

    before:absolute before:inset-0
    before:bg-black
    before:translate-x-[-100%]
    before:transition-transform before:duration-300 before:ease-out
    hover:before:translate-x-0

    before:z-0
  "
>
  <span className="relative z-10">
    Audit Account
  </span>
</button>

          </div>
        </div>

        </div>
      </motion.section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <LogoTray />
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] mb-4" style={{ color: "var(--color-text-primary)" }}>
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Real results from real brands
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.3)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ""}
              >
                {/* Client Logo Placeholder */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-2xl font-black text-gray-400 transition-all duration-300"
                  style={{ backgroundImage: "linear-gradient(to bottom right, rgb(243, 244, 246), rgb(229, 231, 235))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundImage = "linear-gradient(to bottom right, rgba(var(--color-primary-rgb), 0.1), rgb(255, 247, 237))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundImage = "linear-gradient(to bottom right, rgb(243, 244, 246), rgb(229, 231, 235))";
                  }}
                >
                  {study.client.charAt(0)}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 text-xs font-black uppercase rounded-full mb-4" style={{ backgroundColor: "rgba(var(--color-primary-rgb), 0.1)", color: "var(--color-text-primary)" }}>
                  {study.highlight}
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight transition-colors duration-300 group-hover:text-[var(--color-text-primary)]">
                  {study.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all duration-300" style={{ color: "var(--color-text-primary)" }}>
                  <span>Read case study</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: "linear-gradient(to bottom right, rgba(var(--color-primary-rgb), 0), transparent)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-16"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] mb-4" style={{ color: "var(--color-text-primary)" }}>
                Insights
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Learn
              </h2>
            </div>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="hidden md:flex items-center gap-2 font-bold hover:gap-4 transition-all duration-300"
              style={{ color: "var(--color-text-primary)" }}
            >
              See more
              <span>→</span>
            </motion.a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.3)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ""}
              >
                {/* Category Badge */}
                <div 
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-black uppercase rounded-full mb-6 transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(var(--color-primary-rgb), 0.1)";
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {insight.category}
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight transition-colors duration-300 group-hover:text-[var(--color-text-primary)]">
                  {insight.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {insight.description}
                </p>

                {/* Author & Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black" style={{ backgroundImage: "linear-gradient(to bottom right, var(--color-text-primary), #ff7b47)" }}>
                    R
                  </span>
                  <span>{insight.author}</span>
                  <span>|</span>
                  <span>{insight.date}</span>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black" style={{ backgroundColor: "var(--color-text-primary)" }}>
                    →
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mobile See More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center md:hidden"
          >
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              See more
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Transition to Footer */}
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

export default CaseStudies;
