import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  emoji: string;
  delay: number;
  duration: number;
}

const PixelConfetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const emojis = ["💖", "💕", "✨", "🌸", "💗", "⭐", "🎀", "💝"];
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute text-2xl"
          style={{ left: `${piece.x}%`, top: -20 }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [1, 1, 0],
            rotate: 360,
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
        >
          {piece.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default PixelConfetti;
