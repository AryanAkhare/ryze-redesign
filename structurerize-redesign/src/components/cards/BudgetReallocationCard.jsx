import { motion } from "framer-motion";
import CardShell from "./CardShell";

export default function BudgetReallocationCard() {
  const platforms = [
    { name: "LinkedIn", amount: "$1,250", multiplier: "3.5x", opacity: 1 },
    { name: "Google", amount: "$2,100", multiplier: "2.4x", opacity: 0.9 },
    { name: "Meta", amount: "$1,800", multiplier: "2.8x", opacity: 0.8 },
    { name: "Reddit", amount: "$950", multiplier: "1.9x", opacity: 0.7 },
  ];

  return (
    <CardShell title="Budget reallocation">
      <ul className="space-y-4">
        {platforms.map((platform, index) => (
          <motion.li
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group/item p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.3)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = ""}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-900 transition-colors group-hover/item:text-[var(--color-text-primary)]">
                {platform.name}
              </span>
              <motion.span
                className="px-2 py-1 rounded-lg text-white text-xs font-black"
                style={{ backgroundImage: `linear-gradient(to right, var(--color-text-primary), #ff7b47)` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {platform.multiplier}
              </motion.span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-black text-gray-900">{platform.amount}</span>
              <motion.div
                className="h-2 w-24 rounded-full shadow-md"
                style={{ 
                  backgroundImage: `linear-gradient(to right, var(--color-text-primary), #ff7b47)`,
                  transformOrigin: "left"
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </CardShell>
  );
}
