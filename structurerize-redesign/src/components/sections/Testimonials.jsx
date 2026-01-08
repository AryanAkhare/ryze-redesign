// ==============================
// Testimonials Section
// ==============================
import google from "../../assets/testimonials/google_event.avif";
import team1 from "../../assets/testimonials/team-1.avif";
import team2 from "../../assets/testimonials/team-2.avif";
import speedy from "../../assets/logos/speedy-logo.svg";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-7xl font-black tracking-tight inline-flex items-baseline gap-3">
            <span>Wall of</span>
            <span className="text-[var(--color-text-primary)]">Love</span>
            <span className="heart-wrapper">
              <span className="heart" />
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="testimonials-grid">

  {/* ROW 1 */}
  <div className="leftTop">
    <BigImageCard image={team1} />
  </div>

  <div className="centerQuote">
    <QuoteCard />
  </div>

  <div className="centerStat1">
    <StatCard />
  </div>

  <div className="rightTop">
    <BigImageCard image={google} />
  </div>

  {/* ROW 2 */}
  <div className="leftMid">
    <TestimonialCard {...TESTIMONIALS[0]} />
  </div>

  <div className="centerStat2">
    <StatCard2 />
  </div>

  <div className="rightMid">
    <TestimonialCard {...TESTIMONIALS[1]} />
  </div>

  {/* ROW 3 */}
  <div className="leftBot">
    <TestimonialCard {...TESTIMONIALS[2]} />
  </div>

  <div className="centerImage">
    <ImageCard image={team2} />
  </div>

  <div className="rightBot">
    <TestimonialCard {...TESTIMONIALS[3]} />
  </div>

</div>

      </div>
    </section>
  );
}


//
// ==============================
// Card Components
// ==============================
//

function BigImageCard({ image }) {
  return (
    <div
      className="
        relative h-full rounded-3xl
        overflow-hidden
        shadow-[0_22px_60px_rgba(0,0,0,0.2)]
      "
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Subtle depth overlay */}
      <div className="
        pointer-events-none
        absolute inset-0
        bg-gradient-to-t
        from-black/15 via-transparent to-transparent
      " />
    </div>
  );
}



function ImageCard({ image }) {
  return (
    <div
      className="
        relative h-full rounded-3xl
        overflow-hidden
        shadow-[0_20px_55px_rgba(0,0,0,0.18)]
      "
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-black/10 via-transparent to-transparent
      " />
    </div>
  );
}



function QuoteCard() {
  return (
    <div
      className="
        group
        relative h-full rounded-3xl
        p-0                         /* NO BORDER INITIALLY */
        transition-all duration-300 ease-out
        will-change-transform

        hover:p-[3px]               /* BORDER APPEARS */
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
          “Ryze’s AI-driven ads outperform human optimization by a huge margin.”
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









function StatCard() {
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




function StatCard2() {
  return (
    <div
      className="
        group
        h-full rounded-2xl
        bg-white
        transition-all duration-300 ease-out

        hover:shadow-[0_18px_45px_color-mix(in_srgb,var(--color-text-primary)_25%,transparent)]
      "
    >
      {/* Inner */}
      <div
        className="
          h-full rounded-[14px]
          bg-white
          px-6 py-6
          flex flex-col justify-between

          border-2 border-transparent     /* reserve space */
          transition-all duration-300 ease-out

          group-hover:border-[var(--color-text-primary)]
        "
      >
        {/* Logo */}
        <div className="mb-4">
          <img
            src={speedy}
            alt="Speedy"
            className="
              h-10 w-auto
              object-contain
              transition-transform duration-300
              group-hover:scale-[1.08]
            "
          />
        </div>

        {/* Copy */}
        <p className="text-[16px] font-medium leading-snug text-gray-800 max-w-[19rem]">
          Got the whole team up and running in a day. Super easy to pick up.
        </p>
      </div>
    </div>
  );
}




function TestimonialCard({
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






//
// ==============================
// Data
// ==============================
//

const TESTIMONIALS = [
  {
    quote:
      "We were drowning with reporting. Ryze gave us hours back every week to focus on real strategy.",
    author: "Roger Dunn",
    role: "Global Performance Lead",
    company: "Rivert",
    source: "★★★★★",
  },
  {
    quote:
      "Found wasted spend we would never have caught manually. ROAS up 45%.",
    author: "Daniel Roser",
    role: "GB",
    company: "Google Partner",
    source: "Trustpilot",
  },
  {
    quote:
      "What used to take days now takes under an hour. Winning new business is much easier.",
    author: "Gabriela K.",
    role: "Founder",
    company: "Agency",
    source: "X",
  },
  {
    quote:
      "Broke down performance by asset—headlines, thumbnails, copy. CTR basically doubled.",
    author: "Daniel Amezquita",
    role: "Global Ads Strategy",
    company: "Glava",
    source: "LinkedIn",
  },
];
