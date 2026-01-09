export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  source,
}) {
  return (
    <div
      className="
        group
        w-full
        rounded-2xl
        bg-white
        p-6
        font-sans
        transition-all duration-300 ease-out
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        hover:ring-[4px] hover:ring-[#1d9bf0]
        hover:shadow-[0_28px_70px_color-mix(in_srgb,#1d9bf0_45%,transparent)]
      "
    >
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div
            className="
              h-12 w-12 rounded-full
              bg-[#1d9bf0]/10
              flex items-center justify-center
              text-sm font-black text-[#1d9bf0]
              transition-colors duration-300
              group-hover:bg-[#1d9bf0]/10
              group-hover:text-[#1d9bf0]
            "
          >
            {author?.[0]}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="leading-tight">
              <p className="text-[15px] font-bold text-gray-900">
                {author}
              </p>
              <p className="text-[13px] text-gray-500">
                @{author?.replace(/\s+/g, "").toLowerCase()} · 3h
              </p>
            </div>

            <span className="text-xs font-semibold text-gray-400">
              {source || "X"}
            </span>
          </div>

          {/* Quote */}
          <p className="text-[16px] leading-snug text-gray-900">
            {quote}
          </p>

          {/* Footer meta */}
          <div className="mt-4 text-xs text-gray-400">
            Posted · 2h ago
          </div>
        </div>
      </div>
    </div>
  );
}
