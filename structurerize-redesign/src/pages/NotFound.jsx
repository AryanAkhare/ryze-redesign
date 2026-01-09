import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-md mx-auto text-center">
        <h1 
          className="text-8xl md:text-9xl font-black mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          404
        </h1>
        
        <h2 
          className="text-2xl md:text-3xl font-black mb-4"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Page Not Found
        </h2>
        
        <p 
          className="text-base md:text-lg mb-8 text-gray-600"
          style={{ color: "var(--color-text-secondary)" }}
        >
          The page you're looking for doesn't exist.
        </p>

        <button
          onClick={() => navigate("/")}
          className="
            px-8 py-3
            rounded-xl
            font-bold text-base
            text-white
            transition-all duration-300
            hover:scale-105
            active:scale-95
          "
          style={{
            backgroundColor: "var(--color-text-primary)",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
