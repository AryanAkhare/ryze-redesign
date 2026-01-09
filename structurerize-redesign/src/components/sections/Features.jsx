// ==============================
// Imports
// ==============================
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// ==============================
// Features Section (Page-level)
// ==============================
export default function Features() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative py-32 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden"
    >
      {/* Subtle animated background elements - more balanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ backgroundColor: "var(--color-text-primary)" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ backgroundColor: "var(--color-text-primary)" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black uppercase tracking-[0.3em] mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Features
          </motion.p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, var(--color-text-primary), #ff7b47)" }}>Ryze</span> does for you
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            AI-powered insights across every layer of your ad performance.
          </p>
        </motion.div>

        {/* 5-Card Layout with Enhanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <KeywordOptimizationCard />
            <CreativeGenerationCard />
          </motion.div>

          {/* CENTER COLUMN (Primary Card) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:mt-16"
          >
            <CreativeAnalysisCard tall />
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <AccountAuditsCard />
            <BudgetReallocationCard />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==============================
// Enhanced Card Wrapper with Framer Motion
// ==============================
function CardShell({ title, children, tall }) {
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
      {/* Subtle animated gradient overlay on hover - more balanced */}
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

// ==============================
// Keyword Optimization – Data
// ==============================
const INITIAL_ROWS = [
  { term: "bmw x5 lease", conv: 12, cpa: "$43", final: "KEYWORD" },
  { term: "cheap bmw parts", conv: 0, cpa: "$150", final: "NEGATIVE" },
  { term: "2025 bmw i4 price", conv: 8, cpa: "$35", final: "KEYWORD" },
  { term: "audi q7 vs bmw", conv: 1, cpa: "$85", final: "NEGATIVE" },
  { term: "bmw service near me", conv: 15, cpa: "$28", final: "KEYWORD" },
  { term: "free bmw wallpaper", conv: 0, cpa: "$0", final: "PENDING" },
  { term: "bmw m3 test drive", conv: 6, cpa: "$55", final: "KEYWORD" },
];

// ==============================
// Enhanced Keyword Optimization Card
// ==============================
function KeywordOptimizationCard() {
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

// ==============================
// Enhanced Status Badge Component
// ==============================
function StatusBadge({ status }) {
  if (status === "PENDING")
    return <Badge variant="gray">⏳ Pending</Badge>;

  if (status === "SCANNING")
    return <Badge variant="blue" pulse>🔍 Scanning</Badge>;

  if (status === "KEYWORD")
    return <Badge variant="green">✓ Keyword</Badge>;

  if (status === "NEGATIVE")
    return <Badge variant="red">✕ Negative</Badge>;

  return null;
}

function Badge({ children, variant, pulse }) {
  const getStyle = () => {
    switch(variant) {
      case "gray":
        return { className: "bg-gray-100 text-gray-600 border-gray-200" };
      case "blue":
        return { 
          className: "border",
          style: { 
            backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
            color: "var(--color-text-primary)",
            borderColor: "rgba(var(--color-primary-rgb), 0.2)"
          }
        };
      case "green":
        return { 
          className: "border",
          style: { 
            backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
            color: "var(--color-text-primary)",
            borderColor: "rgba(var(--color-primary-rgb), 0.3)"
          }
        };
      case "red":
        return { className: "bg-red-50 text-red-600 border-red-200" };
      default:
        return { className: "" };
    }
  };

  const styleProps = getStyle();

  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className={`
        flex items-center justify-center gap-1
        text-xs px-3 py-1.5 rounded-full font-bold
        border
        ${styleProps.className}
        ${pulse ? "animate-pulse" : ""}
      `}
      style={styleProps.style}
    >
      {children}
    </motion.span>
  );
}

// ==============================
// Enhanced Creative Analysis Card - Color Balanced
// ==============================
function CreativeAnalysisCard({ tall }) {
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
            style={{ "--hover-border": "rgba(var(--color-primary-rgb), 0.3)" }}
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

// ==============================
// Enhanced Account Audits Card
// ==============================
function AccountAuditsCard() {
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

// ==============================
// Enhanced Budget Reallocation Card - Color Balanced
// ==============================
function BudgetReallocationCard() {
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

// ==============================
// Enhanced Creative Generation Card
// ==============================
function CreativeGenerationCard() {
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
