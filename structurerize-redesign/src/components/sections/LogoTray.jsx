import caleyx from "../../assets/logos/caleyx-logo.avif";
import directly from "../../assets/logos/directly_logo.avif";
import hg from "../../assets/logos/hg_logo.avif";
import mos from "../../assets/logos/mos_logo1.avif";
import motif from "../../assets/logos/motif_digital.avif";
import pupil from "../../assets/logos/pupil_logo1.avif";
import ritma from "../../assets/logos/ritma_logo1.avif";
import speedy from "../../assets/logos/speedy-logo.svg";
import tetra from "../../assets/logos/tetra-logo.avif";
import willyx from "../../assets/logos/villlyx_logo.avif";

export default function LogoTray() {
  return (
    <section className="py-24 bg-white overflow-hidden">
  <div className="relative px-10">

    {/* Gradient fade edges */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

    {/* Marquee */}
    <div className="marquee">
  <div className="marquee-track">
    {[...logos, ...logos].map((logo, i) => (
      <div
        key={i}
        className="
          flex items-center justify-center
          grayscale opacity-40
          transition-all duration-300 ease-out
          hover:grayscale-0 hover:opacity-100 hover:scale-110
          will-change-transform
        "
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="h-10 w-auto object-contain select-none pointer-events-none"
        />
      </div>
    ))}
  </div>
</div>


  </div>
</section>
  );
}

const logos = [
  { name: "Motif Digital", src: motif },
  { name: "Pupil", src: pupil },
  { name: "Ritma", src: ritma },
  { name: "Speedy", src: speedy },
  { name: "Tetra", src: tetra },
  { name: "Willyx", src: willyx },
  { name: "Caleyx", src: caleyx },
  { name: "Directly", src: directly },
  { name: "HG", src: hg },
  { name: "MOS", src: mos },
];

