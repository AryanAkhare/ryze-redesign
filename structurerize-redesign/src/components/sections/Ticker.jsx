export default function Ticker({ reverse = false }) {
  return (
    <div className="bg-[var(--color-text-primary)] text-white overflow-hidden">
      <div
        className={`
          flex w-max items-center
          ${reverse ? "animate-tickerReverse" : "animate-ticker"}
        `}
      >
        {/* Track — duplicated once for infinite loop */}
        {[0, 1].map((_, i) => (
          <div
            key={i}
            className="
              flex items-center
              gap-12
              px-8
              py-3
              text-sm sm:text-base
              font-extrabold
              tracking-wide
              uppercase
              whitespace-nowrap
            "
          >
            <span>$500M+ Ad Spend Managed</span>
            <span className="opacity-70">•</span>
            <span>2000+ Clients</span>
            <span className="opacity-70">•</span>
            <span>700+ Agencies</span>
            <span className="opacity-70">•</span>
            <span>23+ Countries</span>
          </div>
        ))}
      </div>
    </div>
  );
}