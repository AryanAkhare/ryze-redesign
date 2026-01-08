export default function FeatureCard({ title, desc }) {
  return (
    <div
  className="
    relative
    bg-[#f5f5f5]
    rounded-3xl
    p-6

    border-2 border-transparent       /* reserve space */
    shadow-[0_18px_40px_rgba(0,0,0,0.08)]

    transition-all duration-300 ease-out
    cursor-pointer

    hover:border-[var(--color-text-primary)]
    hover:shadow-[0_20px_45px_color-mix(in_srgb,var(--color-text-primary)_30%,transparent)]
  "
>

      {/* Header */}
      <h3 className="font-black text-lg mb-4">{title}</h3>

      {/* MOCK UI AREA */}
      <div className="rounded-2xl bg-white p-4 shadow-inner space-y-3">

        {/* CASE 1 — Campaign setup (Ad → Variants) */}
{title.includes("launch") && (
  <div className="space-y-4">

    {/* FLOW HEADER */}
    <div className="flex items-center justify-between px-2">
      <span className="text-xs font-bold tracking-wide text-gray-500 uppercase">
        Winning Ad
      </span>

      <div className="flex-1 mx-4 border-t border-dashed border-gray-300" />

      <span className="text-xs font-bold tracking-wide text-gray-500 uppercase">
        Variants
      </span>
    </div>

    {/* FLOW BODY */}
    <div className="flex items-center gap-4">

      {/* LEFT — Ad */}
      <div
        className="
          h-16 w-28
          rounded-xl
          bg-white
          border border-black/5
          shadow-[0_6px_18px_rgba(0,0,0,0.08)]
          flex items-center justify-center
          text-sm font-extrabold
        "
      >
        Ad
      </div>

      {/* ARROW */}
      <div className="text-gray-400 text-xl font-bold">
        →
      </div>

      {/* RIGHT — Variants */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        <div
          className="
            h-14
            rounded-lg
            bg-gray-100
            border border-black/5
            flex items-center justify-center
            text-xs font-bold text-gray-500
          "
        >
          A
        </div>

        <div
          className="
            h-14
            rounded-lg
            bg-gray-100
            border border-black/5
            flex items-center justify-center
            text-xs font-bold text-gray-500
          "
        >
          B
        </div>
      </div>
    </div>
  </div>
)}

        {/* CASE 2 — Optimization table */}
        {title.includes("optimize") && (
          <>
            <div className="grid grid-cols-4 text-xs font-semibold text-gray-500">
              <span>Campaign</span>
              <span>Conv.</span>
              <span>ROAS</span>
              <span>Action</span>
            </div>

            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="grid grid-cols-4 text-xs items-center gap-2"
              >
                <div className="h-3 rounded bg-gray-200" />
                <div className="h-3 rounded bg-gray-200" />
                <div className="h-3 rounded bg-[var(--color-text-primary)]/60" />
                <div className="h-3 rounded bg-gray-200" />
              </div>
            ))}
          </>
        )}

        {/* CASE 3 — Report / insight panel */}
        {title.includes("Reports") && (
          <>
            <div className="h-3 w-1/2 rounded bg-[var(--color-text-primary)]/50" />
            <div className="space-y-2">
              <div className="h-3 rounded bg-gray-200" />
              <div className="h-3 rounded bg-gray-200 w-5/6" />
              <div className="h-3 rounded bg-gray-200 w-4/6" />
            </div>

            <div className="mt-3 h-8 rounded-lg bg-[var(--color-text-primary)]/10 flex items-center px-3 text-xs font-semibold text-[var(--color-text-primary)]">
              Performance Insight
            </div>
          </>
        )}
      </div>

      {/* Footer copy */}
      <p className="text-sm text-gray-600 mt-5">{desc}</p>
    </div>
  );
}
