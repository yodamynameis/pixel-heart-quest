import { motion } from "framer-motion";

type CatMood = "shy" | "excited" | "blushing" | "angry" | "dancing";

interface PixelCatProps {
  mood: CatMood;
  size?: "sm" | "md" | "lg";
  className?: string;
  message?: string;
}

const catEmojis: Record<CatMood, string> = {
  shy: "🐱",
  excited: "😸",
  blushing: "😽",
  angry: "😾",
  dancing: "😻",
};

const PixelCat = ({ mood, size = "md", className = "", message }: PixelCatProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={
        mood === "dancing"
          ? { rotate: [-5, 5, -5], y: [0, -5, 0] }
          : mood === "excited"
          ? { scale: [1, 1.1, 1] }
          : { y: [0, -3, 0] }
      }
      transition={{
        duration: mood === "dancing" ? 0.3 : 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className={`${sizeClasses[size]} select-none drop-shadow-pixel`}>
        {catEmojis[mood]}
      </span>
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border-2 border-pixel px-3 py-1 rounded-lg font-pixel text-xs text-foreground shadow-pixel"
        >
          {message}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-r-2 border-b-2 border-pixel rotate-45" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default PixelCat;
