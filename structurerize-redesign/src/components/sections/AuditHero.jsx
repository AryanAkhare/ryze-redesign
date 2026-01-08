import Ticker from "./Ticker";
import FeatureCard from "./FeatureCard";

export default function AuditHero() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* TOP TICKER */}
      <Ticker />

      {/* HERO */}
      <div className="py-28 text-center px-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
          Audit your{" "}
          <span className="text-[var(--color-text-primary)]">
            ad account
          </span>{" "}
          instantly.
        </h1>

        {/* INPUT + CTA */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xl flex gap-4 items-center">

            {/* FLOATING INPUT */}
            <div className="relative flex-1">
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

            {/* CTA */}
            <button
  className="
    relative overflow-hidden
    px-7 py-4
    rounded-2xl
    font-black
    text-white
    bg-[var(--color-text-primary)]
    cursor-pointer

    shadow-[0_8px_30px_rgba(255,72,1,0.35)]
    transition-all duration-300 ease-out
    hover:translate-y-[-1px]
    hover:shadow-[0_12px_40px_rgba(255,72,1,0.45)]

    before:absolute before:inset-0
    before:bg-black
    before:translate-x-[-100%]
    before:transition-transform before:duration-300 before:ease-out
    hover:before:translate-x-0

    before:z-0
  "
>
  <span className="relative z-10">
    Audit Account
  </span>
</button>

          </div>
        </div>
      </div>

      {/* BOTTOM TICKER */}
      <Ticker reverse />

      {/* FEATURES */}
      <div className="py-24 px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-black mb-16">
          An{" "}
          <span className="text-[var(--color-text-primary)]">
            AI marketer
          </span>{" "}
          that does it all for you
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Set up and launch campaigns"
            desc="From creatives to structure, automatically."
          />
          <FeatureCard
            title="Suggest what to fix and optimize"
            desc="Clear, prioritized actions with real impact."
          />
          <FeatureCard
            title="Reports that build themselves"
            desc="Always up-to-date performance insights."
          />
        </div>
      </div>
    </section>
  );
}
