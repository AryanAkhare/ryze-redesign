import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);

  // Helper function to convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "255, 72, 1";
  };

  // Define color themes
  const themes = [
    {
      name: "Default",
      bg: "#ffffff",
      textPrimary: "#FF4801",
      textSecondary: "#090a0a",
      accent: "#090a0a",
    },
    {
      name: "Blue",
      bg: "#ffffff",
      textPrimary: "#3B82F6",
      textSecondary: "#1E293B",
      accent: "#1E293B",
    },
    {
      name: "Purple",
      bg: "#ffffff",
      textPrimary: "#8B5CF6",
      textSecondary: "#1E1B4B",
      accent: "#1E1B4B",
    },
    {
      name: "Green",
      bg: "#ffffff",
      textPrimary: "#10B981",
      textSecondary: "#064E3B",
      accent: "#064E3B",
    },
    
  ];

  // Function to change theme
  const changeTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
    const theme = themes[nextIndex];
    
    // Update CSS variables
    document.documentElement.style.setProperty("--color-bg", theme.bg);
    document.documentElement.style.setProperty("--color-text-primary", theme.textPrimary);
    document.documentElement.style.setProperty("--color-text-secondary", theme.textSecondary);
    document.documentElement.style.setProperty("--color-accent", theme.accent);
    // Update RGB variable for rgba() usage
    document.documentElement.style.setProperty("--color-primary-rgb", hexToRgb(theme.textPrimary));
    
    // Save to localStorage
    localStorage.setItem("theme", nextIndex.toString());
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const index = parseInt(savedTheme);
      setThemeIndex(index);
      const theme = themes[index];
      document.documentElement.style.setProperty("--color-bg", theme.bg);
      document.documentElement.style.setProperty("--color-text-primary", theme.textPrimary);
      document.documentElement.style.setProperty("--color-text-secondary", theme.textSecondary);
      document.documentElement.style.setProperty("--color-accent", theme.accent);
      // Update RGB variable for rgba() usage
      document.documentElement.style.setProperty("--color-primary-rgb", hexToRgb(theme.textPrimary));
    } else {
      // Set default RGB value
      document.documentElement.style.setProperty("--color-primary-rgb", hexToRgb(themes[0].textPrimary));
    }
  }, []);

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
        <NavLink
          to="/"
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
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-16">
          <NavLink
            to="/case-studies"
            className="nav-link-lg"
          >
            Case Studies
          </NavLink>

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
              <NavLink
                to="/our-story"
                className="dropdown-item-lg block w-full text-left"
                onClick={() => setAboutOpen(false)}
              >
                Our Story
              </NavLink>
              <button
                type="button"
                className="dropdown-item-lg w-full text-left"
              >
                Community
              </button>
            </div>
          </div>
        </nav>

        {/* CTA & Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={changeTheme}
            className="
              relative
              w-10 h-10
              rounded-full
              bg-gray-100
              hover:bg-[var(--color-text-primary)]
              hover:text-white
              transition-all duration-300
              flex items-center justify-center
              group
              border-2 border-transparent
              hover:border-[var(--color-text-primary)]
            "
            title={`Switch theme (Current: ${themes[themeIndex].name})`}
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            {/* Theme indicator dot */}
            <span
              className="
                absolute -top-1 -right-1
                w-3 h-3
                rounded-full
                bg-[var(--color-text-primary)]
                border-2 border-white
                transition-all duration-300
              "
            />
          </button>

          <button className="cta-btn-lg">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}