export default function ImageCard({ image }) {
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
