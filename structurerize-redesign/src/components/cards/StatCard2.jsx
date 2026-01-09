import speedy from "../../assets/logos/speedy-logo.svg";

export default function StatCard2() {
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
          border-2 border-transparent
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
