export default function BigImageCard({ image }) {
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
