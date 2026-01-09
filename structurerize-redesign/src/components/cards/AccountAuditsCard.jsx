import { motion } from "framer-motion";
import CardShell from "./CardShell";

export default function AccountAuditsCard() {
  const audits = [
    { label: "Bidding", value: 78 },
    { label: "Landing page", value: 82 },
    { label: "Conversion", value: 74 },
    { label: "Audience", value: 81 },
  ];

  return (
    <CardShell title="Account audits">
      <ul className="space-y-4">
        {audits.map((audit, index) => (
          <motion.li
            key={audit.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 4, scale: 1.02 }}
            className="group/item flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 border border-gray-100 hover:to-white transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(var(--color-primary-rgb), 0.3)";
              e.currentTarget.style.background = "linear-gradient(to right, rgba(var(--color-primary-rgb), 0.05), white)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.background = "";
            }}
          >
            <span className="font-semibold text-gray-700 transition-colors group-hover/item:text-[var(--color-text-primary)]">
              {audit.label}
            </span>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xl font-black text-gray-900">{audit.value}%</span>
              <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundImage: "linear-gradient(to right, var(--color-text-primary), #ff7b47)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${audit.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </CardShell>
  );
}
