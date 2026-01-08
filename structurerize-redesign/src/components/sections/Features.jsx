// ==============================
// Imports
// ==============================
import { useEffect, useState ,useRef} from "react";


// ==============================
// Features Section (Page-level)
// File later: sections/Features/Features.jsx
// ==============================
export default function Features() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            What <span className="text-[var(--color-text-primary)]">Ryze </span>does for you
          </h2>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)]">
            AI-powered insights across every layer of your ad performance.
          </p>
        </div>

        {/* 5-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            <KeywordOptimizationCard />
            <CreativeGenerationCard />
          </div>

          {/* CENTER COLUMN (Primary Card) */}
          <div className="lg:mt-16">
            <CreativeAnalysisCard tall />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">
            <AccountAuditsCard />
            <BudgetReallocationCard />
          </div>

        </div>
      </div>
    </section>
  );
}
// ==============================
// Shared Card Wrapper
// ==============================
function CardShell({ title, children, tall }) {
  return (
    <div
      className={`
        rounded-3xl
        bg-white
        border border-black/5
        shadow-[0_12px_40px_color-mix(in_srgb,var(--color-text-primary)_18%,transparent)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_28px_60px_color-mix(in_srgb,var(--color-text-primary)_28%,transparent)]
        ${tall ? "h-[560px]" : "h-[380px]"}
      `}
    >
      {/* Card Header */}
      <div className="px-5 pt-5 pb-3 rounded-t-3xl">
        <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-text-accent)]">
          {title}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/5 mx-5" />

      {/* Card Content */}
      <div className="p-5 h-full">
        {children}
      </div>
    </div>
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
// Keyword Optimization Card
// ==============================
function KeywordOptimizationCard() {
  const [rows, setRows] = useState(
    INITIAL_ROWS.map((r) => ({ ...r, status: "PENDING" }))
  );

  useEffect(() => {
    let timers = [];

    function runCycle() {
      // Step 1: reset all to PENDING
      setRows(INITIAL_ROWS.map((r) => ({ ...r, status: "PENDING" })));

      // Step 2: animate each row
      INITIAL_ROWS.forEach((row, index) => {
        // SCANNING
        timers.push(
          setTimeout(() => {
            setRows((prev) =>
              prev.map((r, i) =>
                i === index ? { ...r, status: "SCANNING" } : r
              )
            );
          }, 600 + index * 400)
        );

        // FINAL STATE
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

      // Step 3: restart cycle after all finish
      timers.push(
        setTimeout(runCycle, 5000)
      );
    }

    runCycle();

    // Cleanup (VERY IMPORTANT)
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <CardShell title="Keyword optimization">
      <ul className="space-y-1 text-sm">
        {rows.map((row) => (
          <li
            key={row.term}
            className={`
              grid grid-cols-[1fr_42px_60px_96px]
              items-center gap-2
              px-3 py-2
              rounded-lg
              bg-white
              transition-all duration-500
              ${
                row.status === "PENDING"
                  ? "opacity-50"
                  : "opacity-100"
              }
            `}
          >
            <span className="truncate font-medium">{row.term}</span>

            <span
              className={`text-xs font-semibold ${
                row.conv > 0 ? "text-green-600" : "text-gray-400"
              }`}
            >
              {row.conv}
            </span>

            <span className="text-xs font-semibold text-gray-600">
              {row.cpa}
            </span>

            <StatusBadge status={row.status} />
          </li>
        ))}
      </ul>
    </CardShell>
  );
}


// ==============================
// Status Badge Component
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
  const styles = {
    gray: "bg-gray-100 text-gray-600",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        flex items-center justify-center gap-1
        text-xs px-3 py-1 rounded-full font-semibold
        ${styles[variant]}
        ${pulse ? "animate-pulse" : ""}
      `}
    >
      {children}
    </span>
  );
}

// ==============================
// Creative Analysis Card
// ==============================
function CreativeAnalysisCard({ tall }) {
  return (
    <CardShell title="Creative analysis" tall={tall}>
      <div className="space-y-4 text-sm">
        <Score label="Visual" value={89} />
        <Score label="Copy" value={68} />
        <Score label="CTA" value={43} />
      </div>
    </CardShell>
  );
}


// ==============================
// Reusable Score Bar
// ==============================
function Score({ label, value }) {
  return (
    <div className="bg-gray-50 p-3 rounded-xl">
      <div className="flex justify-between font-semibold">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-2 h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-black rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
// ==============================
// Account Audits Card
// ==============================
function AccountAuditsCard() {
  return (
    <CardShell title="Account audits">
      <ul className="space-y-3 text-sm">
        <AuditItem label="Bidding" value={78} />
        <AuditItem label="Landing page" value={82} />
        <AuditItem label="Conversion" value={74} />
        <AuditItem label="Audience" value={81} />
      </ul>
    </CardShell>
  );
}

function AuditItem({ label, value }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className="font-bold">{value}%</span>
    </div>
  );
}
// ==============================
// Budget Reallocation Card
// ==============================
function BudgetReallocationCard() {
  return (
    <CardShell title="Budget reallocation">
      <ul className="space-y-3 text-sm">
        {["LinkedIn", "Google", "Meta", "Reddit"].map((p) => (
          <li key={p} className="flex justify-between">
            <span>{p}</span>
            <span className="font-semibold">$1,250</span>
          </li>
        ))}
      </ul>
    </CardShell>
  );
}
// ==============================
// Creative Generation Card
// ==============================
function CreativeGenerationCard() {
  return (
    <CardShell title="Creative generation">
      <div className="h-full rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-500">
        Creative generation preview
      </div>
    </CardShell>
  );
}
