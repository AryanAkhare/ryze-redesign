import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function FooterMetricCard({ title, value, invert }) {
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
