import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function FooterAccountsCard() {
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
