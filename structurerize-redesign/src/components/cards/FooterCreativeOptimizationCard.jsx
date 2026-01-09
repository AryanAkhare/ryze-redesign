import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function FooterCreativeOptimizationCard() {
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
                  "0 0 20px rgba(var(--color-primary-rgb), 0.4)",
                  "0 0 30px rgba(var(--color-primary-rgb), 0.6)",
                  "0 0 20px rgba(var(--color-primary-rgb), 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-black group-hover:text-gray-400 transition-colors">Best Performer</p>
              <p className="text-sm font-bold text-white tracking-tight transition-colors group-hover:text-[var(--color-text-primary)]">Main_Hero_V2.mp4</p>
            </div>
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
