export default function StatCard() {
  return (
    <div
      className="
        group
        h-full rounded-2xl
        bg-white
        px-6 py-5
        flex items-center
        transition-all duration-300 ease-out
        shadow-[0_8px_22px_rgba(0,0,0,0.08)]
        hover:shadow-[0_16px_40px_color-mix(in_srgb,var(--color-text-primary)_18%,transparent)]
      "
    >
      {/* LEFT: Metric */}
      <div
        className="
          flex-shrink-0 pr-6
          border-r border-black/5
          transition-colors duration-300
          group-hover:border-[var(--color-text-primary)]
        "
      >
        <p className="text-4xl font-black tracking-tight">
          +63%
        </p>
      </div>

      {/* RIGHT: Description */}
      <div className="pl-6">
        <p className="text-sm font-extrabold text-gray-900 leading-snug">
          Better ROAS
        </p>
        <p className="text-sm text-gray-500 leading-snug mt-1 max-w-[15rem]">
          After switching to AI agents
        </p>
      </div>
    </div>
  );
}
