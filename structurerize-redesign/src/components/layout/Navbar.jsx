import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-out
        ${
          scrolled
            ? "h-20 bg-white/75 backdrop-blur-2xl border-b border-black/10"
            : "h-28 bg-white"
        }
      `}
    >
      <div
        className={`
          max-w-7xl mx-auto h-full px-10
          flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "scale-[0.97]" : "scale-100"}
        `}
      >
        {/* Logo */}
       <div
  className="
    flex items-center
    text-4xl font-black tracking-tight leading-none
    transition-all duration-300 ease-out
    text-[var(--color-text-secondary)]
    hover:text-[var(--color-text-primary)]
    hover:scale-105
    hover:tracking-wider
  "
>
  Ryze
</div>


        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-16">
          <a className="nav-link-lg">Case Studies</a>

          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="nav-link-lg">About Us</button>

            <div
              className={`
                absolute top-14 left-1/2 -translate-x-1/2
                w-64 rounded-2xl bg-white overflow-hidden
                shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                border border-black/5
                transition-all duration-200 ease-out
                ${
                  aboutOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }
              `}
            >
              <a className="dropdown-item-lg">Our Story</a>
              <a className="dropdown-item-lg">Community</a>
            </div>
          </div>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-6">
          
          <button className="cta-btn-lg">
            Get Started →
            </button>
        </div>
      </div>
    </header>
  );
}
