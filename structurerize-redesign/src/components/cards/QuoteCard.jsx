export default function QuoteCard() {
  return (
    <div
      className="
        group
        relative h-full rounded-3xl
        p-0
        transition-all duration-300 ease-out
        will-change-transform
        hover:p-[3px]
        hover:bg-[var(--color-text-primary)]
      "
    >
      <div
        className="
          h-full rounded-[20px]
          bg-black text-white
          px-6 py-5
          flex flex-col justify-between
          transition-all duration-300 ease-out
          group-hover:bg-white
          group-hover:text-black
        "
      >
        {/* Quote */}
        <p
          className="
            text-[22px]
            leading-snug
            font-extrabold
            tracking-tight
            max-w-[92%]
          "
        >
          "Ryze's AI-driven ads outperform human optimization by a huge margin."
        </p>

        {/* Attribution */}
        <div className="pt-3">
          <div className="h-px w-10 bg-current opacity-30 mb-2" />
          <p className="text-sm font-semibold">
            Mathilde Biggs
          </p>
          <p className="text-xs opacity-60">
            CEO · Motif Digital
          </p>
        </div>
      </div>
    </div>
  );
}
