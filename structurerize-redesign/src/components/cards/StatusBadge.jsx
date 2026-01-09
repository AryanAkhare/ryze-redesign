import { motion } from "framer-motion";

export default function StatusBadge({ status }) {
  if (status === "PENDING")
    return <Badge variant="gray"> Pending</Badge>;

  if (status === "SCANNING")
    return <Badge variant="blue" pulse> Scanning</Badge>;

  if (status === "KEYWORD")
    return <Badge variant="green">✓ Keyword</Badge>;

  if (status === "NEGATIVE")
    return <Badge variant="red">✕ Negative</Badge>;

  return null;
}

function Badge({ children, variant, pulse }) {
  const getStyle = () => {
    switch(variant) {
      case "gray":
        return { className: "bg-gray-100 text-gray-600 border-gray-200" };
      case "blue":
        return { 
          className: "border",
          style: { 
            backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
            color: "var(--color-text-primary)",
            borderColor: "rgba(var(--color-primary-rgb), 0.2)"
          }
        };
      case "green":
        return { 
          className: "border",
          style: { 
            backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
            color: "var(--color-text-primary)",
            borderColor: "rgba(var(--color-primary-rgb), 0.3)"
          }
        };
      case "red":
        return { className: "bg-red-50 text-red-600 border-red-200" };
      default:
        return { className: "" };
    }
  };

  const styleProps = getStyle();

  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className={`
        flex items-center justify-center gap-1
        text-xs px-3 py-1.5 rounded-full font-bold
        border
        ${styleProps.className}
        ${pulse ? "animate-pulse" : ""}
      `}
      style={styleProps.style}
    >
      {children}
    </motion.span>
  );
}
