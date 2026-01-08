import React from "react";
import { motion } from "framer-motion";

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

export default function Footer() {
  return (
    <section className="
  relative bg-[#050505] text-white overflow-hidden
 pt-16 md:pt-50 pb-5
  min-h-screen
  flex flex-col


">
    


      {/* 1. BACKGROUND DESIGN: BRAND ACCENT GLOWS & GRID */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#FF4801 0.5px, transparent 0.5px)`, 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Soft Brand Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF4801]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#FF4801]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ">
        
        {/* LEFT COLUMN — INTERACTIVE BENTO SYSTEM CARDS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:pl-12 lg:sticky lg:top-24 order-1 lg:order-2 text-center lg:text-left items-center lg:items-start"
        >
          <p className="uppercase tracking-[0.3em] text-xs font-bold text-[#FF4801] mb-6">
            Next Gen of Marketing
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
            Let AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4801] to-[#ff7b47]">
              Run Your
            </span> <br />
            Ads
          </h2>

          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-sm leading-relaxed">
            Scale your brand with autonomous creative testing and real-time budget optimization.
          </p>

          {/* INPUT & BUTTON GROUP */}
          <div className="relative flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-xl group">
            {/* INPUT CONTAINER */}
            <div className="relative flex-grow">
              <input
                type="email"
                required
                placeholder=" "
                className="
                  peer w-full
                  px-6 py-4
                  text-lg font-medium
                  bg-transparent
                  text-white
                  border-2 border-white/10
                  rounded-2xl
                  outline-none
                  transition-all duration-300
                  focus:border-[#FF4801]
                  focus:ring-4 focus:ring-[#FF4801]/10
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
                  peer-focus:text-[#FF4801]
                  peer-focus:font-bold
                  peer-not-placeholder-shown:top-0
                  peer-not-placeholder-shown:text-sm
                  peer-not-placeholder-shown:text-[#FF4801]
                "
              >
                Email address
              </label>
            </div>

            {/* ALIGNED INVERTING BUTTON */}
            <button
              className="
                relative overflow-hidden
                px-10 py-4
                rounded-2xl
                font-black text-lg
                cursor-pointer
                z-10
                flex items-center justify-center
                transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                
                /* Default State */
                bg-[#FF4801]
                text-white
                border-2 border-[#FF4801]

                /* Hover */
                hover:scale-[1.02]
                hover:shadow-[0_15px_30px_-10px_rgba(255,72,1,0.5)]
                
                /* CLICK INVERT EFFECT */
                active:bg-white
                active:text-[#FF4801]
                active:border-white
                active:scale-[0.97]

                /* Slide-over Transition Layer */
                before:absolute before:inset-0
                before:bg-[#000]
                before:translate-x-[-101%]
                before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.87,0,0.13,1)]
                hover:before:translate-x-0
                active:before:opacity-0
                before:-z-10
              "
            >
              <span className="relative z-20 whitespace-nowrap">Scale Now</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER NAV - BOTTOM SECTION */}
      <div
  className="
+   mt-auto
    
    backdrop-blur-xl
    border-white/10
  "
>

  <div
    className="
      max-w-7xl mx-auto px-6 py-6
      flex flex-col md:flex-row
      justify-between items-center
      gap-6
      text-xs md:text-sm
      font-bold
      tracking-[0.18em]
      text-gray-400
      uppercase
    "
  >
    <div className="flex gap-10">
      <a
        href="#"
        className="hover:text-[#FF4801] transition-colors duration-200"
      >
        LinkedIn
      </a>
      <a
        href="#"
        className="hover:text-[#FF4801] transition-colors duration-200"
      >
        Privacy
      </a>
      <a
        href="#"
        className="hover:text-[#FF4801] transition-colors duration-200"
      >
        Terms
      </a>
    </div>

    <p className="text-center md:text-right text-gray-500">
      © 2026 AI AD ENGINE — CRAFTED IN SAN FRANCISCO
    </p>
  </div>
</div>
    </section>
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
      whileHover={{ scale: 1.02 }}
      className={`group relative rounded-3xl p-6 flex-1 overflow-hidden transition-all duration-300 border ${
        invert 
        ? "bg-[#FF4801] border-[#FF4801] text-white hover:bg-white hover:text-[#FF4801] hover:border-white" 
        : "bg-white/5 border-white/10 text-white hover:border-[#FF4801] hover:bg-[#FF4801]/5"
      }`}
    >
      <p className={`relative z-10 text-[9px] uppercase tracking-[0.2em] font-black ${invert ? "opacity-80" : "text-gray-500"}`}>
        {title}
      </p>
      <div className="relative z-10 mt-2 text-4xl font-black tracking-tighter">
        {value}
      </div>
      
      <div className={`absolute top-4 right-4 transition-colors ${invert ? "text-white/20 group-hover:text-[#FF4801]/30" : "text-[#FF4801]/20 group-hover:text-[#FF4801]/50"}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </div>
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
      className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 backdrop-blur-xl shadow-2xl hover:border-[#FF4801]/40 transition-colors group"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4801] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4801]"></span>
          </div>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Live Integrations</p>
        </div>
        <div className="text-[10px] font-bold text-white/40 border border-white/10 px-2 py-1 rounded-md">8ms Latency</div>
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
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#FF4801" }}
            className="bg-white/5 rounded-2xl p-4 border border-white/5 cursor-pointer transition-all flex flex-col items-center justify-center group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black text-xs mb-2 transition-colors group-hover:bg-[#FF4801] group-hover:text-white">
              {item.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-tighter transition-colors">{item.label}</p>
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
      className="group rounded-3xl bg-gradient-to-br from-[#FF4801]/20 to-transparent p-[1px] shadow-xl h-full"
    >
      <div className="rounded-[23px] bg-[#0a0a0a] p-6 overflow-hidden relative h-full flex flex-col justify-between">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Creative Engine</p>
        
        <div className="relative z-10 bg-white/[0.03] rounded-2xl p-5 border border-white/10 flex justify-between items-center group-hover:border-[#FF4801]/30 transition-colors">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#FF4801] to-orange-400 opacity-80 shadow-[0_0_15px_rgba(255,72,1,0.3)]" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-black">Best Performer</p>
              <p className="text-sm font-bold text-white tracking-tight">Main_Hero_V2.mp4</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-[#FF4801] font-black underline decoration-2 underline-offset-4">3.2x</span>
            <span className="text-[8px] text-gray-500 font-bold uppercase">ROAS</span>
          </div>
        </div>

        {/* Animated AI Scanning Line */}
        <motion.div 
          animate={{ y: [0, 150, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF4801]/60 to-transparent z-0"
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
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      className="rounded-3xl bg-white/5 border border-white/10 p-8 relative overflow-hidden group shadow-2xl h-full transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <p className="text-[10px] font-black text-gray-400 group-hover:text-[#FF4801] uppercase tracking-widest flex items-center gap-2 transition-colors">
          <span className="text-[#FF4801] text-lg">✦</span> AI Action Center
        </p>
        <span className="text-[10px] bg-[#FF4801] text-white px-2 py-0.5 rounded font-black animate-pulse group-hover:animate-none">LIVE</span>
      </div>

      <div className="space-y-4">
        {[
          "Shift 20% budget to Meta Ads",
          "Refresh creative: Frequency fatigue",
          "Auto-bid: Competitive gap detected"
        ].map((text, i) => (
          <div key={i} className="flex gap-4 items-center group/item transition-all">
            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF4801] shadow-[0_0_8px_#FF4801]" />
            <p className="text-[11px] leading-relaxed text-gray-400 group-hover:text-[#FF4801] font-bold transition-colors">{text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}