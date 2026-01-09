// ==============================
// Testimonials Section
// ==============================
import google from "../../assets/testimonials/google_event.avif";
import team1 from "../../assets/testimonials/team-1.avif";
import team2 from "../../assets/testimonials/team-2.avif";
import BigImageCard from "../cards/BigImageCard";
import ImageCard from "../cards/ImageCard";
import QuoteCard from "../cards/QuoteCard";
import StatCard from "../cards/StatCard";
import StatCard2 from "../cards/StatCard2";
import TestimonialCard from "../cards/TestimonialCard";

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
