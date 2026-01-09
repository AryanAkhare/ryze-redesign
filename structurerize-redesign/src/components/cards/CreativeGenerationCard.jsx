import { motion } from "framer-motion";
import CardShell from "./CardShell";

export default function CreativeGenerationCard() {
  return (
    <CardShell title="Creative generation">
      <motion.div
        className="relative h-full rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-white border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden group/preview"
        whileHover={{ scale: 1.02 }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-text-primary)"}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = ""}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center p-6">
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg"
            style={{ backgroundImage: "linear-gradient(to bottom right, var(--color-text-primary), #ff7b47)" }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <p className="text-sm font-bold text-gray-600 transition-colors group-hover/preview:text-[var(--color-text-primary)]">
            AI Creative Preview
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Generating variants...
          </p>
        </div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent to-transparent"
          style={{ backgroundImage: "linear-gradient(to right, transparent, var(--color-text-primary), transparent)" }}
          animate={{ y: [0, 280, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </CardShell>
  );
}
