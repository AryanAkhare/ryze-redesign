import React from "react";
import { motion, useTransform } from "framer-motion";

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
            <AccountsCard />
          </motion.div>

          {/* Metric Cards Row - Side by Side */}
          <motion.div variants={fadeInUp} className="flex gap-4 md:col-span-2">
            <MetricCard 
              title="Avg. ROAS" 
              value="3.1x" 
              invert={true} 
            />
            <MetricCard 
              title="Target CPA" 
              value="$23.4" 
              invert={false} 
            />
          </motion.div>

          {/* Creative Engine Card */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <CreativeOptimizationCard />
          </motion.div>

          {/* Action Center Card */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <ImprovementsCard />
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
                  absolute left-5 top-1/2 -translate-y-1/2
                  px-2
                  text-base font-medium
                  text-gray-400
                  bg-[#050505] 
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

// --- SUBCOMPONENTS ---

/**
 * MetricCard: High-impact numerical display with Inversion Hover
 */
function MetricCard({ title, value, invert }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ scale: 1.03, y: -4 }}
      style={invert ? {
        backgroundColor: "var(--color-text-primary)",
        borderColor: "var(--color-text-primary)",
        boxShadow: "0 20px 40px -12px rgba(var(--color-primary-rgb), 0.4)",
      } : {
        boxShadow: "0 20px 40px -12px rgba(var(--color-primary-rgb), 0.2)",
      }}
      onMouseEnter={(e) => {
        if (invert) {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "var(--color-text-primary)";
          e.currentTarget.style.borderColor = "white";
        } else {
          e.currentTarget.style.borderColor = "var(--color-text-primary)";
          e.currentTarget.style.backgroundColor = "rgba(var(--color-primary-rgb), 0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (invert) {
          e.currentTarget.style.backgroundColor = "var(--color-text-primary)";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.borderColor = "var(--color-text-primary)";
        } else {
          e.currentTarget.style.borderColor = "";
          e.currentTarget.style.backgroundColor = "";
        }
      }}
      className={`group relative rounded-3xl p-6 flex-1 overflow-hidden transition-all duration-500 border cursor-pointer ${
        invert 
        ? "text-white" 
        : "bg-white/5 border-white/10 text-white backdrop-blur-sm"
      }`}
    >
      {/* Animated background glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(var(--color-primary-rgb), ${invert ? 0.2 : 0.1}), transparent)`,
        }}
      />
      
      <p className={`relative z-10 text-[9px] uppercase tracking-[0.2em] font-black transition-colors duration-300 ${invert ? "opacity-90 group-hover:opacity-100" : "text-gray-400 group-hover:text-gray-300"}`}>
        {title}
      </p>
      <div 
        className={`relative z-10 mt-2 text-4xl font-black tracking-tighter transition-all duration-300 ${invert ? "" : ""}`}
        onMouseEnter={(e) => { if (!invert) e.currentTarget.style.color = "var(--color-text-primary)"; }}
        onMouseLeave={(e) => { if (!invert) e.currentTarget.style.color = ""; }}
      >
        {value}
      </div>
      
      <motion.div 
        style={{
          color: invert ? "rgba(255,255,255,0.2)" : "rgba(var(--color-primary-rgb), 0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = invert ? "rgba(var(--color-primary-rgb), 0.4)" : "rgba(var(--color-primary-rgb), 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = invert ? "rgba(255,255,255,0.2)" : "rgba(var(--color-primary-rgb), 0.2)";
        }}
        className="absolute top-4 right-4 transition-all duration-300"
        whileHover={{ rotate: 180, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/**
 * AccountsCard: Integration status with Hover Reveal
 */
function AccountsCard() {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -2 }}
      className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 group"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.5)";
        e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(var(--color-primary-rgb), 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--color-text-primary)" }}></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "var(--color-text-primary)", boxShadow: "0 0 8px var(--color-text-primary)" }}></span>
          </div>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase group-hover:text-gray-300 transition-colors">Live Integrations</p>
        </div>
        <div 
          className="text-[10px] font-bold text-white/50 border border-white/10 px-3 py-1.5 rounded-lg bg-white/5 transition-all duration-300"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.3)";
            e.currentTarget.style.color = "var(--color-text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "";
            e.currentTarget.style.color = "";
          }}
        >
          8ms Latency
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Google", icon: "G" },
          { label: "Meta", icon: "M" },
          { label: "TikTok", icon: "T" },
          { label: "Shopify", icon: "S" }
        ].map((item) => (
          <motion.div 
            key={item.label}
            whileHover={{ scale: 1.08, y: -4, backgroundColor: "rgba(255, 255, 255, 1)" }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-text-primary)";
              e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.5)";
              e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(var(--color-primary-rgb), 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "";
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
            className="bg-white/5 rounded-2xl p-4 border border-white/5 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center group/item"
          >
            <motion.div 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-sm mb-2 transition-all duration-300 group-hover/item:text-white group-hover/item:scale-110"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-text-primary)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--color-primary-rgb), 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
            </motion.div>
            <p className="text-[10px] font-black uppercase tracking-tighter transition-colors group-hover/item:text-[var(--color-text-primary)]">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * CreativeOptimizationCard: Visual engine display with Scanner
 */
function CreativeOptimizationCard() {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group rounded-3xl p-[1px] shadow-xl h-full transition-all duration-500"
      style={{
        backgroundImage: "linear-gradient(to bottom right, rgba(var(--color-primary-rgb), 0.2), rgba(var(--color-primary-rgb), 0.1), transparent)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(var(--color-primary-rgb), 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div className="rounded-[23px] bg-[#0a0a0a] p-6 overflow-hidden relative h-full flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Creative Engine</p>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-text-primary)", boxShadow: "0 0 8px var(--color-text-primary)" }} />
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.05, x: 4 }}
          className="relative z-10 bg-white/[0.03] rounded-2xl p-5 border border-white/10 flex justify-between items-center group-hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "";
          }}
        >
          <div className="flex gap-4 items-center">
            <motion.div 
              className="w-12 h-12 rounded-lg opacity-90"
              style={{
                backgroundImage: "linear-gradient(to top right, var(--color-text-primary), #ff7b47)",
                boxShadow: "0 0 20px rgba(var(--color-primary-rgb), 0.4)",
              }}
              animate={{ 
                boxShadow: [
                  "0_0_20px_rgba(255,72,1,0.4)",
                  "0_0_30px_rgba(255,72,1,0.6)",
                  "0_0_20px_rgba(255,72,1,0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-black group-hover:text-gray-400 transition-colors">Best Performer</p>
              <p className="text-sm font-bold text-white tracking-tight transition-colors group-hover:text-[var(--color-text-primary)]">Main_Hero_V2.mp4</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            
            
          </div>
        </motion.div>

        {/* Animated AI Scanning Line */}
        <motion.div 
          animate={{ y: [0, 150, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent to-transparent z-0 blur-[1px]"
          style={{ backgroundImage: "linear-gradient(to right, transparent, rgba(var(--color-primary-rgb), 0.8), transparent)" }}
        />
      </div>
    </motion.div>
  );
}

/**
 * ImprovementsCard: AI Recommendation List with Hover Inversion
 */
function ImprovementsCard() {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -4, scale: 1.02 }}
      className="rounded-3xl bg-white/5 border border-white/10 p-8 relative overflow-hidden group shadow-2xl h-full transition-all duration-500 hover:bg-white/[0.08]"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.5)";
        e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(var(--color-primary-rgb), 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Background gradient on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ backgroundImage: "linear-gradient(to bottom right, rgba(var(--color-primary-rgb), 0.05), transparent)" }}
      />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <motion.p 
          className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 transition-colors duration-300 group-hover:text-[var(--color-text-primary)]"
          whileHover={{ x: 4 }}
        >
          <motion.span 
            className="text-lg"
            style={{ color: "var(--color-text-primary)" }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            ✦
          </motion.span>
          AI Action Center
        </motion.p>
        <motion.span 
          className="text-[10px] text-white px-3 py-1 rounded-lg font-black"
          style={{
            backgroundColor: "var(--color-text-primary)",
            boxShadow: "0 0 15px rgba(var(--color-primary-rgb), 0.5)",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          LIVE
        </motion.span>
      </div>

      <div className="space-y-5 relative z-10">
        {[
          "Shift 20% budget to Meta Ads",
          "Refresh creative: Frequency fatigue",
          "Auto-bid: Competitive gap detected"
        ].map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 8, scale: 1.02 }}
            className="flex gap-4 items-center group/item cursor-pointer transition-all duration-300"
          >
            <motion.div 
              className="flex-shrink-0 w-2 h-2 rounded-full"
              style={{
                backgroundColor: "var(--color-text-primary)",
                boxShadow: "0 0 12px var(--color-text-primary)",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              whileHover={{ scale: 1.5 }}
            />
            <p className="text-[11px] leading-relaxed text-gray-400 group-hover/item:text-white font-bold transition-colors duration-300 group-hover:text-[var(--color-text-primary)]">{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}