import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function FooterImprovementsCard() {
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
