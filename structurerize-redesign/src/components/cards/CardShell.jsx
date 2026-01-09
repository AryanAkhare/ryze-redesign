import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CardShell({ title, children, tall }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`
        group relative
        rounded-3xl
        bg-white
        border border-gray-200/80
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        transition-all duration-500 ease-out
        hover:shadow-[0_20px_50px_rgba(var(--color-primary-rgb),0.12)]
        overflow-hidden
        backdrop-blur-sm
        ${tall ? "h-[560px]" : "h-[380px]"}
      `}
    >
      {/* Subtle animated gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(var(--color-primary-rgb),0.03) 0%, rgba(var(--color-primary-rgb),0) 100%)`,
        }}
      />

      {/* Card Header */}
      <div className="relative px-6 pt-6 pb-4 rounded-t-3xl bg-gradient-to-b from-white to-gray-50/50">
        <motion.p
          className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2"
          style={{ color: "var(--color-text-primary)" }}
          whileHover={{ x: 4 }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-text-primary)" }} />
          {title}
        </motion.p>
      </div>

      {/* Animated Divider */}
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-6"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Card Content */}
      <div className="p-6 h-full overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
