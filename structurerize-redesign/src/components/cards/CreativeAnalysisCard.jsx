import { motion } from "framer-motion";
import CardShell from "./CardShell";

export default function CreativeAnalysisCard({ tall }) {
  const scores = [
    { label: "Visual", value: 89, opacity: 1 },
    { label: "Copy", value: 68, opacity: 0.8 },
    { label: "CTA", value: 43, opacity: 0.6 },
  ];

  return (
    <CardShell title="Creative analysis" tall={tall}>
      <div className="space-y-6">
        {scores.map((score, index) => (
          <motion.div
            key={score.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="group/score bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.3)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = ""}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-900">{score.label}</span>
              <motion.span
                className="text-2xl font-black bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, var(--color-text-primary), #ff7b47)` }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {score.value}%
              </motion.span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full shadow-lg"
                style={{ backgroundImage: `linear-gradient(to right, var(--color-text-primary), #ff7b47)` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${score.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </CardShell>
  );
}
