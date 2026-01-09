import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardShell from "./CardShell";
import StatusBadge from "./StatusBadge";

const INITIAL_ROWS = [
  { term: "bmw x5 lease", conv: 12, cpa: "$43", final: "KEYWORD" },
  { term: "cheap bmw parts", conv: 0, cpa: "$150", final: "NEGATIVE" },
  { term: "2025 bmw i4 price", conv: 8, cpa: "$35", final: "KEYWORD" },
  { term: "audi q7 vs bmw", conv: 1, cpa: "$85", final: "NEGATIVE" },
  { term: "bmw service near me", conv: 15, cpa: "$28", final: "KEYWORD" },
  { term: "free bmw wallpaper", conv: 0, cpa: "$0", final: "PENDING" },
  { term: "bmw m3 test drive", conv: 6, cpa: "$55", final: "KEYWORD" },
];

export default function KeywordOptimizationCard() {
  const [rows, setRows] = useState(
    INITIAL_ROWS.map((r) => ({ ...r, status: "PENDING" }))
  );

  useEffect(() => {
    let timers = [];

    function runCycle() {
      setRows(INITIAL_ROWS.map((r) => ({ ...r, status: "PENDING" })));

      INITIAL_ROWS.forEach((row, index) => {
        timers.push(
          setTimeout(() => {
            setRows((prev) =>
              prev.map((r, i) =>
                i === index ? { ...r, status: "SCANNING" } : r
              )
            );
          }, 600 + index * 400)
        );

        timers.push(
          setTimeout(() => {
            setRows((prev) =>
              prev.map((r, i) =>
                i === index ? { ...r, status: row.final } : r
              )
            );
          }, 2000 + index * 400)
        );
      });

      timers.push(setTimeout(runCycle, 5000));
    }

    runCycle();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <CardShell title="Keyword optimization">
      <ul className="space-y-2 text-sm">
        {rows.map((row, index) => (
          <motion.li
            key={row.term}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 4, scale: 1.02 }}
            className={`
              group/item
              grid grid-cols-[1fr_42px_60px_96px]
              items-center gap-3
              px-4 py-3
              rounded-xl
              bg-gradient-to-r from-white to-gray-50/50
              border border-gray-100
              transition-all duration-300
              hover:bg-gradient-to-r hover:to-white
              hover:shadow-md
              ${
                row.status === "PENDING"
                  ? "opacity-50"
                  : "opacity-100"
              }
            `}
          >
            <span className="truncate font-semibold text-gray-900 transition-colors group-hover/item:text-[var(--color-text-primary)]">
              {row.term}
            </span>

            <motion.span
              className={`text-xs font-bold ${
                row.conv > 0 ? "text-green-600" : "text-gray-400"
              }`}
              animate={row.conv > 0 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {row.conv}
            </motion.span>

            <span className="text-xs font-bold text-gray-700">
              {row.cpa}
            </span>

            <StatusBadge status={row.status} />
          </motion.li>
        ))}
      </ul>
    </CardShell>
  );
}
