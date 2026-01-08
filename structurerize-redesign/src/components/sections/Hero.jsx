export default function Hero() {
  return (
    <section
      className="min-h-[calc(100vh-7rem)] flex items-center mt-[10vh]"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className="text-sm font-black uppercase tracking-[0.3em] mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          AI-Powered Ad Optimization
        </p>

        {/* Main Headline */}
        {/* Main Headline */}
        <h1 className="text-[clamp(4rem,8vw,6.5rem)] font-black uppercase leading-[0.95] tracking-tight">
          <span style={{ color: "var(--color-text-primary)" }}>Let</span>{" "}
          <span style={{ color: "var(--color-text-secondary)" }}>
            AI manage
          </span>
          <br />
          <span style={{ color: "var(--color-text-primary)" }}>your</span>{" "}
          <span style={{ color: "var(--color-accent)" }}>ads</span>
        </h1>

        {/* Email CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
          <div className="relative w-full sm:w-[420px]">
            <input
              type="email"
              required
              placeholder=" "
              className="
      peer w-full
      px-6 py-4
      text-lg font-semibold
      bg-[var(--color-bg)]
      text-[var(--color-text-primary)]
      border-2 border-[var(--color-text-secondary)]
      rounded-2xl
      outline-none
      transition-all duration-300

      shadow-[3px_4px_0_var(--color-text-primary)]
      focus:shadow-[6px_7px_0_var(--color-text-primary)]
    "
            />

            <label
              className="
    absolute left-5 top-1/2 -translate-y-1/2
    px-2
    text-sm font-bold
    text-[var(--color-text-secondary)]
    bg-[var(--color-bg)]
    pointer-events-none
    transition-all duration-300

    peer-focus:top-[-12px]
    peer-focus:text-[var(--color-text-primary)]

    peer-not-placeholder-shown:top-[-12px]
    peer-not-placeholder-shown:text-[var(--color-text-primary)]
  "
            >
              Email address
            </label>
          </div>

          <button className="cta-btn-lg">Get Started →</button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-24">
          <p
            className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-slate-400"
            style={{
              borderColor: "var(--color-text-secondary)",
              color: "var(--color-accent)",
            }}
          >
            Powering performance teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20  contrast-125">
  {["Google", "Meta", "LinkedIn", "TikTok"].map((brand) => (
    <div
      key={brand}
      className="
        text-2xl font-black italic tracking-tighter
        text-[var(--color-text-secondary)]
        opacity-30
        transition-all duration-300
        hover:text-[var(--color-text-primary)]
        hover:opacity-100
        hover:scale-110
      "
    >
      {brand}
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
