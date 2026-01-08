import React, { useState } from "react";

const DECISIONS = [
  "Paused 27 queries burning $1.8k with 0 conversions",
  "Split Brand vs Non-Brand (ROAS +3.7)",
  "Added 85 negatives to block wasted traffic",
  "Raised cap on high-ROAS campaign (+$5.9k/mo)",
];

const CHAT_OPTIONS = [
  {
    q: "How can I improve ROAS?",
    a: "Your ROAS is being dragged down by overlapping audiences and fatigued creatives. I’d consolidate ad sets and refresh your top-spend assets first.",
  },
  {
    q: "Which ads are underperforming?",
    a: "Your non-brand search campaigns and older image creatives are spending heavily with low conversion rates. These should be paused or reworked.",
  },
  {
    q: "What should I test next?",
    a: "Test a creative refresh on your highest-spend campaigns and split brand vs non-brand bidding to unlock incremental gains.",
  },
];

export default function Comparison() {
  const [applied, setApplied] = useState(Array(DECISIONS.length).fill(false));
  const [chat, setChat] = useState([]);

  const handleApply = (index) => {
    setApplied((prev) => prev.map((v, i) => (i === index ? true : v)));
  };

  const handleChatClick = (item) => {
    setChat((prev) => [
      ...prev,
      { role: "user", text: item.q },
      { role: "ai", text: item.a },
    ]);
  };

  return (
    <section className="py-28 lg:py-36 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* LEFT — Autonomous AI */}
          <div>
            <h2 className="text-5xl sm:text-6xl font-black leading-tight">
              <span className="text-[var(--color-text-primary)]">
                Autonomous AI
              </span>{" "}
              that runs your ads
            </h2>

            <ul className="mt-12 space-y-7 text-xl text-gray-200">
              {[
                "24/7 performance monitoring",
                "Automatically fixes wasted spend",
                "Deploys optimizations without prompts",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="mt-3 h-3 w-3 rounded-full bg-[var(--color-text-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Decision Feed */}
            <div className="mt-14 space-y-4">
              {DECISIONS.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    px-7 py-5
                  "
                >
                  <p className="text-base sm:text-lg text-gray-100">{item}</p>

                  {applied[i] ? (
                    <span
                      className="
    cursor-default
    text-sm font-bold
    px-4 py-2 rounded-full

    bg-[var(--color-text-primary)]
    text-black
  "
                    >
                      Applied
                    </span>
                  ) : (
                    <button
                      onClick={() => handleApply(i)}
                      className="
    cursor-pointer
    text-sm font-bold
    px-4 py-2 rounded-full

    bg-green-500 text-black
    border border-green-500

    hover:bg-[var(--color-text-primary)]
    hover:border-[var(--color-text-primary)]
    hover:text-black

    transition-all duration-200 ease-out
    active:scale-95
  "
                    >
                      Apply
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Chat Assistant */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              Chat AI for <span className="text-[var(--color-text-primary)]">paid ads</span>
            </h2>

            {/* Clickable prompts */}
            {/* Clickable prompts */}
            <div className="mt-10 flex flex-wrap gap-4">
              {CHAT_OPTIONS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleChatClick(item)}
                  className="
        group
        cursor-pointer
        px-6 py-3 rounded-full

        text-base font-semibold
        text-gray-300

        bg-white/5
        border border-white/15

        transition-all duration-200 ease-out

        hover:bg-[var(--color-text-primary)]
        hover:border-[var(--color-text-primary)]
        hover:text-black
        hover:-translate-y-0.5

        active:scale-95
      "
                >
                  <span className="flex items-center gap-2">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Chat Window */}
            <div
              className="
  mt-12
  rounded-3xl
  bg-gradient-to-b from-white/5 to-white/0
  border border-white/10
  p-6
  space-y-5
"
            >
              {/* Empty state */}
              {chat.length === 0 && (
                <p className="text-base text-gray-400 text-center py-10">
                  Select a question to start the conversation
                </p>
              )}

              {chat.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
          relative
          max-w-[78%]
          px-6 py-4
          rounded-2xl
          text-base leading-relaxed
          transition-all duration-200

          ${
            msg.role === "user"
              ? `
                bg-black text-white
                border border-[var(--color-text-primary)]
                shadow-[0_10px_30px_color-mix(in_srgb,var(--color-text-primary)_25%,transparent)]
                rounded-br-md
              `
              : `
                bg-[#1a1a1a] text-gray-100
                shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                rounded-bl-md
              `
          }
        `}
                  >
                    {msg.text}

                    {/* Subtle glow accent */}
                    {msg.role === "user" && (
                      <span
                        className="
            pointer-events-none
            absolute inset-0
            rounded-2xl
            ring-1 ring-[var(--color-text-primary)]/30
          "
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
